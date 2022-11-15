const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const data = fs.readFileSync("./index.html");
  if ((req.url ="/")) {
      res.writeHead(200)
    res.write(data);
    res.end();
  } else {
      res.writeHead(500)
    res.write("not working");
    res.end();
  }
});

server.listen(5050, () => {
  console.log("server is running on port no: 5050");
});
