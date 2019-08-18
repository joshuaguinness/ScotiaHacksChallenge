// server.js

var express = require('express');

var app = express();

var path = require('path');

var PORT = 3000;

app.get('/api/read-teams', (req, res) => {

    const fs = require('fs')

    fs.readFile('public/data/teams.json', (err, fileData) => {
        if (err) {
            res.status(400).send({
                success: 'false',
                message: err
            })
        }
        try {
            const object = JSON.parse(fileData)
            console.log(object)
            return res.status(200).send({
                success: 'true',
                message: 'JSON Object retrieved successfully',
                object
              })
        } catch(err) {
            res.status(500).send({
                success: 'false',
                message: err
            })
        }
    })
  });

// app.get('/api/write-teams', (req, res) => {
//     const fs = require('fs')
//     const customer = {
//         name: "Newbie Co.",
//         order_count: 0,
//         address: "Po Box City",
//     }
//     const jsonString = JSON.stringify(customer)
//     fs.writeFile('./newCustomer.json', jsonString, err => {
//         if (err) {
//             console.log('Error writing file', err)
//         } else {
//             console.log('Successfully wrote file')
//         }
//     })
// })

app.use(express.static('public'));

app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});
