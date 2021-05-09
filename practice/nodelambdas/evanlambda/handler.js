'use strict';
const file=require("./modules/file")

module.exports.start = async (event) => {

  var data = event.body ? JSON.parse(event.body) : event;

  resolvefunction(data);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: data,
      },
      null,
      2
    ),
  };
};
function resolvefunction(data) {
  switch (data.fun) {
    case "listbuckets":
      file.asyncread();
      break;

    default:
      console.log("bb")
      break;
  }
}
