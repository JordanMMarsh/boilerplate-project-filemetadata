'use strict';

var express = require('express');
var cors = require('cors');
const fs = require("fs");
const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");
const upload = multer();
// require and use "multer"...

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.post('/api/fileanalyse', upload.any(), function(req, res) {
  res.json({name: req.files[0].originalname, type: req.files[0].mimetype, size: req.files[0].size});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
