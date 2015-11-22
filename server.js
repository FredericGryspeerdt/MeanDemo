var express = require('express');

//bepalen of we in productie of development fase mode
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express(); //aanmaken express applicatie

//configuratie express
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
/*
* de applicatie moet de index pagina tonen wnn een request wordt gemaakt waarvoor nog
* geen bestaand path bestaat (404 -> toont index.html)
* client-side routing neemt vanaf daar terug over: coördineert zo alle routes*/
app.get('*', function(req, res){
    res.render('index');
}) //komt overeen met alle routes (js, img, css requests ...)

//zeg tegen de server dat hij moet luisteren naar requests
var port = 3030;
app.listen(port);
console.log("Listening on port " + port + "...");
