const express = require('express');

app = express();

//Simple String Response
// res.send()--> response Body
// res.end()---> reponse ending point...
app.get("/stringResponse", function (req, res) {
  res.end("This is simple string response ");
});

app.post("/two", function (req, res) {
  res.end("This is simple string response ");
});



// Response Status Code
app.get("/statusCode", function (req, res) {
  res.status(201).end();
})

// JSON Response
app.get("/jsonResponse", function (req, res) {
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

// Response Download
app.get("/download", function (req, res) {
  res.download("./uploads/image.jpg");
})



// Response Redirect
app.get("/Bangladesh", function (req, res) {
  res.redirect("http://localhost:8000/India")
})


app.get("/India", function (req, res) {
  res.send("This is india");
})


// response header
app.get("/headerResponse", function (req, res) {
  res.append("name", "Rabbil Hasan");
  res.append("city", "Dhaka");
  res.append("age", "30 Years Old");
  res.status(201).end("Hello World");
})


app.get("/setCookie", function (req, res) {
  res.cookie('name', 'Rabbil')
  res.cookie('city', 'Dhaka')
  res.cookie('age', '30 years old')
  res.end("cookie set success")

})


app.get("/removeCookie", function (req, res) {

  res.clearCookie('name')
  res.clearCookie('age');
  res.clearCookie('city')


  res.end("cookie clear success")

})



app.listen(8000, function () {
  console.log("Server Run Success")
})

