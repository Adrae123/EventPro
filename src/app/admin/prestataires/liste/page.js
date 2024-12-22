'use client';  // Directive Next.js pour activer le rendu côté client.
import { useState } from 'react';  // Importation du hook useState pour gérer l'état.
import './listecss.css';  // Importation de la feuille de style

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

  // État pour gérer la liste des images visibles dans la modale
  const [selectedImages, setSelectedImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fonction pour ouvrir la modale et afficher les images
  const openImageModal = () => {
    const images = prestataires.map((prestataire) => prestataire.image); // Récupérer toutes les images
    setSelectedImages(images);
    setIsModalOpen(true);
  };

  // Fonction pour fermer la modale
  const closeImageModal = () => {
    setIsModalOpen(false);
  };

  // Fonction pour supprimer un prestataire de la liste.
  const handleDelete = (id) => {
    console.log('Suppression de l\'ID:', id);  // Debugging
    const updatedPrestataires = prestataires.filter((p) => p.id !== id);
    setPrestataires(updatedPrestataires);
    alert('Prestataire supprimé!');
  };
  
  // Fonction pour modifier un prestataire.
  const handleEdit = (id) => {
    console.log('Modification de l\'ID:', id);  // Debugging
    const prestataire = prestataires.find((p) => p.id === id);
    alert(`Modifier le prestataire : ${prestataire.nom} ${prestataire.prenom}`);
  };

  return (
    <div>
      <h1 className="titre-liste">Liste des Prestataires</h1>
      
      {/* Conteneur pour le défilement horizontal */}
      <div className="prestataires-table-wrapper">
        {/* Table des prestataires */}
        <table className="prestataires-table">
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
                    style={{ width: '80px', height: '80px', cursor: 'pointer' }}  // Image avec une taille plus petite pour ne pas encombrer la table.
                    onClick={openImageModal}  // Action sur clic pour ouvrir la modale des images
                  />
                </td>
                <td>
                  {/* Application des classes pour les boutons */}
                  <button 
                    onClick={() => handleEdit(prestataire.id)} 
                    className="btn-modifier"
                    style={{ marginRight: '5px' }}
                  >
                    Modifier
                  </button>
                  <button 
                    onClick={() => handleDelete(prestataire.id)} 
                    className="btn-supprimer"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modale d'affichage des images */}
      {isModalOpen && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="image-modal-content">
            <div className="image-gallery">
              {selectedImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  style={{ width: '200px', height: 'auto', margin: '10px', cursor: 'pointer' }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
