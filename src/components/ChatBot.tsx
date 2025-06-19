import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

interface ChatBotProps {
  onClose: () => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Hi! How can I help you today?' } // 👈 Initial bot message
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const url = 'https://magicloops.dev/api/loop/b65931f6-c597-4638-997e-cf19a357e6e7/run';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const responseJson = await response.json();
      const botMessage: Message = {
        role: 'bot',
        text: responseJson.reply || 'No reply received.',
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'bot', text: 'Error connecting to bot. Please try again.' },
      ]);
    }

    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="chatbot-container">
      <div className="chat-title">
        Projenius ChatBot
        <button className="chatbot-close-btn" onClick={onClose}>✖</button>
      </div>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            {msg.role === 'bot' && (
              <span role="img" aria-label="robot" style={{ marginRight: '6px' }}>🤖</span>
            )}
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
