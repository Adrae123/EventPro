'use client';
import { useState } from 'react';

export default function MessageriePrive() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  // Fonction pour envoyer un message
  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: 'admin' }]);
      setInputMessage(''); // Réinitialiser le champ de saisie
    }
  };

  return (
    <div style={chatContainer}>
      <h1 style={titleStyle}>Messagerie Privée</h1>
      
      <div style={chatBox}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={msg.sender === 'admin' ? adminMessage : prestataireMessage}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div style={inputContainer}>
        <input
          type="text"
          placeholder="Tapez votre message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handleSendMessage} style={sendButton}>
          Envoyer
        </button>
      </div>
    </div>
  );
}

const chatContainer = {
  width: '60%',
  margin: '0 auto',
  height: '80vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: '#f0f0f0',
  borderRadius: '10px',
  padding: '20px',
};

const titleStyle = {
  textAlign: 'center',
  marginBottom: '10px',
  color: '#333',
};

const chatBox = {
  flex: 1,
  overflowY: 'auto',
  padding: '15px',
  marginBottom: '10px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
};

const adminMessage = {
  backgroundColor: '#d1f7c4',
  padding: '10px 15px',
  borderRadius: '15px',
  maxWidth: '60%',
  alignSelf: 'flex-end',
  marginBottom: '8px',
  color: '#333',
};

const prestataireMessage = {
  backgroundColor: '#f0f0f0',
  padding: '10px 15px',
  borderRadius: '15px',
  maxWidth: '60%',
  alignSelf: 'flex-start',
  marginBottom: '8px',
  color: '#333',
};

const inputContainer = {
  display: 'flex',
  gap: '10px',
};

const inputStyle = {
  flex: 1,
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  outline: 'none',
};

const sendButton = {
  padding: '10px 20px',
  fontSize: '16px',
  color: '#fff',
  backgroundColor: '#007BFF',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

sendButton[':hover'] = {
  backgroundColor: '#0056b3',
};
