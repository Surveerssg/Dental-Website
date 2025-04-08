import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import AppointmentForm from "./Components/AppointmentForm";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import GoogleMaps from "./Components/GoogleMaps";
import Testimonials from "./Components/Testimonials";
import Gallery from "./pages/Gallery";
import FAQPage from "./pages/FAQPage";
import ScrollHandler from "./Components/ScrollHandler"; 

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ScrollHandler />
              <Hero />
              <Home />
              <Testimonials />
              <AppointmentForm />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<><Contact /><GoogleMaps /></>} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
