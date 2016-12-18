// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
// Create Instance of Express
var app = express();

//require schemas
var Article = require('./models/articles');

var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));


if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
}
else {
  mongoose.connect('mongodb://localhost/nytreact');
};

var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function() {
  console.log('Mongoose connection successful.');
});

// Main route -> send main page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public', 'index.html'))
});
// mongoose logic goes here
require("./controllers/api-routes.js")(app);


app.listen(PORT, function() {
  console.log('App running on', PORT);
});
