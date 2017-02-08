var http = require('http');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});

http.createServer(function(req, res) {
    proxy.web(req, res, { target: process.env.CAMERA_URI });
    console.log('CAMERA_URI: ' + process.env.CAMERA_URI );
}).listen(8080);
