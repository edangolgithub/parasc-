```
npm install -g serverless
Pro tip: You can install the NPM module local to your project, instead of globally.

$ npm install serverless --save-dev
The Serverless team likes to move fast and break things, so it might be a good idea to set your Serverless version in your package.json. This way, you can use the latest version of Serverless on new projects without impacting older ones.

The tradeoff is that you’ll have to drill down to a subfolder in order to reach the serverless executable:

 ./node_modules/serverless/bin/serverless

serverless create --template aws-nodejs

sls invoke local -f hello

sls: This is just a shortcut for serverless.
local: Your function runs on your local machine. Don’t worry, it’s not touching AWS at this point.
-f hello: You use the function flag and specify hello as an argument.


sls deploy

sls invoke -f hello
sls offline start
sls package
npm prune
npm i -D serverless-webpack webpack

const slsw = require('serverless-webpack');
module.exports = {
  target: 'node',
  entry: slsw.lib.entries,
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  node: false,
  optimization: {
    minimize: false,
  },
  devtool: 'inline-cheap-module-source-map',
};

String Data Example:

serverless invoke --function functionName --stage dev --region us-east-1 --data "hello world"

JSON Data Example:

serverless invoke --function functionName --stage dev --region us-east-1 --data '{ "property1": "value"}'

JSON Data from file:

serverless invoke --function functionName --stage dev --region us-east-1 --path lib/data.json

```