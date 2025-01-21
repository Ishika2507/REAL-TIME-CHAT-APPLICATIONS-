import React from "react";

const ChatWindow = ({ messages }) => {
  return (
    <div style={styles.chatWindow}>
      {messages.map((msg, index) => (
        <div key={index} style={styles.message}>
          {msg}
        </div>
      ))}
    </div>
  );
};

const styles = {
  chatWindow: {
    height: "400px",
    width: "90%",
    margin: "0 auto",
    border: "1px solid #ccc",
    padding: "10px",
    overflowY: "scroll",
    marginBottom: "20px",
    background: "#f9f9f9",
  },
  message: {
    padding: "10px",
    background: "#e1f5fe",
    margin: "5px 0",
    borderRadius: "5px",
    textAlign: "left",
  },
};

export default ChatWindow;
