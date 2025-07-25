"use strict";
module.exports = async (data, wss, ws, gameServer) => {
    console.log(data);

    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(data.Content));
        }
    });
}