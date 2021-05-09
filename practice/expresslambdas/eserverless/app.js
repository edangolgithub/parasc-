const express = require("express");
const sls = require("serverless-http");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/:userName", (req, res) => {
    res.send(`Welcome, ${req.params.userName}`);
})

module.exports.handler = sls(app);