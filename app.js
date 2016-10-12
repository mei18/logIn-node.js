var http = require("http");
var express=require("express");
var app=express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

app.get('/', function (req, res) {
  res.sendfile("./index.html");

});

app.post('/', function (req, res) {
  var username=req.body.username; 
  var password=req.body.password;
  res.send("The Username and password u posted :"+username+"Password: "+password);
  console.log("Username:" + username);
  console.log("Password:" + password);

});

app.listen(8080, function () {
  console.log('On port 8080!');
});
