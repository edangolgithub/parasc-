'use strict';
//const serverless = require('serverless-http');
//const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
const uuid = require('uuid');
const i = require('./calculation')

const { TRANSACTIONS_TABLE } = process.env;

const dynamoDb =
  new AWS.DynamoDB.DocumentClient();
module.exports.start = async (event) => {
  try {


    var paramss = {
      TableName: TRANSACTIONS_TABLE
      ,
      IndexName: 'latestindex',
      KeyConditionExpression: "islatest = :latest",
      ExpressionAttributeValues: {
        ":latest": "1"
      }
    };
    var data =await dynamoDb.query(paramss).promise();
    // var x=JSON.stringify(result, null, 2)
    //console.log("j")
    // console.log(result)
    data.then(function (result) {

      const currentDate = new Date();

      const currentDayOfMonth = currentDate.getDate();
      const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
      const currentYear = currentDate.getFullYear();

      const dateString = currentYear + "-" + (currentMonth + 1) + "-" + currentDayOfMonth;
      result.Items.forEach(function (element, index, array) {
        var iinterest = i.CalculteDailyInterest(element.balance, .06, 365, 1 / 365);
        // console.log(element)
        var params = {
          TableName: TRANSACTIONS_TABLE,
          Item:
          {
            "created": dateString,
            "balance": element.balance + iinterest,
            "accountid": element.accountid,
            "entry": element.entry,
            "accounttypeid": element.accounttypeid,
            "amount": 0,
            "id": uuid.v4(),
            "type": element.type,
            "interest": iinterest,
            "islatest": "1"

          }
        };

        var x =await dynamoDb.put(params, function (err, data) {
          if (err) {
            console.log("Error", err);
          } else {
            console.log("Success", data);
          }
        }).promise()
        x.then(function () {
          var params = {
            TableName: TRANSACTIONS_TABLE,
            Key: {
              "id": element.id,
              "created": element.created
            },
            UpdateExpression: "set islatest = :val",

            ExpressionAttributeValues: {
              ":val": "0"
            },
          }
       

         await dynamoDb.update(params, function (err, data) {
            if (err) {
              console.log("Error", err);
            } else {
              console.log("Success", data);
            }
          })
        })
      })
    })
   
  } catch (error) {
    console.error(error);
  }
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
   

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
