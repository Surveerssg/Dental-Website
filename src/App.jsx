import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import AppointmentForm from "./components/AppointmentForm";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import GoogleMaps from "./Components/GoogleMaps";
import Testimonials from "./Components/Testimonials";
import Gallery from "./pages/Gallery";
import FAQPage from "./pages/FAQPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* Home Page with Hero, Testimonials, and AppointmentForm */}
        <Route path="/" element={<><Hero /><Home /><Testimonials /><AppointmentForm /></>} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Services Page */}
        <Route path="/services" element={<Services />} />

        {/* Contact Page with Google Maps */}
        <Route path="/contact" element={<><Contact /><GoogleMaps /></>} />

        {/* Gallery Page */}
        <Route path="/gallery" element={<Gallery />} />

        {/* FAQs Page */}
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
      <Footer />
    </>
  );
};


export default App;
