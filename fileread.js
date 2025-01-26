var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    fs.readFile('read.html',function(err,date){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(date);
        return res.end();
    })
}).listen(8080);