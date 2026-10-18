import {
  CfnOutput,
  Duration,
  RemovalPolicy,
  Stack,
  StackProps,
  Tags,
} from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import * as logs from "aws-cdk-lib/aws-logs";
import * as iam from "aws-cdk-lib/aws-iam";
import * as ses from "aws-cdk-lib/aws-ses";
import * as api from "aws-cdk-lib/aws-apigatewayv2";
import { HttpLambdaIntegration } from "aws-cdk-lib/aws-apigatewayv2-integrations";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as cloudwatch from "aws-cdk-lib/aws-cloudwatch";
import { fileURLToPath } from "node:url";

export class InquiryStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);
    const origins = [
      "https://jarvon.digital",
      "https://www.jarvon.digital",
      "https://jarvondigital.com",
      "https://www.jarvondigital.com",
      "https://main.d36ica479ygfuy.amplifyapp.com",
    ];
    const zone = route53.HostedZone.fromHostedZoneAttributes(
      this,
      "ExistingZone",
      { hostedZoneId: "Z0750042GWQLI1ZEZKF6", zoneName: "jarvon.digital" },
    );
    for (const token of [
      "4uhmiuai4nydnlkaqqrrcwbrd4khdozg",
      "pjepjlehpbpfxyntt5kci37hfcjdmqeg",
      "dinuvibli52ak2yaug2zunyvhg25boin",
    ]) {
      new route53.CnameRecord(this, `Dkim${token}`, {
        zone,
        recordName: `${token}._domainkey`,
        domainName: `${token}.dkim.amazonses.com`,
        ttl: Duration.minutes(5),
      });
    }
    new route53.TxtRecord(this, "DomainVerification", {
      zone,
      recordName: "_amazonses",
      values: ["/HZDUql03vDTnGjJt/fynAusmpufSkUyr7ypsTirs8w="],
      ttl: Duration.minutes(5),
    });
    new route53.MxRecord(this, "MailFromMx", {
      zone,
      recordName: "mail",
      values: [
        { priority: 10, hostName: "feedback-smtp.us-east-1.amazonses.com" },
      ],
      ttl: Duration.minutes(5),
    });
    new route53.TxtRecord(this, "MailFromSpf", {
      zone,
      recordName: "mail",
      values: ["v=spf1 include:amazonses.com ~all"],
      ttl: Duration.minutes(5),
    });
    const identity = ses.EmailIdentity.fromEmailIdentityName(
      this,
      "ExistingDomain",
      "jarvon.digital",
    );
    const logGroup = new logs.LogGroup(this, "InquiryLogs", {
      retention: logs.RetentionDays.ONE_MONTH,
      removalPolicy: RemovalPolicy.RETAIN,
    });
    const role = new iam.Role(this, "InquiryRole", {
      assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"),
      description:
        "Send JarVonDigital inquiry notifications through the verified SES domain.",
    });
    logGroup.grantWrite(role);
    const fn = new NodejsFunction(this, "Inquiry", {
      entry: fileURLToPath(new URL("./inquiry-handler.ts", import.meta.url)),
      handler: "handler",
      runtime: lambda.Runtime.NODEJS_22_X,
      architecture: lambda.Architecture.ARM_64,
      memorySize: 256,
      timeout: Duration.seconds(10),
      reservedConcurrentExecutions: 2,
      role,
      logGroup,
      environment: {
        SENDER_EMAIL: "website@jarvon.digital",
        RECIPIENT_EMAIL: "jarvondigital@gmail.com",
        ALLOWED_ORIGINS: origins.join(","),
      },
      bundling: { minify: true, sourceMap: false, bundleAwsSDK: true },
    });
    // CDK derives the identity-scoped policy. See generated policy analysis for SDK action coverage.
    const destination = ses.EmailIdentity.fromEmailIdentityName(
      this,
      "VerifiedDestination",
      "jarvondigital@gmail.com",
    );
    for (const mailIdentity of [identity, destination]) {
      const grant = mailIdentity.grant(role, "ses:SendEmail");
      grant.principalStatement?.addConditions({
        StringEquals: { "ses:FromAddress": "website@jarvon.digital" },
        "ForAllValues:StringEquals": {
          "ses:Recipients": ["jarvondigital@gmail.com"],
        },
        Null: { "ses:Recipients": "false" },
      });
    }
    const http = new api.HttpApi(this, "InquiryApi", {
      apiName: "JarVonDigital inquiries",
      createDefaultStage: false,
      corsPreflight: {
        allowOrigins: origins,
        allowMethods: [api.CorsHttpMethod.POST],
        allowHeaders: ["Content-Type"],
        maxAge: Duration.hours(1),
      },
    });
    http.addRoutes({
      path: "/inquiries",
      methods: [api.HttpMethod.POST],
      integration: new HttpLambdaIntegration("InquiryHandler", fn),
    });
    new api.HttpStage(this, "PublicStage", {
      httpApi: http,
      stageName: "$default",
      autoDeploy: true,
      throttle: { rateLimit: 0.2, burstLimit: 2 },
    });
    const failures = new logs.MetricFilter(this, "DeliveryFailureMetric", {
      logGroup,
      metricNamespace: "JarVonDigital/Inquiry",
      metricName: "DeliveryFailures",
      filterPattern: logs.FilterPattern.allTerms("inquiry.failed"),
      metricValue: "1",
    });
    new cloudwatch.Alarm(this, "DeliveryFailures", {
      metric: failures.metric({
        period: Duration.minutes(5),
        statistic: "Sum",
      }),
      threshold: 1,
      evaluationPeriods: 1,
      treatMissingData: cloudwatch.TreatMissingData.NOT_BREACHING,
      alarmDescription:
        "SES rejected an inquiry. Check the request ID in the inquiry log.",
    });
    new cloudwatch.Alarm(this, "InquiryErrors", {
      metric: fn.metricErrors({ period: Duration.minutes(5) }),
      threshold: 1,
      evaluationPeriods: 1,
      treatMissingData: cloudwatch.TreatMissingData.NOT_BREACHING,
      alarmDescription:
        "Check failed inquiry submissions. No customer content is logged.",
    });
    new CfnOutput(this, "InquiryEndpoint", {
      value: `${http.apiEndpoint}/inquiries`,
    });
    Tags.of(this).add("Project", "JarVonDigital");
    Tags.of(this).add("Purpose", "Website inquiries");
  }
}
