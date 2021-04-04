var AwsS3 = require('aws-sdk/clients/s3');
const s3 = new AwsS3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: 'us-east-1',
});

// // Set the region 
// AWS.config.update({
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_KEY,
//      region: 'us-east-1' });

// // Create S3 service object
// s3 = new AWS.S3();
const BUCKET_NAME = 'ed2021';
export async function listbuckets() {
    // Call S3 to list the buckets
    return s3.listBuckets(function (err, data) {
        if (err) {
            console.log("Error", err);
            return err;
        } else {
            //  console.log("Success", data.Buckets);
            return data.Buckets;
        }
    }).promise();
}

