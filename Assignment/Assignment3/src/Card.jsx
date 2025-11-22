import { useLocation, useNavigate } from "react-router-dom";

function Card() {
  const location = useLocation();
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      title: "New York",
      description:
        "New York is one of the most famous cities in the world, known for its fast lifestyle, tall skyscrapers, and diverse culture. It is home to major attractions like the Statue of Liberty, Times Square, Central Park, and the Empire State Building. The city never sleeps—restaurants, shops, and entertainment stay active day and night. New York is also a major center for finance, fashion, art, and media, with Wall Street, Broadway theaters, and world-class museums such as the Metropolitan Museum of Art.",
      image: "/images/New york.jpeg",
    },
    {
      id: 2,
      title: "Florida",
      description:
        "Florida is known as the Sunshine State because of its warm weather and beautiful beaches. It is one of the most popular tourist destinations in the USA. Major attractions include Walt Disney World, Universal Studios, Miami Beach, Everglades National Park, and the NASA Kennedy Space Center. Florida is famous for water sports, nightlife, wildlife, and theme parks. Cities like Miami, Orlando, and Tampa attract millions of visitors every year.",
      image: "/images/Florida.jpeg",
    },
    {
      id: 3,
      title: "San Francisco",
      description:
        "San Francisco is a scenic and culturally rich city located in northern California. It is well-known for the Golden Gate Bridge, Alcatraz Island, Cable Cars, and its steep, hilly streets. The city has a cool climate, beautiful waterfronts, and a strong tech influence because of its closeness to Silicon Valley. San Francisco is also popular for its diverse neighborhoods, including Chinatown, Fisherman’s Wharf, and Mission District.",
      image: "/images/San Francisco.jpeg",
    },
    {
      id: 4,
      title: "Los Angeles",
      description:
        "Los Angeles is the entertainment capital of the world, home to Hollywood, world-famous movie studios, and celebrity culture. It is a large, vibrant city known for its beaches, warm climate, and tourist attractions like the Hollywood Walk of Fame, Universal Studios, Santa Monica Pier, and Griffith Observatory. Los Angeles is also famous for arts, music, fashion, and international food. It attracts millions of visitors who want to experience the glitz and glamour of American entertainment.",
      image: "/images/Los Angeles.jpeg",
    },
  ];

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "1100px",
        margin: "auto",
        textAlign: "center",
        fontFamily: "Arial"
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>Welcome {location.state?.name}</h2>
      <p style={{ marginBottom: "30px" }}>{location.state?.details}</p>

      {/* Grid layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "25px"
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => navigate(`/details/${card.id}`, { state: card })}
            style={{
              cursor: "pointer",
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "10px",
              background: "white",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "0.3s",
              textAlign: "center"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={card.image}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
              alt={card.title}
            />
            <h3 style={{ marginTop: "15px" }}>{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
