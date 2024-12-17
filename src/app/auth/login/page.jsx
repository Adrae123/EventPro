'use client';

import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage(''); // Réinitialiser le message d'erreur à chaque soumission

    if (!email || !password) {
      setErrorMessage('Tous les champs sont obligatoires!');
      return;
    }

    console.log('Email:', email, 'Password:', password);
    // Ajouter la logique de connexion ici, comme l'appel à l'API
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#fff', // Marron clair
        color: '#333',
      }}
      
                       

    >
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          background: '#fff',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >   
        <h2 style={{ textAlign: 'center', color: '#4A90E2' }}>Connexion page</h2>
        
        {/* Message d'erreur */}
        {errorMessage && (
          <div style={{ color: 'red', marginBottom: '10px', textAlign: 'center' }}>
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
              Email :
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                outline: 'none',
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
              Mot de passe :
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                outline: 'none',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#4A90E2',
              border: 'none',
              borderRadius: '5px',
              color: '#fff',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Connexion
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '10px' }}>
          Pas de compte ?{' '}
          <a href="/auth/register" style={{ color: '#4A90E2', textDecoration: 'none' }}>
            Inscrivez-vous ici
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
