import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside style={{ width: '250px', backgroundColor: '#f4f4f4', padding: '20px' }}>
      <h3>Admin Panel</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link href="/admin/dashboard">Dashboard</Link></li>
        <li><Link href="/admin/messagerie/prive">Messagerie Privée</Link></li>
        <li><Link href="/admin/messagerie/public">Messagerie Publique</Link></li>
        <li><Link href="/admin/prestataires/ajouter">Ajouter un Prestataire</Link></li>
        <li><Link href="/admin/prestataires/liste">Liste des Prestataires</Link></li>
        <li><Link href="/admin/profil">Profil</Link></li>
        <li><Link href="/admin/deconnexion">Déconnexion</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
