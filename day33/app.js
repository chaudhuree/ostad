const express = require('express');

app = express();

// middlewares ,upload , multipart form data
app.use(express.json());

// handle json data
app.post('/', function (req,res) {
  // send this json data through postman
  // {
  //   "name": "sohan",
  //   "description": "lorem ipsum dolor sit am"
  // }
  let name=req.body['name']      
  let description=req.body['description']      
  res.send(name+" "+description)
});

app.listen(5000)