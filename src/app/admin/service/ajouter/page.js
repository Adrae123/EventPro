"use client";

import React, { useState } from "react";
import "./ajouter.css";
const AjouterService = () => {
  // États pour gérer les valeurs des champs du formulaire
  const [nomService, setNomService] = useState(""); // Nom du service
  const [categorie, setCategorie] = useState(""); // Catégorie sélectionnée
  const [description, setDescription] = useState(""); // Description du service
  const [images, setImages] = useState([]); // Images téléchargées
  const [message, setMessage] = useState(""); // Message de succès ou d'erreur

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Préparer les données du formulaire pour l'envoi
    const formData = new FormData();
    formData.append("nomService", nomService);
    formData.append("categorie", categorie);
    formData.append("description", description);

    // Ajouter toutes les images au FormData
    images.forEach((image) => {
      formData.append("images[]", image);
    });

    // Envoi des données au serveur via une requête POST
    fetch("/api/service/ajouter", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then(() => {
        setMessage("Service ajouté avec succès !"); // Afficher un message de succès

        // Réinitialiser les champs du formulaire après 3 secondes
        setTimeout(() => {
          setNomService("");
          setCategorie("");
          setDescription("");
          setImages([]);
          setMessage("");
        }, 3000);
      })
      .catch(() => {
        setMessage("Une erreur est survenue lors de l'ajout du service."); // Afficher un message d'erreur
      });
  };

  // Gestion des changements dans le champ d'upload d'images
  const handleImageChange = (e) => {
    setImages([...e.target.files]); // Met à jour l'état des images sélectionnées
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        color: "#000",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        border: "1px solid #ddd", // Cadre léger
        borderRadius: "10px", // Coins arrondis
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Ombre subtile pour un effet moderne
        backgroundColor: "#fff", // Couleur de fond douce
      }}
    >
      {/* Titre principal */}
      <h2 style={{ textAlign: "center", color: "#333" }}>Ajouter un Service</h2>

      {/* Message dynamique pour succès/erreur */}
      {message && (
        <div
          style={{
            backgroundColor: message.includes("succès") ? "#d4edda" : "#f8d7da",
            color: message.includes("succès") ? "#155724" : "#721c24",
            padding: "10px",
            marginBottom: "20px",
            textAlign: "center",
            borderRadius: "5px",
            border: "1px solid",
            borderColor: message.includes("succès") ? "#c3e6cb" : "#f5c6cb",
          }}
        >
          {message}
        </div>
      )}

      {/* Formulaire */}
      <form onSubmit={handleSubmit}>
        {/* Champ : Nom du service */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Nom du Service:
          </label>
          <input
            type="text"
            value={nomService}
            onChange={(e) => setNomService(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "14px",
            }}
          />
        </div>

        {/* Champ : Catégorie */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Catégorie:
          </label>
          <select
            value={categorie}
            onChange={(e) => setCategorie(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "14px",
            }}
          >
            <option value="">Sélectionner une catégorie</option>
            <option value="Categorie 1">Catégorie 1</option>
            <option value="Categorie 2">Catégorie 2</option>
            {/* Ajouter d'autres catégories ici */}
          </select>
        </div>

        {/* Champ : Description */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Description:
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "14px",
              resize: "none",
            }}
          />
        </div>

        {/* Champ : Upload d'images */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Images:</label>
          <input
            type="file"
            onChange={handleImageChange}
            multiple
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "14px",
            }}
          />
        </div>

        {/* Bouton de soumission */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff", // Bleu moderne
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")} // Changement de couleur au survol
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")} // Retour à la couleur initiale
        >
          Ajouter le Service
        </button>
      </form>
    </div>
  );
};

export default AjouterService;
