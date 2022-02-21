export const config = {
  env: process.env.ENV ?? "dev",
  // The CDK_DEFAULT_ACCOUNT env variable is automatically set by CDK based on
  // the provided AWS credentials. It must not be overridden nor be set
  // manually. If it's not set, then the AWS credentials are invalid.
  account: process.env.NODE_ENV,
  region: process.env.CDK_DEPLOY_REGION,
  appName: process.env.CDK_APP_NAME ?? "App"
};
