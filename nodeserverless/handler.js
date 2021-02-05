'use strict';
var AWS = require('aws-sdk');
var s3 = new AWS.S3();  // 1
module.exports.hello = (event, context, callback) => {
  var params = {
    Bucket: 'evansite',  // 2
  };
  s3.listObjectsV2(params, function(err, data) {  // 3
    if (err) {
      console.log(err, err.stack);
    } else {
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          "bucket_list": data // 4
        }),
      };
      callback(null, response);
    }
  });
};