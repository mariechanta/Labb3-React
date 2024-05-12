import React from 'react';

const MessageBoard = ({ messages }) => {
  return (
    <div>
      <h2>Meddelandebräde</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <strong>{message.sender}:</strong> {message.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageBoard;
