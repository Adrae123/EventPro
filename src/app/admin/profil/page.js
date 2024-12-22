'use client';
import React, { useState } from 'react';

export default function Profil() {
  // États pour les informations modifiables
  const [email, setEmail] = useState('admin@example.com');
  const [telephone, setTelephone] = useState('+212 600 123 456');
  const [about, setAbout] = useState(
    'Administrateur expérimenté dans la gestion des ressources humaines, spécialisé dans l\'amélioration des processus et la gestion d\'équipes.'
  );
  const [prenom, setPrenom] = useState('Admin');
  const [ville, setVille] = useState('Casablanca');

  // Fonction pour gérer la modification des champs
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleTelephoneChange = (event) => setTelephone(event.target.value);
  const handleAboutChange = (event) => setAbout(event.target.value);
  const handlePrenomChange = (event) => setPrenom(event.target.value);
  const handleVilleChange = (event) => setVille(event.target.value);

  // Fonction pour sauvegarder les modifications
  const handleSave = () => {
    alert('Les informations ont été sauvegardées!');
    // Ici, vous pouvez ajouter la logique pour sauvegarder les informations dans un back-end, si nécessaire
  };

  return (
    <div style={containerStyle}>
      <div style={profileCardStyle}>
        {/* En-tête */}
        <div style={headerStyle}>
          <img
            src="https://via.placeholder.com/150"
            alt="Photo de profil"
            style={profileImageStyle}
          />
          <div>
            <h1 style={nameStyle}>{prenom} Admin</h1>
            <p style={roleStyle}>Administrateur RH</p>
          </div>
        </div>

        {/* Contenu principal */}
        <div style={contentStyle}>
          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>Informations personnelles</h2>
            <div style={inputContainerStyle}>
              <label style={inputLabelStyle}>Prénom</label>
              <input
                type="text"
                value={prenom}
                onChange={handlePrenomChange}
                style={inputStyle}
              />
            </div>
            <div style={inputContainerStyle}>
              <label style={inputLabelStyle}>Ville</label>
              <input
                type="text"
                value={ville}
                onChange={handleVilleChange}
                style={inputStyle}
              />
            </div>
            <div style={inputContainerStyle}>
              <label style={inputLabelStyle}>Email</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                style={inputStyle}
              />
            </div>
            <div style={inputContainerStyle}>
              <label style={inputLabelStyle}>Téléphone</label>
              <input
                type="tel"
                value={telephone}
                onChange={handleTelephoneChange}
                style={inputStyle}
              />
            </div>
          </div>

          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>À propos</h2>
            <textarea
              value={about}
              onChange={handleAboutChange}
              style={textareaStyle}
            />
          </div>

          <div style={saveButtonContainerStyle}>
            <button onClick={handleSave} style={saveButtonStyle}>Sauvegarder</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Styles modernisés pour un profil plus grand
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '150vh',
  background: 'linear-gradient(45deg, #fff, #fff)', // Fond léger avec un dégradé moderne
  padding: '20px',
};

const profileCardStyle = {
  width: '90%',
  maxWidth: '800px',
  backgroundColor: '#fff',
  borderRadius: '20px',
  boxShadow: '0 8px 40px rgba(0, 0, 0, 0.15)', // Ombre portée plus douce
  padding: '40px',
  fontFamily: "'Roboto', sans-serif",
  color: '#333',
  transition: 'all 0.3s ease-in-out',
  transform: 'scale(1)',
};

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '30px',
};

const profileImageStyle = {
  width: '140px',
  height: '140px',
  borderRadius: '50%',
  objectFit: 'cover',
  marginRight: '20px',
  border: '5px solid #ddd',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
};

const nameStyle = {
  fontSize: '36px',
  fontWeight: '600',
  margin: 0,
};

const roleStyle = {
  fontSize: '20px',
  color: '#777',
};

const contentStyle = {
  marginTop: '30px',
};

const sectionStyle = {
  marginBottom: '40px', // Espacement plus large pour un effet aéré
};

const sectionTitleStyle = {
  fontSize: '26px', // Titre plus grand
  fontWeight: '700',
  marginBottom: '15px',
  color: '#555',
};

const inputContainerStyle = {
  marginBottom: '20px', // Espacement pour séparer les champs
};

const inputLabelStyle = {
  display: 'block',
  fontSize: '14px',
  fontWeight: '600',
  marginBottom: '5px',
  color: '#555',
};

const inputStyle = {
  width: '100%',
  padding: '14px',
  marginTop: '8px',
  borderRadius: '12px',
  border: '1px solid #ccc',
  fontSize: '16px',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  outline: 'none',
};

inputStyle[':focus'] = {
  borderColor: '#007bff', // Changement de bordure en bleu sur focus
  boxShadow: '0 0 5px rgba(38, 0, 255, 0.5)', // Ombre au focus
};

const textareaStyle = {
  width: '100%',
  padding: '14px',
  marginTop: '8px',
  borderRadius: '12px',
  border: '1px solid #ccc',
  fontSize: '16px',
  height: '150px',
  resize: 'vertical',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  outline: 'none',
};

const saveButtonContainerStyle = {
  marginTop: '30px',
  display: 'flex',
  justifyContent: 'center',
};

const saveButtonStyle = {
  backgroundColor: '#007bff', // Couleur moderne de bouton
  color: 'white',
  padding: '16px 32px',
  fontSize: '18px',
  fontWeight: '600',
  border: 'none',
  borderRadius: '50px', // Coins complètement arrondis
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, transform 0.3s ease',
};

saveButtonStyle[':hover'] = {
  backgroundColor: '#0056b3',
  transform: 'scale(1.05)', // Effet de zoom au survol
};

saveButtonStyle[':active'] = {
  transform: 'scale(1)', // Retour à la taille normale lors du clic
};
