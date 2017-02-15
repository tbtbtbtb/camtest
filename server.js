var http = require('http');
var httpProxy = require('http-proxy');
const port = 8080;
var proxy = httpProxy.createProxyServer({});

var requestHandler = (request, response) => {  
    proxy.web(request, response, { target: process.env.CAMERA_URI });
    console.log(request.url + ' => ' + process.env.CAMERA_URI );
};

var server = http.createServer(requestHandler).listen(port);
