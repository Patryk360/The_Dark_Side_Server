"use strict";
module.exports = async (data, wss, ws, gameServer) => {
    console.log(data);

    const player = await gameServer.db.collection("Players").findOne({ _id: data.PlayerID });

    const playerData = {
        _id: data.PlayerID,
        data: [
            { name: "0001" }
        ]
    }

    if (!player) await gameServer.db.collection("Players").insertOne(playerData);

    console.log(player);
}