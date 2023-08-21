var express = require("express")
var app = express()
var port = process.env.port || 3000;
require('./DBConnection');
let router= require('./Routers/router');
// let collection;

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/cat',router);


app.listen(port, ()=>{
    console.log('express server started');
});