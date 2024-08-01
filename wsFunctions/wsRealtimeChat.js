"use strict";
module.exports = async (data, wss, ws, gameServer) => {
    console.log(data);

    const player = await gameServer.db.collection("Players").findOne({ _id: 1111 });

    const playerData = {
        _id: 1111,
        data: [
            { content: "0001" }
        ]
    }

    if (!player) await gameServer.db.collection("Players").insertOne(playerData);

    console.log(player);

    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(player));
        }
    });
}