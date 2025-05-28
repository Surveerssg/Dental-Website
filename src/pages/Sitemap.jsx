import { Link } from "react-router-dom";

const Sitemap = () => (
  <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md mt-10 mb-10">
    <h1 className="text-3xl font-bold mb-6 text-blue-800">Sitemap</h1>
    <ul className="list-disc ml-6 space-y-2 text-lg">
      <li><Link to="/" className="text-blue-600 underline">Home</Link></li>
      <li><Link to="/about" className="text-blue-600 underline">About Us</Link></li>
      <li><Link to="/services" className="text-blue-600 underline">Services</Link></li>
      <li><Link to="/gallery" className="text-blue-600 underline">Gallery</Link></li>
      <li><Link to="/faq" className="text-blue-600 underline">FAQs</Link></li>
      <li><Link to="/contact" className="text-blue-600 underline">Contact</Link></li>
      <li><Link to="/privacy-policy" className="text-blue-600 underline">Privacy Policy</Link></li>
      <li><Link to="/terms" className="text-blue-600 underline">Terms of Service</Link></li>
      <li><Link to="/sitemap" className="text-blue-600 underline">Sitemap</Link></li>
    </ul>
  </div>
);

export default Sitemap; 