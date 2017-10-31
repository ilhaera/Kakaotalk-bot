// app.js

// 패키지 로딩
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var fs = require("fs");

// 파서 세팅
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 포트 세팅
var port = process.env.PORT || 8080;

// routes 세팅
var router = require('./routes')(app,fs)

// listen 시작
var server = app.listen(port, function(){
 console.log("Express server has started on port " + port)
});