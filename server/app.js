var WebSocketServer = new require('ws');

// подключенные клиенты
var clients = {};

// WebSocket-сервер на порту 8081
var webSocketServer = new WebSocketServer.Server({
    port: 8081
});
webSocketServer.on('connection', function (ws) {
    let id;
    const users = [];

    for (const id in clients) {
        users.push(clients[id].profile);
    }

    console.log(users)

    ws.send(JSON.stringify({ type: 'users.get', users }));

    ws.on('message', function (message) {
        console.log('получено сообщение ' + message);
        const parseMessage = JSON.parse(message)

        switch (parseMessage.type) {
            case 'user.post':
                const user = parseMessage.user;

                id = user.id;
                clients[user.id] = ws;
                clients[user.id].profile = user;

                for (const id in clients) {
                    clients[id].send(JSON.stringify({ type: 'connect', user: clients[user.id].profile }));
                }
                break;
        }
    });

    ws.on('close', function () {
        console.log('соединение закрыто ');

        for (const client in clients) {
            if (client != id) {
                console.log(client)
                clients[client].send(JSON.stringify({ type: 'disconnect', user: clients[id].profile }));
            }
        }

        delete clients[id];
    });

});