'use client'; // Nécessaire si vous utilisez Next.js pour un composant côté client
import React from 'react';
import NotificationDropdown from '../components/NotificationDropdown'; // Assurez-vous que ce chemin est correct
import './navbarcss.css'; // Vérifiez que le fichier CSS est disponible et chargé

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Titre de la Navigation</h1>
        <NotificationDropdown />
      </div>
    </nav>
  );
};

export default Navbar;
