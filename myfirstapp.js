var http = require("http");

var listener = function(req , res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h2 style="text-align: center;">Hello World</h2>');
};

    server = http.createServer(listener); 

    server.listen(3000);
    console.log('Server running athttp://127.0.0.1:3000/');
    