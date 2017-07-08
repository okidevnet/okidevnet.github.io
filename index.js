const express = require('express');
const hbs = require('hbs'); // Handlebars templating system
const path = require('path');

var app = express();

// register a partials directory and the view engine to handlebars
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// routes
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
})

// members pages
app.get('/chris', (req, res) => {
	res.sendFile(path.join(__dirname + '/views/chris.html'));
})

app.use(express.static('public'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
