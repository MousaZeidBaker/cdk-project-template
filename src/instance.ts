import { Environment, Stack, Tags } from "aws-cdk-lib";
import { Construct, IConstruct, Node } from "constructs";

import { HelloStack } from "./hello-service/stacks/hello-stack";

/**
 * An instance of the application containing all stacks.
 *
 * Can be instantiated multiple times to model multiple copies of the
 * application.
 */
export class Instance extends Construct {
  constructor(scope: Construct, id: string, account?: string, region?: string) {
    super(scope, id);

    const env: Environment = {
      account: account,
      region: region
    };

    new HelloStack(this, "HelloStack", {
      env: env
    });

    // tag all stacks and their resources.
    // tags can be used to identify and categorize resources.
    const stacks = listStacks(this.node);
    for (const stack of stacks) {
      Tags.of(stack).add("AppName", id);
    }
  }
}

/**
 * Return stack nodes in a given construct node.
 *
 * @param {Node} node - The construct node to list stacks from
 * @returns {Array<IConstruct>} List of stack nodes
 */
function listStacks(node: Node): Array<IConstruct> {
  const stacks: Array<IConstruct> = [];
  for (const child of node.children) {
    if (child instanceof Stack) {
      stacks.push(child);
    }
  }
  return stacks;
}
