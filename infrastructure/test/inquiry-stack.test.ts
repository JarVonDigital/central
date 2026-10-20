import assert from "node:assert/strict";
import { test } from "node:test";
import { App, CliCredentialsStackSynthesizer } from "aws-cdk-lib";
import { Template, Match } from "aws-cdk-lib/assertions";
import { InquiryStack } from "../src/inquiry-stack.js";
test("infrastructure scopes mail access, throttles the public route, and preserves hosting records", () => {
  const app = new App();
  const stack = new InquiryStack(app, "TestInquiry", {
    env: { account: "123456789012", region: "us-east-1" },
    synthesizer: new CliCredentialsStackSynthesizer({
      fileAssetsBucketName: "test-inquiry-artifacts",
    }),
  });
  const template = Template.fromStack(stack);
  template.resourceCountIs("AWS::ApiGatewayV2::Route", 1);
  template.hasResourceProperties("AWS::ApiGatewayV2::Route", {
    RouteKey: "POST /inquiries",
  });
  template.hasResourceProperties("AWS::ApiGatewayV2::Stage", {
    DefaultRouteSettings: { ThrottlingBurstLimit: 2, ThrottlingRateLimit: 0.2 },
  });
  template.hasResourceProperties("AWS::Lambda::Function", {
    Runtime: "nodejs22.x",
    Timeout: 10,
    ReservedConcurrentExecutions: 2,
    Environment: {
      Variables: Match.objectLike({
        RECIPIENT_EMAIL: "jarvondigital@gmail.com",
        SENDER_EMAIL: "website@jarvon.digital",
        RECAPTCHA_SECRET_KEY: Match.anyValue(),
      }),
    },
  });
  template.hasResourceProperties("AWS::IAM::Policy", {
    PolicyDocument: {
      Statement: Match.arrayWith([
        Match.objectLike({
          Action: "ses:SendEmail",
          Resource: Match.anyValue(),
          Condition: Match.objectLike({
            StringEquals: { "ses:FromAddress": "website@jarvon.digital" },
          }),
        }),
      ]),
    },
  });
  const resources = template.toJSON().Resources;
  const records = Object.values(resources).filter(
    (r: any) => r.Type === "AWS::Route53::RecordSet",
  ) as any[];
  assert.equal(records.length, 6);
  assert(
    records.every((r) => ["CNAME", "TXT", "MX"].includes(r.Properties.Type)),
  );
  assert(records.every((r) => r.Properties.Name !== "jarvon.digital."));
  assert.equal(
    Object.values(resources).filter((r: any) => r.Type === "AWS::Amplify::App")
      .length,
    0,
  );
  template.hasResourceProperties("AWS::Logs::LogGroup", {
    RetentionInDays: 30,
  });
  template.resourceCountIs("AWS::CloudWatch::Alarm", 2);
});
