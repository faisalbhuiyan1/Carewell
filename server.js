var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    if (req.url == "/") {
      const readStream = fs.createReadStream("./app.html");
      res.writeHead(200, { "Content-type": "text/html" });
      readStream.pipe(res);
    }

    if (req.url == "/app.css") {
      const readStream = fs.createReadStream("./app.css");
      res.writeHead(200, { "Content-type": "text/css" });
      readStream.pipe(res);
    }

    if (req.url == "/app.js") {
      const readStream = fs.createReadStream("./app.js");
      res.writeHead(200, { "Content-type": "text/js" });
      readStream.pipe(res);
    }
  })
  .listen("3000", () => {
    console.log(`Server is running on http://localhost:3000`);
  });
