/*Install node-require */
require('marko/node-require').install();
/*Load Express JS*/
var express = require('express');
/*Instantiate Express*/
var app = express();
/*Load the template*/
var indexTemplate = require('./views/index.marko');
/*render in browser URL '/' */ 
app.get('/', function(req, res) {
    indexTemplate.render({
        name: 'FizzBizz'
    }, res);
});
/**/
app.listen(8080, function() {
    console.log('Server started on port 8080');
});