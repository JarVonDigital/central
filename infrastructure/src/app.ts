import { App, CliCredentialsStackSynthesizer } from "aws-cdk-lib";
import { InquiryStack } from "./inquiry-stack.js";
const app = new App();
new InquiryStack(app, "JarVonDigitalInquiry", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region:
      process.env.CDK_DEFAULT_REGION ?? process.env.AWS_REGION ?? "us-east-1",
  },
  terminationProtection: true,
  synthesizer: new CliCredentialsStackSynthesizer({
    fileAssetsBucketName: "jarvondigital-inquiry-assets-667924052526-us-east-1",
  }),
});
