const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const AWS = require('aws-sdk');
const uuid = require('node-uuid');

const { TODOS_TABLE, IS_OFFLINE } = process.env;

const dynamoDb =
  new AWS.DynamoDB.DocumentClient();

app.use(bodyParser.json({ strict: false }));

app.get('/', (req, res) => {
   res.json({"msg":"ok"})
})

app.get('/todos', (req, res) => {
  const params = {
    TableName: 'Transaction',
  };

  dynamoDb.scan(params, (error, result) => {
    if (error) {
      res.status(400).json({ error: 'Error retrieving Todos'});
    }

    const { Items: todos } = result;

    res.json({ todos });
  })
});

// app.post('/todos', (req, res) => {
//     const { title, done = false} = req.body;
  
//     const todoId = uuid.v4();
  
//     const params = {
//       TableName: TODOS_TABLE,
//       Item: {
//         todoId,
//         title,
//         done,
//       },
//     };
  
//     dynamoDb.put(params, (error) => {
//       if (error) {
//         console.log('Error creating Todo: ', error);
//         res.status(400).json({ error: 'Could not create Todo' });
//       }
  
//       res.json({ todoId, title, done });
//     });
//   });

module.exports.handler = serverless(app);