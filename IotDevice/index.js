// Inicializar variables
var m = require('mraa'); //require mraa
console.log('MRAA Version: ' + m.getVersion()); //write the mraa version to the console
var socket = require('socket.io-client')('http://10.7.94.214:3000/');

// Eventos de conexion del Servidor
socket.on('connect', function(){
    console.log('Se establecio la conexion con el servidor!');
});
socket.on('disconnect', function(){
    console.log('Se perdio la conexion con el servidor!');
});

// Recibir comandos desde el servidor
socket.on('cmd', function(msg){
    console.log("cmd: " + msg);
});

///
/// Control del LED
///
var myLed = new m.Gpio(13); //LED hooked up to digital pin 13 (or built in pin on Galileo Gen1 & Gen2)
myLed.dir(m.DIR_OUT); //set the gpio direction to output
socket.on('led on', function () {
    myLed.write(ledState?1:0); //if ledState is true then write a '1' (high) otherwise write a '0' (low)
});
socket.on('led off', function () {
    myLed.write(ledState?1:0); //if ledState is true then write a '1' (high) otherwise write a '0' (low)
});