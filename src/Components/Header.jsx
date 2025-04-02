import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center px-8">
      
      {/* Left Side - Logo & Title */}
      <div className="flex items-center space-x-3">
        {/* Logo that links to Home */}
        <Link to="/">
          <img src="/logo.png" alt="Clinic Logo" className="w-10 h-10" />
        </Link>

        <h1 className="text-2xl font-bold">
          Dr. Guglani’s Multispecialty Dental Centre
        </h1>
      </div>

      {/* Right Side - Navigation Links */}
      <div className="space-x-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/services" className="hover:underline">Services</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/gallery" className="hover:underline">Gallery</Link>
        <Link to="/faq" className="hover:underline">FAQs</Link>
      </div>
    </nav>
  );
};

export default Header;
