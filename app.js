var http = require("http");
var express=require("express");
var app=express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

app.get('/', function (req, res) {
  res.sendfile("./index.html");
  console.log("get");
});

app.post('/', function (req, res) {
  var username=req.body.username;
  var password=req.body.password;
  res.send("The Username you posted: "+username+"and the Password: "+password);
  console.log("Username is: " + username);
  console.log("Password is: " + password);

});

app.listen(8888, function () {
  console.log('On port 8888!');
});
