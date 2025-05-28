import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaTooth, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleBookAppointment = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToAppointment: true } });
    } else {
      setTimeout(() => {
        document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // else let Link handle navigation
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white shadow-md py-2" 
        : "bg-gradient-to-b from-black/50 to-transparent py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo & Title */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2" onClick={handleLogoClick}>
              <div className={`p-2 rounded-full ${isScrolled ? "bg-blue-600 text-white" : "bg-white text-blue-600"}`}>
                <FaTooth className="w-6 h-6" />
              </div>
              <h1 className={`text-xl font-bold hidden md:block ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}>
                Dr. Guglani's Dental Centre
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Services", "Gallery", "Contact", "FAQ"].map((item) => (
              <Link 
                key={item} 
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`font-medium relative transition-all ${
                  isActive(item === "Home" ? "/" : `/${item.toLowerCase()}`) 
                    ? `${isScrolled ? "text-blue-600" : "text-white font-bold"}`
                    : `${isScrolled ? "text-gray-600 hover:text-blue-600" : "text-white hover:text-blue-100"}`
                }`}
              >
                {item}
                {isActive(item === "Home" ? "/" : `/${item.toLowerCase()}`) && (
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 ${
                    isScrolled ? "bg-blue-600" : "bg-white"
                  }`}></span>
                )}
              </Link>
            ))}
          </div>

          {/* Appointment Button (Desktop) */}
          <div className="hidden md:block">
            <button
              onClick={handleBookAppointment}
              className={`px-5 py-2 rounded-full transition-colors ${
                isScrolled 
                  ? "bg-blue-600 text-white hover:bg-blue-700" 
                  : "bg-white text-blue-600 hover:bg-blue-50"
              }`}
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["Home", "About", "Services", "Gallery", "Contact", "FAQ"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item === "Home" ? "/" : `/${item.toLowerCase()}`)
                    ? "bg-blue-600 text-white"
                    : "text-gray-800 hover:bg-blue-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <button
              onClick={() => {
                handleBookAppointment();
                setIsMenuOpen(false);
              }}
              className="block w-full text-center mt-4 px-4 py-2 rounded-md text-white bg-blue-600 font-medium hover:bg-blue-700"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;