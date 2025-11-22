import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Form";
import Card from "./Card";
import Details from "./Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/card" element={<Card />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}
cv
export default App;

