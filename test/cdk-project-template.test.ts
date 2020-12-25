import {
  expect as expectCDK,
  MatchStyle,
  matchTemplate,
} from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";

import { HelloStack } from "../lib/hello-service/stacks/hello-stack";

test("Empty Stack", () => {
  const app = new cdk.App();
  // WHEN
  const stack = new HelloStack(app, "HelloStack");
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        "Resources": {},
      },
      MatchStyle.EXACT
    )
  );
});
