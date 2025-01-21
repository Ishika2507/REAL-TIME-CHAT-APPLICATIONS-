import React, { useState, useEffect } from "react";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Initialize WebSocket connection
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    // Listen for messages
    ws.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };

    return () => ws.close();
  }, []);

  const sendMessage = (message) => {
    if (socket) {
      socket.send(message);
    }
  };

  return (
    <div style={styles.app}>
      <h1>Real-Time Chat App</h1>
      <ChatWindow messages={messages} />
      <MessageInput onSend={sendMessage} />
    </div>
  );
};

const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    margin: "20px",
  },
};

export default App;
