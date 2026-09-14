import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<div>Riverside Home</div>} />
        <Route path="/facilities" element={<div>Facilities</div>} />
        <Route path="/donate" element={<div>Donate</div>} />
      </Routes>
    </>
  );
}

export default App;