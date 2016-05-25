// servidores
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

app.use('/image', express.static('image'));
app.use('/css', express.static('css'));


io.on('connection', function(socket){
	console.log('Nuevo participante en Linea');

	socket.on('chat', function(_msg){
		io.emit('nuevo_mensaje', _msg);
	});

});









http.listen(8080, function () {
	console.log('WHATSAPP - CHAT');
});