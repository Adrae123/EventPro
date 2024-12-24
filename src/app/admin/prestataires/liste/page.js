'use client'; // Directive Next.js pour activer le rendu côté client.
import { useState } from 'react';
import './listecss.css';

export default function ListePrestataires() {
  const [prestataires, setPrestataires] = useState([
    // Liste initiale des prestataires
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
      image: 'image1.jpg',
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
      image: 'image2.jpg',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredPrestataires = prestataires.filter((prestataire) =>
    [prestataire.nom, prestataire.prenom, prestataire.cin]
      .some((field) => field.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredPrestataires.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredPrestataires.slice(startIndex, endIndex);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1 className="titre-liste">Liste des Prestataires</h1>

      {/* Barre de recherche améliorée */}
      <div className="search-container" style={{ position: 'relative', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Rechercher par nom, prénom ou CIN"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
          style={{
            padding: '10px 40px 10px 20px',
            width: '100%',
            borderRadius: '25px',
            border: '1px solid #ccc',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        />
        <span
          style={{
            position: 'absolute',
            top: '50%',
            right: '15px',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            color: '#888',
          }}
        >
          🔍
        </span>
        {searchTerm && filteredPrestataires.length > 0 && (
          <div
            className="suggestions"
            style={{
              position: 'absolute',
              top: '50px',
              left: '0',
              right: '0',
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              borderRadius: '5px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              maxHeight: '150px',
              overflowY: 'auto',
              zIndex: 10,
            }}
          >
            {filteredPrestataires.slice(0, 5).map((prestataire) => (
              <div
                key={prestataire.id}
                style={{
                  padding: '10px',
                  cursor: 'pointer',
                  borderBottom: '1px solid #eee',
                }}
                onClick={() => setSearchTerm(prestataire.nom)}
              >
                {prestataire.nom} {prestataire.prenom}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Table des prestataires */}
      <div className="prestataires-table-wrapper">
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((prestataire) => (
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
                    style={{ width: '80px', height: '80px', cursor: 'pointer' }}
                  />
                </td>
                <td>
                  <button
                    onClick={() => alert(`Modifier : ${prestataire.nom}`)}
                    className="btn-modifier"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => alert(`Supprimer : ${prestataire.nom}`)}
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

      {/* Pagination */}
      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
