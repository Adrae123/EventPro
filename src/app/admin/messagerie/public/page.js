'use client';
import { useState } from 'react';

export default function MessageriePublic() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  // Fonction d'envoi de message
  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        text: inputMessage,
        sender: 'Admin',  // Simuler l'expéditeur
        time: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
    }
  };

  return (
    <div style={chatContainer}>
      <h1 style={titleStyle}>Messagerie Publique</h1>

      <div style={chatBox}>
        {messages.length === 0 ? (
          <p style={noMessageStyle}>Aucun message pour le moment.</p>
        ) : (
          messages.map((msg, index) => (
            <div key={index} style={messageStyle}>
              <span style={senderStyle}>{msg.sender}:</span>
              <span style={textStyle}>{msg.text}</span>
              <span style={timeStyle}>{msg.time}</span>
            </div>
          ))
        )}
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
  backgroundColor: '#f7f7f7',
  borderRadius: '10px',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
};

const titleStyle = {
  textAlign: 'center',
  color: '#333',
  marginBottom: '15px',
};

const chatBox = {
  flex: 1,
  overflowY: 'auto',
  backgroundColor: '#fff',
  borderRadius: '8px',
  padding: '15px',
  boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.1)',
};

const messageStyle = {
  marginBottom: '10px',
  padding: '10px',
  backgroundColor: '#e9f5ff',
  borderRadius: '8px',
  position: 'relative',
};

const senderStyle = {
  fontWeight: 'bold',
  color: '#007bff',
};

const textStyle = {
  display: 'block',
  marginTop: '5px',
  color: '#333',
};

const timeStyle = {
  position: 'absolute',
  right: '10px',
  bottom: '5px',
  fontSize: '12px',
  color: '#999',
};

const inputContainer = {
  display: 'flex',
  gap: '10px',
  marginTop: '15px',
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
  backgroundColor: '#007bff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

sendButton[':hover'] = {
  backgroundColor: '#0056b3',
};

const noMessageStyle = {
  textAlign: 'center',
  color: '#999',
  fontStyle: 'italic',
};
