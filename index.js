var express = require("express");
 var bodyParser = require("body-parser");
 var fileupload = require("express-fileupload");
 var session = require("express-session");
var app = express();

var admin = require('./routes/admin');
var user = require('./routes/user');

app.set('view engine','ejs');

 app.use(bodyParser.urlencoded({ extended: true}));
 app.use(fileupload());
 app.use(session({
  secret:'ABCD456789',
  resave:true,
  saveUninitialized:true,
 }));
 
 app.use(express.static('public/'));

 app.use('/admin',admin);

 app.use('/',user);


app.listen(1000);