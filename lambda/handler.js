'use strict';
//const serverless = require('serverless-http');
//const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
const uuid = require('uuid');
const i = require('./calculation')



const { TRANSACTIONS_TABLE } = process.env;

const dynamoDb =
  new AWS.DynamoDB.DocumentClient();
  var paramss = {
    TableName: TRANSACTIONS_TABLE
    ,
    IndexName: 'latestindex',
    KeyConditionExpression: "islatest = :latest",
    ExpressionAttributeValues: {
      ":latest": "1"
    }
  };
function getItems() {
  var paramss = {
    TableName: TRANSACTIONS_TABLE
    ,
    IndexName: 'latestindex',
    KeyConditionExpression: "islatest = :latest",
    ExpressionAttributeValues: {
      ":latest": "1"
    }
  };
  try {
    dynamoDb.query(paramss, function (err, data) {
      if (err) {
        console.log("Error", err);
        return err;
      } else {
       // console.log("Success", data);
        return data;
      }
    })
  
  } catch (err) {
    return err
  }
}
async function InsertItem(element, iinterest, dateString) {
  try {
    var bsum = element.balance + iinterest
    var params = {
      TableName: TRANSACTIONS_TABLE,
      Item:
      {
        "created": dateString,
        "balance": Number(bsum.toFixed(2)),
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

    var data = dynamoDb.put(params).promise();
    return data;

  }
  catch (error) {

  }
}
async function updateitems(element) {
  try {
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
    };

    var res = dynamoDb.update(params).promise();
    return res;

  } catch (error) {

  }
}
module.exports.start =  (event) => {
  try {

    // const currentDate = new Date();
    // const currentDayOfMonth = currentDate.getDate();
    // const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
    // const currentYear = currentDate.getFullYear();
    // var datestring = currentYear + "-" + (currentMonth + 1) + "-" + currentDayOfMonth;

  dynamoDb.query(paramss, function (err, data) {
      if (err) {
        console.log("Error", err);
        return err;
      } else {
        //console.log( data.Items);
        data.Items.forEach(function (element, index, array) {
        var iinterest = i.CalculteDailyInterest(element.balance, .06, 365, 1 / 365);
        var bsum = element.balance + iinterest
        var param = {
          TableName: TRANSACTIONS_TABLE,
          Item:
          {
            "created": new Date().toISOString(),
            "balance": Number(bsum.toFixed(2)),
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

        dynamoDb.put(param, function (err, data) {
          if (err) {
            console.log("Error", err);
            return err;
          } else {
            //console.log( data.Items);

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
         
  
           dynamoDb.update(params, function (err, data) {
              if (err) {
                console.log("Error", err);
              } else {
                console.log("Success", data);
              }
            })
           
          }
        })


      })
      }
    })  
  

    // result.then(d => {
    // for (let index = 0; index < result.Count; index++) {

    //   //console.log(result.Items[index])
    //   var element=d.Items[index];
    //   console.log(element.balance)
    //   var iinterest = i.CalculteDailyInterest(element.balance, .06, 365, 1 / 365);
    //   var ok = InsertItem(element, iinterest, datestring);
     
    //  // var ok2= await updateitems(element);
    //  // console.log(ok2)
    // }
   
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
            input: event           
          }          
        ),
        isBase64Encoded : true|false
      };
   // })
  } catch (error) {
    console.error(error);
  }


  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
