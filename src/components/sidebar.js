'use client';
import  './MenuIcon.css';
import Link from 'next/link';
import { useState } from 'react';

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [showMessagerie, setShowMessagerie] = useState(false);
  const [showPrestataires, setShowPrestataires] = useState(false);

  // Fonction pour masquer le sidebar au clic d'un élément
  const handleLinkClick = () => setIsSidebarVisible(false);

  return (
    <>
      {/* Bouton pour afficher/masquer le sidebar */}
      <button
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
        style={menuButtonStyle}
      >
        Menu
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
              <h4
                style={sectionTitleStyle}
                onClick={() => setShowPrestataires(!showPrestataires)}
              >
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
              <h4
                style={sectionTitleStyle}
                onClick={() => setShowMessagerie(!showMessagerie)}
              >
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
              <Link
                href="/admin/notification"
                style={linkStyle}
                onClick={handleLinkClick}
              >
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

// Styles
const sidebarStyle = {
  width: '250px',
  height: '100vh',
  backgroundColor: '#000',
  color: '#fff',
  padding: '20px',
  position: 'fixed',
  top: 0,
  left: 0,
};

const titleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const menuStyle = {
  listStyle: 'none',
  padding: 0,
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  padding: '10px 0',
  display: 'block',
  cursor: 'pointer',
};

const sectionTitleStyle = {
  fontSize: '16px',
  margin: '12px 0 10px',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const subListStyle = {
  listStyle: 'none',
  paddingLeft: '10px',
};

const subLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  padding: '8px 0',
  display: 'block',
  paddingLeft: '20px',
  transition: 'color 0.3s ease',
};

const menuButtonStyle = {
  position: 'fixed',
  top: '20px',
  left: '20px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
};

export default Sidebar;
