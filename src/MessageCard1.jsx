// MessageCard.jsx
function MessageCard({ title, message }) {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    margin: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    maxWidth: '300px'
  };

  return (
    <div style={cardStyle}>
      <h2 style={{ color: '#b65f5fff' }}>{title}</h2>
      <p style={{ color: '#7e3434ff' }}>{message}</p>
    </div>
  );
}

export default MessageCard;
