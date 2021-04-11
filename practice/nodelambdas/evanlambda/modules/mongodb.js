const MongoClient = require('mongodb').MongoClient;
const url = process.env.mongodburl;
console.log(url)
  MongoClient.connect(url, function(err, client) {  
    if (err) throw err;     
    const db = client.db();
    const collection=db.collection("evan collection")
    collection.findOne({}, function (findErr, result) {
        if (findErr) throw findErr;
        console.log(result);
        client.close();
  })
})