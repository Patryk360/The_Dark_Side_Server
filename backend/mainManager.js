const { websocket } = require("../configs/netConfig.js");
const { responseFilter } = require("./wsManager.js");
const express = require('express');
const { createServer} = require('http');
const { Server } = require('ws');

const app = express();
const server = createServer(app);
const wss = new Server({ server });

module.exports = () => {
    app.get('/', (req, res) => {
        res.send('Serwer HTTP działa!');
    });
    
    wss.on('connection', (ws) => {
        console.log('Nowe połączenie WebSocket');
    
        ws.on('message', (message) => {
            responseFilter(message, ws);
        });
    
        ws.send('Witaj, klient WebSocket!');
    });
    
    server.listen(websocket.port, () => {
        console.log(`Serwer HTTP i WebSocket uruchomiony na porcie ${websocket.port}`);
    });
}