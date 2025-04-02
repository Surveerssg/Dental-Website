const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center p-6 mt-0">
      <p>© 2025 Dr. Guglani’s Multispecialty Dental Centre. All rights reserved.</p>
      <div className="mt-2">
        <a href="/about" className="mx-2 hover:underline">About</a>
        <a href="/services" className="mx-2 hover:underline">Services</a>
        <a href="/contact" className="mx-2 hover:underline">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
