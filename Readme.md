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
```