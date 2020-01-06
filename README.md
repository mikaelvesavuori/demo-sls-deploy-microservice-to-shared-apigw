# Demo: Serverless Lambda function deployed under an existing AWS API Gateway

Sometimes it makes sense to deploy a new microservice/application under an existing API Gateway, for example if you have distributed teams contributing to your code base, but with a single (or segmented) APIs to resolve the Lambdas. While it's really easy to get a new API Gateway up, it may not be obvious how to make sure the function is attributed to a pre-existing one. This repo intends to give you a working example of just that.

Deployment is handled with [Serverless Framework](https://www.serverless.com).

## Pre-requisites

You should have Serverless Framework installed on your system, and have the possibility to deploy code to Amazon Web Services. Services used should be CloudFormation, S3, Lambda, and API Gateway.

## Instructions

1. Install dependencies in `api-base` and `function-on-shared-api` with `yarn` or `npm install`
2. Deploy the base API project, under `api-base` with `sls deploy`
3. Collect the 10-digit API ID and 10-digit API Resource ID from your new API in the API Gateway page on the AWS console ([https://eu-north-1.console.aws.amazon.com/apigateway/home?region=eu-north-1#/apis](https://eu-north-1.console.aws.amazon.com/apigateway/home?region=eu-north-1#/apis)). Add those IDs in `function-on-a-shared-api/serverless.yml`, around lines 23-24.
4. Deploy the shared service under the base API, from the folder `function-on-shared-api` with `sls deploy`
5. You will receive an endpoint which is new, however go to API Gateway ([https://eu-north-1.console.aws.amazon.com/apigateway/home?region=eu-north-1#/apis](https://eu-north-1.console.aws.amazon.com/apigateway/home?region=eu-north-1#/apis)) in the AWS console/GUI and locate the base path for the shared API and suffix it with `/sharedFunction` to get a complete URL such as `https://1bnm8ko8vh.execute-api.eu-north-1.amazonaws.com/dev/sharedFunction` – that will be the URL you should use
