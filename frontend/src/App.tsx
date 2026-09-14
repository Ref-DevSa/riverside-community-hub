import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Riverside Home</div>} />
      <Route path="/facilities" element={<div>Facilities</div>} />
      <Route path="/donate" element={<div>Donate</div>} />
    </Routes>
  );
}

export default App;