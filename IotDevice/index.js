// Constantes
const SERVER_HOST = 'http://localhost:81/';

// Modules
var io = require('socket.io-client')(SERVER_HOST);
var firm = require('./firmware')

// Eventos de conexion del Servidor
io.on('connect', function(){
    console.log('Conexion establecida con ' + SERVER_HOST);
});

io.on('disconnect', function(){
    console.log('Se perdio la conexion con ' + SERVER_HOST);
});

// Recibir comandos desde el servidor
io.on('cmd', function(msg){
    console.log("cmd: " + msg);
});
