'use client';
import './MenuIcon.css';
import Link from 'next/link';
import { useState } from 'react';

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [showMessagerie, setShowMessagerie] = useState(false);
  const [showPrestataires, setShowPrestataires] = useState(false);

  const handleLinkClick = () => setIsSidebarVisible(false);

  return (
    <>
      {/* Bouton pour afficher/masquer le sidebar */}
      <button onClick={() => setIsSidebarVisible(!isSidebarVisible)} style={menuButtonStyle}>
        <span style={buttonIconStyle}>☰</span> {/* Icône du menu */}
      </button>

      {isSidebarVisible && (
        <aside style={sidebarStyle}>
          <h3 style={titleStyle}>Admin Panel</h3>
          <ul style={menuStyle}>
            <li>
              <Link href="/admin/dashboard" style={linkStyle} onClick={handleLinkClick}>
                Dashboard
              </Link>
            </li>

            {/* Gestion des Prestataires */}
            <li>
              <h4 style={sectionTitleStyle} onClick={() => setShowPrestataires(!showPrestataires)}>
                Gestion des Prestataires
              </h4>
              {showPrestataires && (
                <ul style={subListStyle}>
                  <li>
                    <Link
                      href="/admin/prestataires/ajouter"
                      style={subLinkStyle}
                      onClick={handleLinkClick}
                    >
                      Ajouter
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin/prestataires/liste"
                      style={subLinkStyle}
                      onClick={handleLinkClick}
                    >
                      Liste
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Messagerie */}
            <li>
              <h4 style={sectionTitleStyle} onClick={() => setShowMessagerie(!showMessagerie)}>
                Messagerie
              </h4>
              {showMessagerie && (
                <ul style={subListStyle}>
                  <li>
                    <Link
                      href="/admin/messagerie/prive"
                      style={subLinkStyle}
                      onClick={handleLinkClick}
                    >
                      Privée
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin/messagerie/public"
                      style={subLinkStyle}
                      onClick={handleLinkClick}
                    >
                      Publique
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/admin/notification" style={linkStyle} onClick={handleLinkClick}>
                Notification
              </Link>
            </li>
            <li>
              <Link href="/admin/profil" style={linkStyle} onClick={handleLinkClick}>
                Profil
              </Link>
            </li>
            <li>
              <Link href="/admin/deconnexion" style={linkStyle} onClick={handleLinkClick}>
                Déconnexion
              </Link>
            </li>
          </ul>
        </aside>
      )}
    </>
  );
};

// Styles CSS
const sidebarStyle = {
  width: '250px',
  height: '100vh',
  backgroundColor: '#2C3E50',
  color: '#fff',
  padding: '20px',
  position: 'fixed',
  top: 0,
  left: 0,
  borderRadius: '8px 0 0 8px',
  boxShadow: '2px 0 8px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease', // Animation d'ouverture/fermeture
};

const titleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
  fontFamily: 'Arial, sans-serif',
};

const menuStyle = {
  listStyle: 'none',
  padding: 0,
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  padding: '12px 0',
  display: 'block',
  fontSize: '16px',
  fontFamily: 'Arial, sans-serif',
  borderBottom: '1px solid #34495E',
  transition: 'background-color 0.3s',
};

const sectionTitleStyle = {
  fontSize: '18px',
  margin: '12px 0 10px',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontFamily: 'Arial, sans-serif',
  transition: 'color 0.3s ease',
};

const subListStyle = {
  listStyle: 'none',
  paddingLeft: '20px',
};

const subLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  padding: '8px 0',
  display: 'block',
  fontSize: '14px',
  paddingLeft: '30px',
  transition: 'color 0.3s ease',
};

const menuButtonStyle = {
  position: 'fixed',
  top: '20px',
  left: '20px',
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#2C3E50',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s ease',
};

const buttonIconStyle = {
  fontSize: '24px',
  marginRight: '10px',
};

// Effet de survol (hover) pour les liens
linkStyle[':hover'] = {
  backgroundColor: '#34495E',
};

subLinkStyle[':hover'] = {
  color: '#1ABC9C',
};

export default Sidebar;
