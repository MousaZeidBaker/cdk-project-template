# CDK Project Template

## Getting started

### Setup

Install dependencies

```shell
yarn install
```

Build
```shell
yarn build
```

List stacks
```shell
AWS_DEFAULT_PROFILE=my-profile \
CDK_DEPLOY_REGION=eu-central-1 \
CDK_APP_NAME=MyApp \
ENV=dev \
yarn cdk list
```

Deploy stacks, the `--no-execute` flag will NOT execute the change set
```shell
AWS_DEFAULT_PROFILE=my-profile \
CDK_DEPLOY_REGION=eu-central-1 \
CDK_APP_NAME=MyApp \
ENV=dev \
yarn cdk deploy --all --no-previous-parameters --no-execute
```

### Develop

Watch files
```shell
yarn watch
```

Run tests
```shell
yarn test
```

Run linter, pass `--fix` to automatically fix most problems
```shell
yarn lint
```

### Unblocking cross-stack CDK references example
 
CDK blocks changes that deletes a reference between two Stacks, following link
shows how to delete cross-stack references:
https://github.com/skinny85/cdk-reference-unblocking
