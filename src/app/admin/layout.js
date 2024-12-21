export const metadata = {
    title: 'Admin Panel',
    description: 'Interface d’administration pour gérer les services',
  };

  import Sidebar from '../../components/sidebar';



  export default function AdminLayout({ children }) {
    return (
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Contenu principal */}
        <div style={{ flex: 1, padding: '20px' }}>
          {children}
        </div>
      </div>
    );
  }
