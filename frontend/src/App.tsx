import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FacilitiesPage from "./pages/FacilitiesPage";
import DonationPage from "./pages/DonationPage";
import { supabase } from "./lib/supabase";
import FacilityDetailsPage from "./pages/FacilityDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  void supabase;

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/facilities" element={<FacilitiesPage />} />

        <Route path="/facilities/:id" element={<FacilityDetailsPage />} />

        <Route path="/donate" element={<DonationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;