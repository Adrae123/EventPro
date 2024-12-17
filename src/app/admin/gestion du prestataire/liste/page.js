'use client';

import { useState } from 'react';

export default function ListePrestataires() {
  const [prestataires, setPrestataires] = useState([
    {
      id: 1,
      nom: 'Prestataire 1',
      email: 'prestataire1@example.com',
      telephone: '0600000001',
      ville: 'Ville A',
      categorie: 'Catégorie A',
    },
    {
      id: 2,
      nom: 'Prestataire 2',
      email: 'prestataire2@example.com',
      telephone: '0600000002',
      ville: 'Ville B',
      categorie: 'Catégorie B',
    },
  ]);

  const handleDelete = (id) => {
    const updatedPrestataires = prestataires.filter((p) => p.id !== id);
    setPrestataires(updatedPrestataires);
    alert('Prestataire supprimé !');
  };

  const handleEdit = (id) => {
    const prestataire = prestataires.find((p) => p.id === id);
    alert(`Modifier le prestataire : ${prestataire.nom}`);
    // Logique pour modifier un prestataire
  };

  return (
    <div>
      <h1>Liste des Prestataires</h1>
      <table border="1" cellPadding="10" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Ville</th>
            <th>Catégorie</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {prestataires.map((prestataire) => (
            <tr key={prestataire.id}>
              <td>{prestataire.nom}</td>
              <td>{prestataire.email}</td>
              <td>{prestataire.telephone}</td>
              <td>{prestataire.ville}</td>
              <td>{prestataire.categorie}</td>
              <td>
                <button onClick={() => handleEdit(prestataire.id)}>Modifier</button>
                <button onClick={() => handleDelete(prestataire.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
