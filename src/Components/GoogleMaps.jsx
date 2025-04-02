const GoogleMaps = () => {
  return (
    <div className="text-center p-10">
      <h2 className="text-3xl font-bold mb-4">Find Us Here</h2>
      <iframe
        className="w-full max-w-3xl h-80 mx-auto border rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.9360581802775!2d77.15413417520475!3d28.69155928139833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02366aaaaaab%3A0xc0a2190d8ccac8e3!2sDr.%20Guglani's%20Multispeciality%20Dental%20Centre!5e0!3m2!1sen!2sin!4v1743239343313!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMaps;
