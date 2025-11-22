import React from "react";

function CardItem({ image, title, description }) {
  return (
    <div
      style={{
        width: "250px",
        background: "#fff",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        cursor: "pointer"
      }}
    >
      <img src={image} alt={title} style={{ width: "100%", height: "160px", objectFit: "cover" }} />

      <div style={{ padding: "10px" }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CardItem;
