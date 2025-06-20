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
import ScrollToTop from "./Components/ScrollToTop";
import Privacy from "./pages/Privacy";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";
import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import MainLayout from './Components/MainLayout';
import ProtectedAdminRoute from './Components/ProtectedAdminRoute';
import AppointmentsList from './pages/Admin/AppointmentsList';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
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
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Route>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route element={<ProtectedAdminRoute />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />}>
            <Route index element={<h1 className="text-3xl font-bold mb-8 text-gray-800">Welcome to the Admin Dashboard!</h1>} />
            <Route path="appointments" element={<AppointmentsList />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
