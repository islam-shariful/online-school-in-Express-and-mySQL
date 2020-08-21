//const path 		 = require("path");
var express = require("express");
var exSession = require("express-session");
var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer({ dest: "uploads/" });
var mysql = require("mysql");
var superadmin = require("./controller/superadmin");
var adminHome 	= require('./controller/adminHome');
var parent = require("./controller/parent");
var student = require("./controller/student");
const teacher = require("./controller/teacher");
var upload = require("express-fileupload");
var login = require("./controller/login");
const logout = require("./controller/logout");
var app = express();

app.use(upload());
// config view engine
app.set("view engine", "ejs");

// setup static resource route
app.use("/assets", express.static("assets"));
app.use('/assetss', express.static('assetss'));

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  exSession({ secret: "my secret @*#", saveUninitialized: true, resave: false })
);

// route to controller
app.use("/parent", parent);
app.use("/login", login);
app.use("/superadmin", superadmin);
app.use('/adminHome', adminHome);
app.use("/student", student);
app.use("/logout", logout.routes);
app.use("/teacher", teacher.routes);

// route to landing page
app.get("/", function (req, res) {
  res.send("this is index <br> LANDING page!<br> <a href='/login'> Login</a> ");
});

// server listening port
app.listen(process.env.PORT || 3000, function () {
  console.log("express http server started at...3000");
});
