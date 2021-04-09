const AWS = require('aws-sdk');

AWS.config.update({
    region: "us-east-1"

});
const db = new AWS.DynamoDB.DocumentClient();

const table = "evantable";

async function scanitem() {
    var param = {
        TableName: table
    }
    var x = db.scan(param,
        function (error, data) {
            if (error) {
                console.log(error.message);
            }
            else {
                console.log(data);
            }
        }
    ).promise();
}
async function insertitem() {
    var params = {
        TableName: table,
        Item: {
            "evanid": "2001",
            "created": new Date().toISOString()
        }
    }
    var res = db.put(params, (er, data) => {
        er ? console.log(er) : console.log(data)
    }
    ).promise();
   return res;
}

async function query () {
    let params = {
      TableName: table,
      KeyConditionExpression: 'evanid = :id ',
      ExpressionAttributeValues: { ':id': '2016' },

    }
  
    try {
      let result = await db.query(params).promise()
      console.log(result)
    } catch (error) {
      console.error(error)
    }
  }
  async function update () {
    const params = {
      TableName: table,
      Key: {
        evanid: '2001',
        created: "2021-03-02T15:50:54.203Z"
      },
      UpdateExpression: 'set #na = :n',
      ExpressionAttributeValues: {
        ':n': "ram"
      },
      ExpressionAttributeNames:{
        "#na": "name"    
      },
      ReturnValues: 'UPDATED_NEW'
    }
  
    try {
      await db.update(params).promise()
    } catch (error) {
      console.error(error)
    }
  }
