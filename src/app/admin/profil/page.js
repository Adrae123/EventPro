export default function Profil() {
    return (
      <div style={containerStyle}>
        <div style={cardStyle}>
          <img
            src="https://via.placeholder.com/150"
            alt="Photo de profil"
            style={imageStyle}
          />
          <div style={infoContainerStyle}>
            <h1 style={titleStyle}>Profil Administrateur</h1>
            <p style={infoStyle}><strong>Nom :</strong> Admin</p>
            <p style={infoStyle}><strong>Email :</strong> admin@example.com</p>
          </div>
        </div>
      </div>
    );
  }

  // Styles
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f9',
  };

  const cardStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '30px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    borderRadius: '10px',
    width: '600px',
    maxWidth: '90%',
  };

  const imageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: '30px',
  };

  const infoContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  };

  const infoStyle = {
    fontSize: '18px',
    color: '#555',
    margin: '5px 0',
  };
