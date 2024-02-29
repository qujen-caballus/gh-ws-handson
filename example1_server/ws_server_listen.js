const Websocket = require('ws');

const PORT = 5000;

const wsServer = new Websocket.Server({
    port: PORT
});

wsServer.on('connection' , function (socket){
    console.log("A clinet just connected");

    socket.on('message', function(msg){
        console.log('Received messagge from clinet: ' + msg);

    })
});

console.log((new Date()) + " Server is listening on port: " + PORT);
