const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });
wss.on("connection", async (ws) => {
    const data = {
        type: "joinMessage",
        text: "Hello from server",
    }
    ws.send(JSON.stringify(data));
    console.log("New client connected");
    
    for (const client of wss.clients) {
        client.send("ok");
    }

    ws.on("message", async (message) => {
        for (const client of wss.clients) {
            client.send(`${message}`);
        }
        console.log("received: \n %s", message);
    });
});
wss.on("listening", () => {
    console.log("Server started...");
});