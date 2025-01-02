
"use client";

import React, { useState, useEffect } from 'react';
import './liste.css';

const ListeServices = () => {
  const [services, setServices] = useState([
    { id: 1, nomService: 'Service A', categorie: 'Catégorie 1', description: 'Description du Service A' },
    { id: 2, nomService: 'Service B', categorie: 'Catégorie 2', description: 'Description du Service B' },
    { id: 3, nomService: 'Service C', categorie: 'Catégorie 3', description: 'Description du Service C' },
    { id: 4, nomService: 'Service D', categorie: 'Catégorie 1', description: 'Description du Service D' },
    { id: 5, nomService: 'Service E', categorie: 'Catégorie 2', description: 'Description du Service E' },
    { id: 6, nomService: 'Service F', categorie: 'Catégorie 3', description: 'Description du Service F' },
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState(services);
  const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage] = useState(5);
  
  useEffect(() => {
    // Filtrer les services en fonction du terme de recherche
    const filtered = services.filter(service =>
      service.nomService.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.categorie.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredServices(filtered);
  }, [searchTerm, services]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = (id) => {
    fetch(`/api/service/${id}/supprimer`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        setServices(services.filter(service => service.id !== id));  // Supprimer localement
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression du service:', error);
      });
  };

  const handleModify = (id) => {
    window.location.href = `/admin/service/modifier/${id}`;
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
  const currentItems = filteredServices.slice((currentPage - 1) * servicesPerPage, currentPage * servicesPerPage);

  return (
    <div>
      <h1 className="titre-liste">Liste des Services</h1>

      {/* Barre de recherche */}
      <div className="search-container" style={{ position: 'relative', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Rechercher par nom ou catégorie"
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
      </div>

      {/* Table des services */}
      <table className="services-table">
        <thead>
          <tr>
            <th>Nom du Service</th>
            <th>Catégorie</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length === 0 ? (
            <tr>
              <td colSpan="4">Aucun service trouvé</td>
            </tr>
          ) : (
            currentItems.map((service) => (
              <tr key={service.id}>
                <td>{service.nomService}</td>
                <td>{service.categorie}</td>
                <td>{service.description}</td>
                <td>
                  <button className="btn-modify" onClick={() => handleModify(service.id)}>
                    Modifier
                  </button>
                  <button className="btn-delete" onClick={() => handleDelete(service.id)}>
                    Supprimer
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="pagination">
  {/* Bouton Précédent */}
  <button
    onClick={() => handlePageChange(currentPage - 1)}
    disabled={currentPage === 1}
    className="prev-button"
  >
    Précédent
  </button>

  {/* Bouton Suivant */}
  <button
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
    className="next-button"
  >
    Suivant
  </button>
</div>
    </div>
  );
};

export default ListeServices;
