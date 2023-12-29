module.exports = {
    responseFilter: (data, ws) => {
        if (data.type === 'ping') {
            ws.send(JSON.stringify({
                type: 'pong',
            }));
        }
        if (data.type === 'chat') {
            ws.clients.forEach((client) => {
                client.send(JSON.stringify({
                    type: 'chat',
                    data: data.data,
                }));
            });
        }
    }
}