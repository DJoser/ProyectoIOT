// Configuracion
const USER_PORT = 80;
const DEVICE_PORT = 81;

// Global variables
var users = [];
var devices = [];

// Using
var app = require('express')();
var http = require('http').Server(app);

// User Server
var userSocket = require('socket.io')(http);
userSocket.on('connection', function(socket){
    console.log('a user connected');

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        socket.emit('chat message', msg);
    });
    socket.on('updateDevices',function (room) {
        socket.emit('devices',['Foco1','Foco2']);
    });
});

// Device Server
var deviceServer = require('socket.io')(DEVICE_PORT);
deviceServer.on('connection', function(socket){
    console.log('a device connected');

    socket.on('disconnect', function(){
        console.log('a device disconnected');
    });
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
    socket.on('room',function (room) {

    });
});


// User webpage
app.get('/', function(req, res){
    res.sendfile('index.html');
});
http.listen(USER_PORT, function(){
    console.log('listening user on localhost:' + USER_PORT);
    console.log('listening devices on localhost:' + DEVICE_PORT);
});

