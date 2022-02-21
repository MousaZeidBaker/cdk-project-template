import { getStackTemplate } from "../utils";

test("Lambda Function Created", () => {
  const template = getStackTemplate("HelloStack");

  template.resourceCountIs("AWS::Lambda::Function", 1);
});

test("S3 Bucket Blocks Public Access", () => {
  const template = getStackTemplate("HelloStack");

  template.hasResourceProperties("AWS::S3::Bucket", {
    PublicAccessBlockConfiguration: {
      BlockPublicAcls: true,
      BlockPublicPolicy: true,
      IgnorePublicAcls: true,
      RestrictPublicBuckets: true
    }
  });
});
