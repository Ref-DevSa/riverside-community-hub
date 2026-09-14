import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import FacilitiesPage from "./pages/FacilitiesPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/facilities" element={<FacilitiesPage />} />

        <Route path="/donate" element={<div>Donate</div>} />
      </Routes>
    </>
  );
}

export default App;