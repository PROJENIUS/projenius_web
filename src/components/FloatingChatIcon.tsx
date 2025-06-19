import React, { useState } from 'react';
import { FaCommentDots } from 'react-icons/fa';
import ChatBot from './ChatBot.tsx'; // Adjust the path as needed
import './FloatingChatIcon.css';

const FloatingChatIcon: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <>
      {/* Floating Chat Icon */}
      <div className="floating-chat-icon" onClick={toggleChat}>
        <FaCommentDots size={24} />
      </div>

      {/* ChatBot Popup */}
      {isChatOpen && (
        <div className="chatbot-popup">
          <ChatBot onClose={() => setIsChatOpen(false)} />
        </div>
      )}
    </>
  );
};

export default FloatingChatIcon;