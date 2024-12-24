'use client';
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  const [selectedServiceCategory, setSelectedServiceCategory] = useState('');
  const [providerCount, setProviderCount] = useState(0);

  const serviceCategories = ['Service A', 'Service B', 'Service C', 'Service D'];

  const stats = {
    activeProviders: 45,
    inactiveProviders: 10,
    readMessages: 85,
    unreadMessages: 15,
    mostViewedService: 'Service A',
  };

  const data = [
    { name: 'Prestataires Actifs', value: stats.activeProviders },
    { name: 'Prestataires Inactifs', value: stats.inactiveProviders },
    { name: 'Messages Lus', value: stats.readMessages },
    { name: 'Messages Non Lus', value: stats.unreadMessages },
  ];

  const fetchProviderCount = async (category) => {
    // Simuler une API pour l'exemple
    const simulatedResponse = { count: Math.floor(Math.random() * 100) };
    setProviderCount(simulatedResponse.count);
  };

  const handleFilterChange = async (event) => {
    setSelectedServiceCategory(event.target.value);
    if (event.target.value) {
      await fetchProviderCount(event.target.value);
    } else {
      setProviderCount(0);
    }
  };

  return (
    <div style={dashboardStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>Dashboard</h1>
        <p style={welcomeTextStyle}>Bienvenue dans le tableau de bord administrateur</p>
      </div>

      <div style={mainContentStyle}>
        <div style={chartBackgroundStyle}>
          <div style={chartContainerStyle}>
            <h2 style={cardTitleStyle}>Statistiques</h2>
            <ResponsiveContainer width="90%" height={400}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#34495E" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div style={filterContainerStyle}>
          <h2 style={cardTitleStyle}>Filtrer par Catégorie de Service</h2>
          <select
            value={selectedServiceCategory}
            onChange={handleFilterChange}
            style={selectStyle}
          >
            <option value="">-- Sélectionner une catégorie --</option>
            {serviceCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {selectedServiceCategory && (
            <p style={countStyle}>
              Nombre de prestataires pour {selectedServiceCategory}: {providerCount}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

const dashboardStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '40px',
  backgroundColor: '#f7f8fa',
  minHeight: '100vh',
};

const filterContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #ffffff, #f1f1f1)',
  padding: '40px',
  borderRadius: '20px',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
  width: '100%',
  maxWidth: '600px',
  margin: '20px auto',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  border: '1px solid rgba(0, 0, 0, 0.1)',
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '40px',
  width: '100%',
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

const mainContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  marginBottom: '40px',
};

const chartBackgroundStyle = {
  backgroundColor: '#f0f0f0',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '40px',
};

const chartContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '1000px',
  width: '90%',
};

const cardTitleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: '#555',
};

const countStyle = {
  fontSize: '18px',
  color: '#333',
  marginTop: '10px',
  textAlign: 'center',
  fontWeight: 'bold',
};

const selectStyle = {
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid rgba(0, 0, 0, 0.2)',
  width: '100%',
  maxWidth: '300px',
  margin: '10px 0',
};
