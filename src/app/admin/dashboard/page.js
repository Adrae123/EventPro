'use client';
import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { PieChart, Pie, Cell, ResponsiveContainer as PieContainer } from 'recharts';
import { MapContainer, TileLayer } from 'react-leaflet'; // Importation pour la heatmap
import 'leaflet/dist/leaflet.css'; // Styles pour la carte

export default function Dashboard() {
  const [selectedServiceCategory, setSelectedServiceCategory] = useState(''); // État pour suivre la catégorie de service sélectionnée
  const [providerCount, setProviderCount] = useState(0); // État pour le nombre de prestataires

  // Données des statistiques
  const stats = {
    totalUsers: 120,
    totalProviders: 55,
    totalServices: 30,
    activeProviders: 45,
    inactiveProviders: 10,
    readMessages: 85,
    unreadMessages: 15,
    mostViewedService: 'Service A', // Service le plus recherché
  };

  // Données pour le graphique en camembert
  const pieData = [
    { name: 'Service le plus recherché', value: 1 }, // On montre 1 comme valeur représentative
    { name: 'Prestataires actifs', value: stats.activeProviders },
    { name: 'Prestataires inactifs', value: stats.inactiveProviders },
  ];

  // Couleurs pour le graphique en camembert
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  // Données pour le tableau des statistiques détaillées
  const tableData = [
    { type: 'Utilisateurs', category: 'Total', value: stats.totalUsers }, // Nombre global d'utilisateurs
    { type: 'Prestataires', category: 'Actifs', value: stats.activeProviders },
    { type: 'Prestataires', category: 'Inactifs', value: stats.inactiveProviders },
    { type: 'Messages', category: 'Lus', value: stats.readMessages },
    { type: 'Messages', category: 'Non Lus', value: stats.unreadMessages },
    { type: 'Services', category: 'Plus recherché', value: stats.mostViewedService },
  ];

  // Données fictives pour la heatmap
  const heatmapData = [
    [35.6895, 139.6917, 0.8], // Tokyo
    [48.8566, 2.3522, 0.6],   // Paris
    [40.7128, -74.0060, 0.4], // New York
    [34.0522, -118.2437, 0.3], // Los Angeles
  ];

  return (
    <div style={dashboardStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>Dashboard</h1>
        <p style={welcomeTextStyle}>Bienvenue dans le tableau de bord administrateur</p>
      </div>

      <div style={mainContentStyle}>
        {/* Tableau des Statistiques */}
        <div style={tableContainerStyle}>
          <h2 style={cardTitleStyle}>Statistiques Détails</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>Type</th>
                <th style={tableHeaderStyle}>Catégorie</th>
                <th style={tableHeaderStyle}>Valeur</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td style={tableCellStyle}>{row.type}</td>
                  <td style={tableCellStyle}>{row.category}</td>
                  <td style={tableCellStyle}>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Graphique Bar */}
        <div style={chartBackgroundStyle}>
          <h2 style={cardTitleStyle}>Graphique des Prestataires</h2>
          <ResponsiveContainer width="90%" height={400}>
            <BarChart data={[tableData[1], tableData[2]]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#34495E" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Graphique en Camembert */}
        <div style={chartBackgroundStyle}>
          <h2 style={cardTitleStyle}>Répartition des Statistiques</h2>
          <PieContainer width="90%" height={400}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </PieContainer>
        </div>

        {/* Heatmap */}
        <div style={chartBackgroundStyle}>
  <h2 style={cardTitleStyle}>Heatmap des Prestataires</h2>
  <MapContainer center={[31.7917, -7.0926]} zoom={6} style={{ height: '400px', width: '90%' }}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    {/* Ajouter ici les points pour la heatmap */}
  </MapContainer>
</div>

      </div>
    </div>
  );
}

// Styles
const dashboardStyle = { display: 'flex', flexDirection: 'column', padding: '40px', backgroundColor: '#f7f8fa', minHeight: '100vh' };
const headerStyle = { textAlign: 'center', marginBottom: '40px' };
const titleStyle = { fontSize: '36px', fontWeight: 'bold', color: '#333' };
const welcomeTextStyle = { fontSize: '18px', color: '#555' };
const mainContentStyle = { display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' };
const tableContainerStyle = { backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' };
const tableStyle = { width: '100%', borderCollapse: 'collapse', marginTop: '20px' };
const tableHeaderStyle = { backgroundColor: '#34495E', color: '#fff', padding: '10px', textAlign: 'left', fontSize: '16px' };
const tableCellStyle = { padding: '10px', borderBottom: '1px solid #ddd', fontSize: '14px', color: '#333' };
const chartBackgroundStyle = { backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' };
const cardTitleStyle = { fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', color: '#555' };
