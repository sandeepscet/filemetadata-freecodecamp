var express = require('express')
var app = express()

var multer = require('multer');
var upload = multer();
var fs = require('fs');

app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render("index");
});

app.post('/upload', upload.any(), function(req, res) {
  console.log(req.files[0]['size']);
    res.json({fileSize: req.files[0]['size']});   
});


app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
