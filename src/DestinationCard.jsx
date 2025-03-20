
const cardStyle = {
    width: "300px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  };
  
  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };
  
  const DestinationCard = ({ destination }) => {
    return (
      <div style={cardStyle}>
        <img src={destination.image} alt={destination.name} style={imageStyle} />
        <h3>{destination.name}</h3>
        <p><strong>{destination.location}</strong></p>
        <p>{destination.description}</p>
        <p><strong>Price: {destination.price}</strong></p>
      </div>
    );
  };
  
  export default DestinationCard;