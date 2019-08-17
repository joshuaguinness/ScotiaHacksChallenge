// server.js

var express = require('express');

var app = express();

var path = require('path');

var PORT = 3000;

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });

app.use(express.static('public'));

app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});
