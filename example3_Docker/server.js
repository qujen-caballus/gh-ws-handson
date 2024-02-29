const Websocket = require('ws');

const PORT = 5000;

const wsServer = new Websocket.Server({
    port: PORT
});

wsServer.on('connection', function (socket) {
    console.log("A client just connected");

    socket.on('message', function(msg) {
        console.log('Received message from client: ' + msg);
        // クライアントから"Hello"というメッセージを受け取った場合、"World"と応答します
        wsServer.clients.forEach(function (client){
            client.send("World");
        });
    });
});

console.log((new Date()) + " Server is listening on port " + PORT);
