const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const AWS = require('aws-sdk');
const uuid = require('node-uuid');


const { TRANSACTIONS_TABLE, IS_OFFLINE } = process.env;

const dynamoDb = IS_OFFLINE === 'true' ?
  new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000',
  }) :
  new AWS.DynamoDB.DocumentClient();

app.use(bodyParser.json({ strict: false }));
app.use(express.static('public'));
app.get('/',(req,res)=>{
  console.log(process.env)
  res.json({"hello":"hi"});
})
app.get('/interest', (req, res) => {
  const params = {
    TableName: TRANSACTIONS_TABLE,
  };
console.log(params)
  dynamoDb.scan(params, (error, result) => {
    if (error) {
      res.status(400).json({ error: 'Error retrieving Todos'});
    }

    const { Items: ts } = result;

    res.json({ ts });
  })
});

app.post('/interest', (req, res) => {
  const { amount, done = false} = req.body;

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

    res.json({TransactionId, amount, done });
  });
});

app.get('/test',(req,res)=>{
  res.send(app.address());
})
app.get('/a', (req, res) => {
res.send("this is sample")
})

module.exports.handler = serverless(app);