const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const AWS = require('aws-sdk');
const uuid = require('node-uuid');
const i=require('./calculation')

const { TRANSACTIONS_TABLE, IS_OFFLINE } = process.env;

// const dynamoDb = IS_OFFLINE === 'true' ?
//   new AWS.DynamoDB.DocumentClient({
//     region: 'localhost',
//     endpoint: 'http://localhost:8000',
//   }) :
//   new AWS.DynamoDB.DocumentClient();
const dynamoDb =
  new AWS.DynamoDB.DocumentClient();

app.use(bodyParser.json({ strict: false }));
app.use(express.static('public'));
 // console.log(process.env)
app.get('/', (req, res) => {
 const dta=[1,2,3,4,5]
 const xx=i.CalculateTotal(dta);
  res.json({ "hello": "hi","data":xx });
})
app.get('/g/:id', (req, res) => {
  var balance=0;
  const client = new AWS.DynamoDB.DocumentClient();
  try {
    var params = {
      TableName: TRANSACTIONS_TABLE,
      Key: {
        'TransactionId': req.params.id
      }
    };
    client.get(params, (error, result) => {
      if (error) {
        res.status(400).json({ error: 'Error connecting database' });
      }
     // balance=i.getbalance(result);
     const flat = AWS.DynamoDB.Converter.unmarshall(result.Item);
     console.log(flat)
    //console.log(result)
      console.log(balance)
    })

  } catch (error) {
    console.error(error);
  }
  res.json({ "hello": "hi","amount": balance });
})
app.get('/interest', (req, res) => {
  const params = {
    TableName: TRANSACTIONS_TABLE,
  };
  console.log(params)
  dynamoDb.scan(params, (error, result) => {
    if (error) {
      res.status(400).json({ error: 'Error retrieving Todos' });
    }
    console.log(result)
    const { Items: ts } = result;

    res.json({ ts });
  })
});

app.post('/interest', (req, res) => {
  const { amount, done = false } = req.body;

  const TransactionId = uuid.v4();

  const params = {
    TableName: TRANSACTIONS_TABLE,
    Item: {
      TransactionId,
      amount,
      done,
    },
  };

  dynamoDb.put(params, (error) => {
    if (error) {
      console.log('Error creating Todo: ', error);
      res.status(400).json({ error: 'Could not create Todo' });
    }

    res.json({ TransactionId, amount, done });
  });
});

app.get('/test', (req, res) => {
  res.send(app.address());
})
app.get('/a', (req, res) => {
  res.send("this is sample")
})

module.exports.handler = serverless(app);