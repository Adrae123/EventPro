'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Deconnexion() {
  const router = useRouter();

  useEffect(() => {
    // Simuler la déconnexion (vous pouvez ajouter votre logique ici)
    console.log("Déconnexion réussie!");

    // Rediriger vers la page de login
    router.push('/login');
  }, [router]);

  return (
    <div style={messageStyle}>
      <h2>Déconnexion en cours...</h2>
    </div>
  );
}

// Style du message
const messageStyle = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  color: '#333',
};
