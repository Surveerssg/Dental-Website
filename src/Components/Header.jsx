import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">Dr. Guglani’s Multispecialty Dental Centre</h1>
      <div className="space-x-4">
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
