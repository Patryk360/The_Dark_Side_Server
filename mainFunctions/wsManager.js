module.exports = {
    responseFilter: (data, wss, ws, gameServer) => {
        if (data.Type === "realtimeChat") {
            require("../wsFunctions/wsRealtimeChat.js")(data, wss, ws, gameServer);
        }
        if (data.Type === "playerMove") {
            require("../wsFunctions/wsPlayerMove.js")(data, wss, ws, gameServer);
        }
        if (data.Type === "playerJoin") {
            require("../wsFunctions/wsPlayerJoin.js")(data, wss, ws, gameServer);
        }
        if (data.Type === "playerLeft") {
            require("../wsFunctions/wsPlayerLeft.js")(data, wss, ws, gameServer);
        }
    }
}