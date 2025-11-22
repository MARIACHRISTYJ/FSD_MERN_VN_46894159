import { useLocation } from "react-router-dom";

function Details() {
  const { state } = useLocation();

  if (!state) return <h2>No details found</h2>;

  return (
    <div style={{ padding: 30,maxWidth: "700px",
        margin: "auto",
        fontFamily: "Arial" }}>
      <h1>{state.title}</h1>
      <img src={state.image} width="350" style={{ borderRadius: "12px", marginTop: "20px" }} alt="" />
      <p style={{ marginTop: 20, fontSize: "18px", lineHeight: "1.6" }}>{state.description}</p>
    </div>
  );
}

export default Details;
