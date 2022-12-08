const express = require('express');

app = express();

//// req methods
// working with request

// query req
app.get('/', function(req, res){
  // localhost:5000?firstName=sohan&lastname=chaudhuree
  const {firstName, lastName} = req.query
  res.end(`${firstName} ${lastName}`);
})

// header req
app.get('/headerReq', function(req, res){
  const firstName = req.header('firstName');
  const lastName = req.header('lastName');
  // postman header a key value akare pass korte hobe
  res.end(`${firstName} ${lastName}`);
})


// request.post()
// request
// reqest with url parameter
// request header
// request json body
// request multipart form data
// request file upload

// query req
app.post('/', function(req, res){
  // localhost:5000?firstName=sohan&lastname=chaudhuree
  const {firstName, lastName} = req.query
  res.end(`${firstName} ${lastName}`);
})

// header req
app.post('/headerReq', function(req, res){
  const userName = req.header('username')
  // postman header a key value akare pass korte hobe
  res.end(`${userName}`);
})




app.listen(5000)