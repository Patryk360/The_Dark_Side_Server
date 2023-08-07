const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });
wss.on("connection", async (ws)=> {
    ws.on("message", async (message) => {
        console.log("received: \n %s", message);
        ws.send(`${message}`);
    });
});
wss.on("listening", () => {
    console.log("Server started...");
});