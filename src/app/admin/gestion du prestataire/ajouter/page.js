'use client';

import { useState } from 'react';

export default function AjouterPrestataire() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    ville: '',
    categorie: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour ajouter le prestataire (ex. appel API)
    console.log('Prestataire ajouté :', formData);
    alert('Prestataire ajouté avec succès !');
    setFormData({ nom: '', email: '', telephone: '', ville: '', categorie: '' });
  };

  return (
    <div>
      <h1>Ajouter un Prestataire</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        <div>
          <label>Nom :</label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email :</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Téléphone :</label>
          <input
            type="text"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Ville :</label>
          <input
            type="text"
            name="ville"
            value={formData.ville}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Catégorie :</label>
          <input
            type="text"
            name="categorie"
            value={formData.categorie}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}
