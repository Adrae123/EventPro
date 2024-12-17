'use client';

import { useState } from 'react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    userType: 'client',
    city: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Reset previous messages
    setErrorMessage('');
    setSuccessMessage('');

    // Validation des champs requis
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword || !formData.phone || !formData.city) {
      setErrorMessage("Tous les champs sont obligatoires !");
      return;
    }

    // Vérification des mots de passe
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Les mots de passe ne correspondent pas !");
      return;
    }

    setSuccessMessage("Inscription réussie ! Bienvenue.");
    // Réinitialisation des champs après l'enregistrement
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      userType: 'client',
      city: '',
    });
    // Vous pouvez ajouter ici la logique pour envoyer les données au backend
    console.log('Inscription réussie avec les données :', formData);
  };

  const cities = [
    'Casablanca', 'Rabat', 'Marrakech', 'Fès', 'Tanger', 'Agadir', 'Meknès',
    'Oujda', 'Kenitra', 'Tetouan', 'Safi', 'El Jadida', 'Nador', 'Beni Mellal',
    'Khouribga', 'Settat',
  ];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '165 vh', // Ajuste la hauteur de l'écran
        background: '#fff', // Marron clair
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <div
        style={{
          width: '50%',
          maxWidth: '700px',
          background: '#fff',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          border: '2px solid #d7a976',
        }}
      >
        <h2 style={{ textAlign: 'center', color: '#4A90E2', marginBottom: '20px' }}>
          Inscription form
        </h2>

        {/* Message d'instruction */}
        <div style={{ textAlign: 'center', marginBottom: '20px', fontSize: '16px', color: '#555' }}>
          Veuillez remplir ce formulaire 
        </div>

        {errorMessage && (
          <div style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div style={{ color: 'green', marginBottom: '15px', textAlign: 'center' }}>
            {successMessage}
          </div>
        )}

        <form onSubmit={handleRegister}>
          {/* Champ prénom */}
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="firstName" style={styles.label}>
              Prénom :
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          {/* Champ nom */}
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="lastName" style={styles.label}>
              Nom :
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          {/* Champ email */}
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={styles.label}>
              Email :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          {/* Champ téléphone */}
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="phone" style={styles.label}>
              Téléphone :
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              inputMode="numeric"  // Permet de n'accepter que des chiffres
              pattern="[0-9]*"  // Validation pour les chiffres
              style={styles.input}
            />
          </div>

          {/* Champ mot de passe */}
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="password" style={styles.label}>
              Mot de passe :
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          {/* Champ confirmation du mot de passe */}
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="confirmPassword" style={styles.label}>
              Confirmez le mot de passe :
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          {/* Champ type d'utilisateur */}
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="userType" style={styles.label}>
              Type d'utilisateur :
            </label>
            <select
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              required
              style={styles.input}
            >
              <option value="client">Client</option>
            </select>
          </div>

          {/* Champ ville */}
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="city" style={styles.label}>
              Ville :
            </label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              style={styles.input}
            >
              <option value="" disabled>
                -- Choisissez votre ville --
              </option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#4A90E2',
              border: 'none',
              borderRadius: '5px',
              color: '#fff',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Enregistrer
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  label: {
    fontSize: '14px',
    color: '#333',
    marginBottom: '5px',
    display: 'block',
  },
  input: {
    width: '100%',
    padding: '12px', // Augmente la taille des champs
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginBottom: '10px',
    fontSize: '16px',
  },
};

export default RegisterPage;
