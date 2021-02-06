var http=require('http');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("evan")
    res.end('Hello World!');
}).listen('4000')