'use client';

export default function Dashboard() {
  return (
    <div style={dashboardStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Dashboard</h1>
        <p style={welcomeTextStyle}>Bienvenue sur le tableau de bord  !</p>
      </header>
    </div>
  );
}

// Styles
const dashboardStyle = {
  padding: '40px',
  backgroundColor: '#fff',
  minHeight: '100vh',
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '40px',
};

const titleStyle = {
  fontSize: '36px',
  fontWeight: 'bold',
  color: '#333',
};

const welcomeTextStyle = {
  fontSize: '18px',
  color: '#555',
};

const cardContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  gap: '20px',
};

const cardStyle = {
  width: '300px',
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

const cardTitleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: '#555',
};

const cardContentStyle = {
  fontSize: '20px',
  color: '#777',
};
