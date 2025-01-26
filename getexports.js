var http = require('http');
var dt = require('./export');

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write('the date and time'+dt.mydatetime());
    res.end();
}).listen(8080);