const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

const clients = new Map();

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    const data = JSON.parse(message);
    
    switch(data.type) {
      case 'join':
        clients.set(data.id, ws);
        break;
      case 'offer':
      case 'answer':
      case 'candidate':
        const targetClient = clients.get(data.target);
        if (targetClient) {
          targetClient.send(JSON.stringify({
            type: data.type,
            sender: data.id,
            data: data.data
          }));
        }
        break;
    }
  });

  ws.on('close', () => {
    for (let [id, client] of clients) {
      if (client === ws) {
        clients.delete(id);
        break;
      }
    }
  });
});

console.log('Signaling server running on ws://localhost:8080');
