module.exports = {
    responseFilter: (data, wss, ws) => {
        if (data.Type === "realtimeChat") {
            /*wss.clients.forEach((client) => {
                client.send(JSON.stringify({
                    Type: 'chat',
                    Content: data.Content,
                }));
            });*/
            require("../wsFunctions/wsRealtimeChat.js")(data, wss, ws);
        }
        if (data.Type === "playerMove") {
            require("../wsFunctions/wsPlayerMove.js")(data, wss, ws);
        }
        if (data.Type === "playerJoin") {
            require("../wsFunctions/wsPlayerJoin.js")(data, wss, ws);
        }
        if (data.Type === "playerLeft") {
            require("../wsFunctions/wsPlayerLeft.js")(data, wss, ws);
        }
    }
}