import {
  expect as expectCDK,
  MatchStyle,
  matchTemplate,
} from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";

import * as CdkProjectTemplate from "../lib/helloService/stacks/helloStack";

test("Empty Stack", () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkProjectTemplate.HelloStack(app, "MyTestStack");
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
