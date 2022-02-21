FROM node:14-alpine AS build-image

WORKDIR /home/app

# copy config files
COPY package.json yarn.lock tsconfig.json ./

# install dependencies
RUN yarn install --frozen-lockfile

# copy src files
copy src src

# build application
RUN yarn build

# copy test files
copy test test

# run test
RUN yarn test

# prune non-prod dependencies
RUN yarn install --frozen-lockfile --production

# multi-stage build
FROM amazon/aws-lambda-nodejs:14

WORKDIR ${LAMBDA_TASK_ROOT}

COPY --from=build-image /home/app/dist ./dist
COPY --from=build-image /home/app/node_modules ./node_modules

EXPOSE 8080
CMD [ "dist/index.handler" ]
