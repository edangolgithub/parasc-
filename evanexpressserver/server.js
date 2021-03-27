'use strict';
const serverless = require('serverless-http');
//const uuid = require('uuid');
const express = require('express')
const app = express()
var cors = require('cors')
//const AWS = require('aws-sdk');

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', function (req, res) {
  res.send({"msg":"success"});
  });


module.exports.start = serverless(app);

 