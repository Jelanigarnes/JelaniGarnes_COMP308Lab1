process.end.NODE_ENV = process.env.NODE_ENV || 'development'
const configureExpress = require("./config/express.js")
const app = configureExpress()
app.listen(3000);
console.log('The server is running at http://localhost/3000/');
module.exports = app;




//`````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
//const users = []

//app.set('view-engine', 'ejs')
//app.use(express.urlencoded({extended: false}))


//app.get('/app/view/login', function (req, res) {
//    res.render("login.ejs");

//});

//app.post('/app/view/login', function (req, res) {

//});


//app.get('/register', function (req, res) {
//    res.render("register.ejs");
//});

//app.post('/register', function (req, res) {
    
//});


//app.get('/feedback', function (req, res) {
//    res.render("feedback.ejs");

//});

//app.post('/feedback', function (req, res) {

//});


//app.get('/thankyou', function (req, res) {
//    res.render("thankyou.ejs");

//});

//app.post('/thankyou', function (req, res) {

//});





//app.listen(3000);
//console.log('The server is running at http://localhost/3000');
//module.express = app;






//'use strict';
//var http = require('http');
//var port = process.env.PORT || 1337;

//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);
