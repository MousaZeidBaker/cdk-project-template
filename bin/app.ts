#!/usr/bin/env node
import "source-map-support/register";

import * as cdk from "@aws-cdk/core";

import { AppConstruct } from "./app-construct";

const app = new cdk.App({
  context: {
    appName: "CdkProjectTemplate",
    stage: "dev",
  },
});

new AppConstruct(app, app.node.tryGetContext("appName"));
