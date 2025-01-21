const WebSocket = require("ws");

const PORT = 8080;
const wss = new WebSocket.Server({ port: PORT });

console.log(`WebSocket server running on ws://localhost:${PORT}`);

// Broadcast messages to all connected clients
function broadcast(message, ws) {
  wss.clients.forEach((client) => {
    if (client !== ws && client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}

wss.on("connection", (ws) => {
  console.log("New client connected!");

  ws.on("message", (message) => {
    console.log(`Received: ${message}`);
    broadcast(message, ws); // Send to all other clients
  });

  ws.on("close", () => {
    console.log("Client disconnected.");
  });
});
