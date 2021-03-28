'use strict';
const mod= require('./evans3.js')
const serverless = require('serverless-http');
//const uuid = require('uuid');
const express = require('express')
const app = express()
var cors = require('cors')
//const AWS = require('aws-sdk');

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
console.log( process.env.AWS_ACCESS_KEY_ID)

app.get('/u', function (req, res) {
  res.send({ "msg": "success" });
});
app.get('/', async function (req, res) {
var data = await mod.listbuckets()
console.log(data)
  res.json({"data":data });
});


module.exports.start = serverless(app);

