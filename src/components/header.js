"use client";
import React, { useState, useEffect } from 'react';

const Header = () => {
  // Liste des notifications
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Nouvelle demande reçue', read: false },
    { id: 2, message: 'Service mis à jour', read: false },
    { id: 3, message: 'Modification de profil réussie', read: true },
    { id: 4, message: 'Nouvelle demande de congé', read: false },
  ]);

  // Fonction pour marquer une notification comme lue
  const handleNotificationClick = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  // Calcul du nombre de notifications non lues
  const unreadCount = notifications.filter((notification) => !notification.read).length;

  return (
    <header style={{ padding: '20px', backgroundColor: '#f8f9fa', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Tableau de bord Admin</div>

      {/* Icône de notification */}
      <div style={{ position: 'relative', cursor: 'pointer' }}>
        <span
          style={{
            fontSize: '24px',
            color: unreadCount > 0 ? 'red' : 'gray',
            transition: 'color 0.3s',
          }}
        >
          🔔
        </span>

        {/* Compteur de notifications non lues */}
        {unreadCount > 0 && (
          <span
            style={{
              position: 'absolute',
              top: '-5px',
              right: '-5px',
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '50%',
              padding: '5px',
              fontSize: '14px',
            }}
          >
            {unreadCount}
          </span>
        )}
      </div>

      {/* Menu des notifications */}
      <div style={{ position: 'absolute', top: '50px', right: '20px', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px', width: '300px' }}>
        {notifications.map((notification) => (
          <div
            key={notification.id}
            onClick={() => handleNotificationClick(notification.id)}
            style={{
              padding: '10px',
              cursor: 'pointer',
              backgroundColor: notification.read ? '#f1f1f1' : '#d1f7d1',
              borderBottom: '1px solid #ddd',
              color: notification.read ? '#888' : '#000',
            }}
          >
            {notification.message}
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
