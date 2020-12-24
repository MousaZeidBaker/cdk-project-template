import * as cdk from "@aws-cdk/core";

import { HelloStack } from "../lib/hello-service/stacks/hello-stack";

export class AppConstruct extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);

    new HelloStack(this, "HelloStack");
  }
}
