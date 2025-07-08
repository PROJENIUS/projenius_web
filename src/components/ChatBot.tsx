import React from 'react';
import './ChatBot.css';

interface ChatBotProps {
  onClose: () => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ onClose }) => {
  return (
    <div className="chatbot-container">
      {/*<div className="chat-title">
        Projenius ChatBot
        <button className="chatbot-close-btn" onClick={onClose}>✖</button>
      </div>*/}
      <div className="chat-iframe-wrapper">
         <button className="chatbot-close-btn" onClick={onClose}>✖</button>
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/Wm-dA3YC_cv_XcaIu3WOD"
          width="100%"
          style={{ height: '100%', minHeight: '420px', border: 'none' }}
          frameBorder="0"
          allow="clipboard-write"
        ></iframe>
      </div>
    </div>
  );
};

export default ChatBot;
