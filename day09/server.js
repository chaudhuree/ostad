const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("it is working fine");
  res.end();
});

server.listen(5050, () => {
  console.log("server is running on port no: 5050");
});
