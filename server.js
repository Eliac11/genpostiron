var http = require('http');
var port = process.env.PORT || 1337;
var fs = require('fs');


var FileMeneger = function (filePath) {

    return fs.readFileSync(filePath, 'utf8')
}


var server = http.createServer(function (req, res) {
    if (req.method == "GET") {
        switch (req.url) {

            case "/":
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(FileMeneger("./index.html"));
                break
            case "/body.css":
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(FileMeneger("css/body.css"));
                break
        }
    }
})

server.listen(port, "192.168.99.6")