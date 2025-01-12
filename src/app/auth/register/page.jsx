
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
    userType: '',
    city: '',
    serviceCategory: '', // This is correct now as we have renamed serviceCategories to serviceCategory
    serviceDescription: '', // Specific to 'prestataire'
    servicePhotos: [], // Specific to 'prestataire'
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, servicePhotos: Array.from(e.target.files) });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.phone ||
      !formData.city
    ) {
      setErrorMessage('Tous les champs sont obligatoires !');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Les mots de passe ne correspondent pas !');
      return;
    }

    if (formData.userType === 'prestataire' && !formData.serviceDescription) {
      setErrorMessage('Veuillez fournir une description de votre service.');
      return;
    }

    setSuccessMessage('Inscription réussie ! Bienvenue.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      userType: '',
      city: '',
      serviceCategory: '',
      serviceDescription: '',
      servicePhotos: [],
    });

    console.log('Données enregistrées :', formData);
  };

  const cities = [
    'Casablanca', 'Rabat', 'Marrakech', 'Fès', 'Tanger', 'Agadir', 'Meknès', 'Oujda', 'Kenitra', 'Tetouan', 'Safi', 'El Jadida', 'Nador', 'Beni Mellal', 'Khouribga', 'Settat',
  ];

  const serviceCategories = [ // Renamed to serviceCategories here
    'Plomberie', 'Électricité', 'Peinture', 'Menuiserie', 'Nettoyage', 'Jardinage', 'Construction', 'Informatique', 'Consultation',
  ];

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Formulaire d'inscription</h2>
        <div style={styles.instructions}>
          Veuillez remplir ce formulaire en fonction de votre rôle.
        </div>

        {errorMessage && <div style={styles.errorMessage}>{errorMessage}</div>}
        {successMessage && <div style={styles.successMessage}>{successMessage}</div>}

        <form onSubmit={handleRegister}>
          {/* Champs communs */}
          <input
            type="text"
            name="firstName"
            placeholder="Prénom"
            value={formData.firstName}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Nom"
            value={formData.lastName}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Téléphone"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmez le mot de passe"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={styles.input}
          />
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="client">Client</option>
            <option value="admin">Admin</option>
            <option value="prestataire">Prestataire</option>
          </select>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
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

          {/* Champs spécifiques au prestataire */}
          {formData.userType === 'prestataire' && (
            <>
              <select
                name="serviceCategory"
                value={formData.serviceCategory}
                onChange={handleChange}
                style={styles.input}
              >
                <option value="" disabled>
                  -- Choisissez une catégorie de service --
                </option>
                {serviceCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <textarea
                name="serviceDescription"
                placeholder="Description du service"
                value={formData.serviceDescription}
                onChange={handleChange}
                style={{ ...styles.input, height: '100px' }}
              />
              <input
                type="file"
                name="servicePhotos"
                multiple
                onChange={handleFileChange}
                style={styles.input}
              />
            </>
          )}

          <button type="submit" style={styles.button}>
            Enregistrer
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#f7f7f7',
    fontFamily: 'Poppins, sans-serif',
  },
  formContainer: {
    width: '50%',
    maxWidth: '1000px',
    background: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  },
  title: { textAlign: 'center', color: '#4A90E2', marginBottom: '20px' },
  instructions: { textAlign: 'center', marginBottom: '20px', fontSize: '16px', color: '#555' },
  errorMessage: { color: 'red', marginBottom: '15px', textAlign: 'center' },
  successMessage: { color: 'green', marginBottom: '15px', textAlign: 'center' },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#4A90E2',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default RegisterPage;
