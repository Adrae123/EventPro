'use client';
import './Ajouter.css';
import { useState } from 'react';

export default function AjouterPrestataire() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    ville: '',
    cin: '',
    email: '',
    motDePasse: '',
    confirmMotDePasse: '',
    categorieService: '',
    image: null,
  });

  const villes = ['Casablanca', 'Marrakech', 'Rabat', 'Fès', 'Tanger'];
  const categories = [
    'Anniversaire',
    'Mariage',
    'Khtana',
    'Bébé Shower',
    'Fiançailles',
    'Succès aux études',
  ];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Prestataire ajouté :', formData);
    alert('Bien enregistré !');
    setFormData({
      nom: '',
      prenom: '',
      telephone: '',
      ville: '',
      cin: '',
      email: '',
      motDePasse: '',
      confirmMotDePasse: '',
      categorieService: '',
      image: null,
    });
  };

  return (
    <div className="form-container">
      <h1>Ajouter un Prestataire</h1>
      <form onSubmit={handleSubmit} className="form-style">
        {[
          { label: 'Nom', name: 'nom', type: 'text' },
          { label: 'Prénom', name: 'prenom', type: 'text' },
          { label: 'Téléphone', name: 'telephone', type: 'tel', pattern: '[0-9]{10}' },
          { label: 'CIN', name: 'cin', type: 'text' },
          { label: 'Email', name: 'email', type: 'email' },
          { label: 'Mot de passe', name: 'motDePasse', type: 'password' },
          { label: 'Confirmer mot de passe', name: 'confirmMotDePasse', type: 'password' },
        ].map((field) => (
          <div key={field.name} className="form-group">
            <label>{field.label} :</label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required
              {...(field.pattern && { pattern: field.pattern })}
            />
          </div>
        ))}

        <div className="form-group">
          <label>Ville :</label>
          <select
            name="ville"
            value={formData.ville}
            onChange={handleChange}
            required
          >
            <option value="">--Choisir une ville--</option>
            {villes.map((ville) => (
              <option key={ville} value={ville}>
                {ville}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Catégorie de service :</label>
          <select
            name="categorieService"
            value={formData.categorieService}
            onChange={handleChange}
            required
          >
            <option value="">--Choisir une catégorie--</option>
            {categories.map((categorie) => (
              <option key={categorie} value={categorie}>
                {categorie}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Image :</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Ajouter</button>
      </form>
    </div>
  );
}
