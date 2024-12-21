'use client';  // Directive Next.js pour activer le rendu côté client.
import './liste.css';
import { useState } from 'react';  // Importation du hook useState pour gérer l'état.

export default function ListePrestataires() {
  // Déclaration de l'état initial avec une liste de prestataires fictifs.
  const [prestataires, setPrestataires] = useState([
    {
      id: 1,
      nom: 'Prestataire 1',
      prenom: 'Prenom 1',
      telephone: '0600000001',
      ville: 'Casablanca',
      cin: 'A123456',
      email: 'prestataire1@example.com',
      motDePasse: 'password1',
      categorieService: 'Anniversaire',
      image: 'image1.jpg',  // Image de présentation du prestataire.
    },
    {
      id: 2,
      nom: 'Prestataire 2',
      prenom: 'Prenom 2',
      telephone: '0600000002',
      ville: 'Marrakech',
      cin: 'B654321',
      email: 'prestataire2@example.com',
      motDePasse: 'password2',
      categorieService: 'Mariage',
      image: 'image2.jpg',  // Image de présentation du prestataire.
    },
  ]);

  // Fonction pour supprimer un prestataire de la liste.
  const handleDelete = (id) => {
    const updatedPrestataires = prestataires.filter((p) => p.id !== id);
    setPrestataires(updatedPrestataires);  // Mise à jour de l'état.
    alert('Prestataire supprimé !');  // Confirmation de suppression.
  };

  // Fonction pour modifier un prestataire (à compléter selon les besoins).
  const handleEdit = (id) => {
    const prestataire = prestataires.find((p) => p.id === id);
    alert(`Modifier le prestataire : ${prestataire.nom} ${prestataire.prenom}`);
    // Logique de modification à implémenter.
  };

  return (
    <div>
      <h1>Liste des Prestataires</h1>
      <table border="1" cellPadding="10" style={{ width: '100%', textAlign: 'left', fontSize: '12px' }}>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Téléphone</th>
            <th>Ville</th>
            <th>CIN</th>
            <th>Email</th>
            <th>Mot de Passe</th>
            <th>Catégorie de Service</th>
            <th>Image</th>
            <th>Actions</th> {/* Ajout de la colonne pour les boutons Modifier/Supprimer */}
          </tr>
        </thead>
        <tbody>
          {prestataires.map((prestataire) => (
            <tr key={prestataire.id}>
              <td>{prestataire.nom}</td>
              <td>{prestataire.prenom}</td>
              <td>{prestataire.telephone}</td>
              <td>{prestataire.ville}</td>
              <td>{prestataire.cin}</td>
              <td>{prestataire.email}</td>
              <td>{prestataire.motDePasse}</td>
              <td>{prestataire.categorieService}</td>
              <td>
                <img
                  src={prestataire.image}
                  alt={`${prestataire.nom} ${prestataire.prenom}`}
                  style={{ width: '80px', height: '80px' }}  // Image avec une taille plus petite pour ne pas encombrer la table.
                />
              </td>
              <td>
                <button onClick={() => handleEdit(prestataire.id)} style={{ marginRight: '5px' }}>Modifier</button>
                <button onClick={() => handleDelete(prestataire.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
