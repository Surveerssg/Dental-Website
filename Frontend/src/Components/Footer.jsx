import {
  FaFacebook, FaInstagram, FaTwitter, FaLinkedin,
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate(); 

  const scrollToAppointment = () => {
    navigate("/", { state: { scrollToAppointment: true } });
  };

  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Guglani's Multispecialty Dental Centre</h3>
            <p className="text-gray-400 mb-4">
              Providing quality dental care with the latest technology and a gentle touch since 1993.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.facebook.com/guglanidentist" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/dentist_guglani/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://x.com/dentistguglani" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.linkedin.com/in/dr-sarabpreet-singh-guglani-6a406229/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="https://wa.me/919810806678?text=Hello" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "General Dentistry",
                "Cosmetic Dentistry",
                "Dental Implants",
                "Orthodontics",
                "Periodontics",
                "Pediatric Dentistry"
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services"
                    className="text-gray-400 hover:text-white transition-colors inline-block py-1"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Gallery", path: "/gallery" },
                { name: "FAQs", path: "/faq" },
                { name: "Book Appointment", path: "#appointment" }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
  to={link.path.startsWith("#") ? "/" + link.path : link.path}
  onClick={() => {
    if (link.path.startsWith("#")) {
      setTimeout(() => {
        document.getElementById(link.path.substring(1))?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }}
  className="text-gray-400 hover:text-white transition-colors inline-block py-1"
>
  {link.name}
</Link>

                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-500 mt-1 mr-3" />
                <span className="text-gray-400">
                  C-4/11, Lawrence Road, Keshav Puram, Delhi-110035
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-blue-500 mr-3" />
                <span className="text-gray-400">+91 9810806678</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-500 mr-3" />
                <span className="text-gray-400">drssguglanidentist@gmail.com</span>
              </li>
            </ul>
            
            <div className="mt-6">
            <button
  onClick={scrollToAppointment}
  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors inline-block"
>
  Book Appointment
</button>


            </div>
          </div>
        </div>
        
        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {currentYear} Dr. Guglani's Multispecialty Dental Centre. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
