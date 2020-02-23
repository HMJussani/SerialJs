const salvarBanco = require('./gravar');
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('COM1', { baudRate: 115200 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));


//function leSerial(port){
port.on("open", () => {
    console.log(`${port.path} aberta!`);
});
parser.on('data', data => {
    console.log(data);
    if (data.length===30) {
        var result = data.split(';');       
        salvarBanco(result[0], result[1], result[2], result[3]);
    }
});
//}

function escreveSerial(message, port) {
    port.write(`${message}\n'`, (err) => {
        if (err) {
            return console.log('Serial erro: ', err.message);
        }
        console.log('ok serial written');
    });

}