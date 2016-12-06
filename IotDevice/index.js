//var m = require('mraa'); //require mraa
//console.log('MRAA Version: ' + m.getVersion()); //write the mraa version to the console

//var myLed = new m.Gpio(13); //LED hooked up to digital pin 13 (or built in pin on Galileo Gen1 & Gen2)
//myLed.dir(m.DIR_OUT); //set the gpio direction to output
//var ledState = true; //Boolean to hold the state of Led

//function periodicActivity()
//{
//    myLed.write(ledState?1:0); //if ledState is true then write a '1' (high) otherwise write a '0' (low)
//    ledState = !ledState; //invert the ledState
//    setTimeout(periodicActivity,1000); //call the indicated function after 1 second (1000 milliseconds)
//}

//periodicActivity(); //call the periodicActivity function

console.log('1');

// Connect to server
var io = require('socket.io-client')
var socket = io.connect('10.7.94.214:3000', {reconnect: true});

console.log('2');

// Add a connect listener
socket.on('connect', function(socket) {
    console.log('Connected!');
});

console.log('3');