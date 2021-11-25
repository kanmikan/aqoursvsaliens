const express = require("express");
const path = require('path');

//mini server local donde se hostea temporalmente el juego.
const hostname = '127.0.0.1';
const port = 3000;

var app = express();
var http = require('http').createServer(app);

//uso de ejs por conveniencia. Puede ser descartado.
app.set('view engine', 'ejs');

//los assets del juego se cargan como archivos estáticos.
app.use('/', express.static(path.join(__dirname, 'views/static')))

//la ruta principal carga la pagina del juego.
app.get('/', function(req, res) {
	res.render('index');
});

http.listen(port);
console.log(port + " en escucha.");

