'use client';
import React, { useEffect, useState } from 'react';
import './notificat.css';

const NotificationDropdown = () => {
  const [notifications, setNotifications] = useState([]); // Stocke les notifications
  const [showDropdown, setShowDropdown] = useState(false); // Gère l'affichage du menu déroulant
  const [unreadCount, setUnreadCount] = useState(0); // Compteur de notifications non lues

  // Charger les notifications depuis l'API
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('/api/notifications'); // Remplacez par votre API
        const data = await response.json();
        setNotifications(data);
        setUnreadCount(data.filter((notif) => !notif.is_viewed).length); // Met à jour le compteur
      } catch (error) {
        console.error('Erreur lors du chargement des notifications:', error);
      }
    };

    // Charger les notifications au démarrage
    fetchNotifications();

    // Optionnel: Mettre à jour périodiquement les notifications
    const intervalId = setInterval(fetchNotifications, 60000); // Rafraîchir toutes les 60 secondes (1 minute)
    
    return () => clearInterval(intervalId); // Nettoyer l'intervalle au démontage du composant
  }, []); 

  // Fonction pour marquer une notification comme vue
  const markAsViewed = async (id) => {
    try {
      await fetch(`/api/notifications/${id}/mark-viewed`, { method: 'POST' });
      setNotifications((prev) =>
        prev.map((notif) => 
          notif.id === id ? { ...notif, is_viewed: true } : notif
        )
      );
      setUnreadCount(unreadCount - 1); // Met à jour le compteur
    } catch (error) {
      console.error('Erreur lors de la mise à jour:', error);
    }
  };

  return (
    <div className="notification-dropdown">
      {/* Icône de notification toujours visible */}
      <div
        className="notification-icon"
        onClick={() => setShowDropdown(!showDropdown)} // Toggle du menu déroulant
      >
        🔔
        {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>} {/* Affichage du compteur */}
      </div>

      {/* Liste déroulante des notifications */}
      {showDropdown && (
        <div className="notification-menu">
          <h3>Notifications</h3>
          {notifications.slice(0, 5).map((notification) => (
            <div
              key={notification.id}
              className={`notification-item ${
                notification.is_viewed ? 'viewed' : 'not-viewed'
              }`}
            >
              <div className="notification-user">
                <img
                  src={notification.user_profile || 'https://via.placeholder.com/40'}
                  alt="Profil utilisateur"
                  className="user-avatar"
                />
                <span>{notification.user_name || 'Utilisateur inconnu'}</span>
              </div>
              <p>{notification.message}</p>
              <small>{new Date(notification.created_at).toLocaleString()}</small>
              {!notification.is_viewed && (
                <button onClick={() => markAsViewed(notification.id)}>Marquer comme vue</button>
              )}
            </div>
          ))}
          <a href="/notifications" className="see-all">Voir toutes les notifications</a>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
