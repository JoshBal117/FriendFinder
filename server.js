/* These are the Dependancies for the app; without these the app crashes*/
var express = require("express")
var bodyParser = require("body-parser")
var path = require("path")

var app = express(); 

var PORT = process.env.PORT || 8080;

/* This sets of the app so that it can handle the data parsing */ 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: `application/vnd.api.json`}))

/*This is the Router for the app; it allows for information to be pulled*/
require('.app/routing/apiRoutes.js')(app)
require('.app/routing/htmlRoutes.js')(app)

/*This is what starts the server and it will begin listening for commands*/
app.listen(PORT, function() {
        console.log("App is listening on Port: " + PORT);
});