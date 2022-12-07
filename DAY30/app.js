var express = require('express');

app = express();

//Simple String Response
// res.send()--> response Body
// res.end()---> reponse ending point...
app.get("/one", function (req, res) {
  res.end("This is simple string response ");
});

app.post("/two", function (req, res) {
  res.end("This is simple string response ");
});



// Response Status Code
app.get("/three", function (req, res) {
  res.status(201).end();
})

// JSON Response
app.get("/four", function (req, res) {
  let MyJSONArray = [
    {
      name: "Rabbil",
      city: "Dhaka",
      occupation: "Engr."
    },
    {
      name: "Rakib",
      city: "Dhaka",
      occupation: "Pharama"
    },
    {
      name: "Rifat",
      city: "Rangpur",
      occupation: "Student"
    }

  ]
  res.json(MyJSONArray);
})


app.listen(8000, function () {
  console.log("Server Run Success")
})

