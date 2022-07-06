const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if ((req.url = "/")) {
    fs.readFile(`${__dirname}/userapi.json`, "utf-8", (err, data) => {
      console.log(data);
      res.end(data);
    });
   
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1> 404 error</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listienng");
});
