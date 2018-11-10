// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var port = 3000;

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/whoami", function (req, res) {
  res.json({ip: req.connection.remoteAddress, language: req.headers["accept-language"], system: req.headers["user-agent"]});
});

app.get("*", function(req, res) {
  res.json({error: 'Page not found'});
});



// listen for requests :)
var listener = app.listen(port , function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
