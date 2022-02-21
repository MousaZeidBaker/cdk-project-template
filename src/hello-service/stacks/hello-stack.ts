import {
  aws_lambda as lambda,
  aws_s3 as s3,
  RemovalPolicy,
  Stack,
  StackProps
} from "aws-cdk-lib";
import { Construct } from "constructs";
import path from "path";

export class HelloStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, "HelloBucket", {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: RemovalPolicy.DESTROY
    });

    new lambda.DockerImageFunction(this, "HelloLambda", {
      code: lambda.DockerImageCode.fromImageAsset(
        path.resolve(__dirname, "../lambdas/hello-lambda")
      ),
      environment: {
        BUCKET_NAME: bucket.bucketName
      }
    });
  }
}
