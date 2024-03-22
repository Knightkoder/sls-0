import type { AWS } from '@serverless/typescript';

import {findAll, findById} from '@functions/users';

const serverlessConfiguration: AWS = {
  service: 'sls-0',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      STAGE : '${self:custom.stage}',
      POSTGRES_HOST:"localhost",
      POSTGRES_PORT:"5432",
      POSTGRES_SCHEMA:"sls0",
      POSTGRES_USER:"user1",
      POSTGRES_PASSWORD:"password",
      POSTGRES_DB:"sls0"
    },
  },
  // import the function via paths
  functions: { findAll, findById },
  package: { individually: true },
  custom: {
    stage: '${opt:stage,"local"}',
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
