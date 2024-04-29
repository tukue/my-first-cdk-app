#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { FirstCdkAppStack } from '../lib/first-cdk-app-stack';

const app = new cdk.App();
new FirstCdkAppStack(app, 'blue', {
  stackName: 'blue',
  deploymentEnvironment: 'blue',
});

// instiantiate green stack
new FirstCdkAppStack(app, 'green', {
  stackName: 'green',
  deploymentEnvironment: 'green',
});