#!/usr/bin/env node

const cdk = require('aws-cdk-lib');
const { Api } = require('../lib/base/api');

// Create a new app
const app = new cdk.App();

new Api(app, 'DevRustyCloudAPI', app.node.tryGetContext('dev'));
new Api(app, 'ProdRustyCloudAPI', app.node.tryGetContext('prod'));