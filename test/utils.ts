import { App } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";

import { Instance } from "../src/instance";

const app = new App();
new Instance(app, "TestApp");
const stacks = app.synth().stacks;

/**
 * Return stack template in an app given a stack name.
 *
 * @param {string} stackName - The name of the stack to retrieve template for
 * @returns {Template} The stack template
 * @throws {Error} When stack not found
 */
export function getStackTemplate(stackName: string): Template {
  for (const stack of stacks) {
    if (stack.stackName.includes(stackName)) {
      return Template.fromJSON(stack.template);
    }
  }
  throw Error(`Stack with name ${stackName} not found`);
}
