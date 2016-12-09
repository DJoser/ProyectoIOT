// Constantes
const EMULATE = true;
const DIGITAL_1 = 13;
const ENCENDIDO = 1;
const APAGADO = 0;

// Variables
var foco1;

// Modulos
if(EMULATE){
    console.log("MRAA Emulated");
    foco1 = function(){}
    foco1.prototype.write = function (value) {
        console.log("Cambio estado foco a " + value)
    }
}else{
    var mraa = require('mraa');
    console.log('MRAA Version: ' + m.getVersion());

    // Inicializar puertos tarjeta
    foco1 = new mraa.Gpio(DIGITAL_1);
    foco1.dir(mraa.DIR_OUT);
}

function ledOn() {
    foco1.write(ENCENDIDO);
}
function ledOff() {
    foco1.write(APAGADO);
}
function readA1() {
}

module.exports.ledOn = ledOn;
module.exports.ledOff = ledOff;
module.exports.readA1 = readA1;