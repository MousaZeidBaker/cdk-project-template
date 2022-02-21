import { App } from "aws-cdk-lib";

import { config } from "./config";
import { Instance } from "./instance";

const app = new App();
new Instance(app, config.appName, config.account, config.region);
app.synth();
