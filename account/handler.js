'use strict';
const AWS = require("aws-sdk");






AWS.config.update({
  region: "us-east-1"

});

const db = new AWS.DynamoDB.DocumentClient();
const { table } = process.env;

async function insertitem() {
  var params = {
      TableName: table,
      Item: {
          "accountnumber": "2011",
          "created": new Date().toISOString()
      }
  }
  var res = db.put(params, (er, data) => {
      er ? console.log(er) : console.log(data)
  }).promise();
 return res;
}

module.exports.addaccount = async (event) => {

console.log(process.env)
var data=await insertitem();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: data,
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
