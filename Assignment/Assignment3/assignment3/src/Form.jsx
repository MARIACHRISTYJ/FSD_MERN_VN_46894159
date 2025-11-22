import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const [city, setCity] = useState("");
  const [details, setDetails] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/cards", { state: { city, details } });
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f0f4ff",
      fontFamily: "Arial"
    }}>
      <form 
        onSubmit={handleSubmit}
        style={{
          width: "350px",
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
          Travel to Explore
        </h2>

        <label style={{ fontWeight: "bold" }}>City</label>
        <input
          type="text"
          value={city}
          required
          onChange={(e) => setCity(e.target.value)}
          style={{
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            width: "100%"
          }}
        />

        <label style={{ fontWeight: "bold" }}>Details</label>
        <textarea
          value={details}
          required
          onChange={(e) => setDetails(e.target.value)}
          style={{
            padding: "10px",
            height: "90px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            width: "100%"
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "12px",
            background: "#0066ff",
            color: "white",
            fontWeight: "bold",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Explore
        </button>
      </form>
    </div>
  );
}

export default Form;
