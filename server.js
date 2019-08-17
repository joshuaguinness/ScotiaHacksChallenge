// server.js

var express = require('express');

var app = express();

var path = require('path');

var PORT = 3000;

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });

// get all todos
app.get('/api/read-teams', (req, res) => {

    const fs = require('fs')

    fs.readFile('/data/teams.json', (err, fileData) => {
        if (err) {
            res.status(400).send({
                success: 'false',
                message: err
            })
            // return cb && cb(err)
        }
        try {
            const object = JSON.parse(fileData)
            console.log(object)
            res.status(200).send({
                success: 'true',
                message: 'JSON Object retrieved successfully'
              })
            // return cb && cb(null, object)
        } catch(err) {
            res.status(500).send({
                success: 'false',
                message: err
            })
            // return cb && cb(err)
        }
    })
  });

app.use(express.static('public'));

app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});
