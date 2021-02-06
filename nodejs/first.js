var http = require('http');
const m = function () {
    return Date();
  };

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + m());
  res.end('Hello World!');
}).listen(8080);

