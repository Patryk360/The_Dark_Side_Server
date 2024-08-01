const { websocket } = require("../configs/netConfig.js");
const { responseFilter } = require("./wsManager.js");
const express = require("express");
const { createServer} = require("http");
const { Server } = require("ws");

const app = express();
const server = createServer(app);
const wss = new Server({ server });

module.exports = () => {
    app.get('/', (req, res) => {
        res.send('Server HTTP works!');
    });
    
    wss.on('connection', (ws) => {
        console.log('New connect WebSocket');
    
        ws.on('message', (message) => {
            try {
                responseFilter(JSON.parse(message.toString()), wss, ws);
            } catch (e) {
                console.error(e);
            }
        });
    
        ws.send('Hi, WebSocket client!');
    });
    
    server.listen(websocket.port, () => {
        console.log(`Server HTTP and WebSocket run on port ${websocket.port}`);
    });
}