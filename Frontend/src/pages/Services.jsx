import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";

const services = [
  { 
    title: "Dental Implants", 
    image: "implant.webp", 
    description: "Missing a tooth or multiple teeth? Dental implants are long-lasting, artificial tooth roots topped with natural-looking crowns. They restore chewing ability and prevent bone loss, giving you back both function and confidence." 
  },
  { 
    title: "Root Canal Treatment", 
    image: "root-canal.jpg", 
    description: "Experiencing severe tooth pain or sensitivity? A root canal treats deep decay or infection by cleaning the tooth from the inside and sealing it — saving your natural tooth and relieving pain." 
  },
  { 
    title: "Dental Fillings", 
    image: "dental-filling.webp", 
    description: "Have a cavity or hole in your tooth? Dental fillings are used to repair minor decay or cracks, restoring the shape and function of your tooth and stopping the damage from worsening." 
  },
  { 
    title: "Cosmetic Dentistry", 
    image: "cosmetic-dentistry.jpg", 
    description: "Unhappy with how your smile looks? Cosmetic dentistry offers solutions like teeth whitening, veneers, and reshaping to improve the appearance of stained, chipped, or uneven teeth." 
  },
  { 
    title: "Crowns and Bridges", 
    image: "crowns-and-bridges.jpg", 
    description: "Got a broken tooth or missing one? Crowns are protective caps for damaged teeth, while bridges fill the gap of missing teeth, restoring your smile and bite." 
  },
  { 
    title: "Orthodontics", 
    image: "orthodontics.jpg", 
    description: "Crooked teeth or bite problems? Orthodontic treatments like braces and aligners straighten teeth, improve your bite, and enhance overall dental health and appearance." 
  },
  { 
    title: "Gum (Periodontal) Disease Treatment", 
    image: "gum.jpeg", 
    description: "Bleeding gums, bad breath, or loose teeth? These are signs of gum disease. We offer deep cleaning and expert care to treat infection, reduce inflammation, and protect your teeth." 
  },
  { 
    title: "Tooth Extraction", 
    image: "tooth-extraction.webp", 
    description: "Tooth severely damaged, decayed, or causing crowding? Extraction is a safe and quick procedure to remove the problem tooth and prevent further oral health issues." 
  },
  { 
    title: "Dentures", 
    image: "dentures.png", 
    description: "Missing several or all teeth? Dentures are custom-made, removable replacements that restore your ability to eat, speak, and smile comfortably and naturally." 
  },
];


const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredServices = services.filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <Helmet>
        <title>Dental Services in Delhi | Dr. Guglani’s Multispeciality Dental Centre</title>
        <meta name="description" content="Explore a wide range of dental services in Delhi including implants, root canal, braces, and more at Dr. Guglani’s Multispeciality Dental Centre." />
        <meta name="keywords" content="Dental Services Delhi, Dental Implants Delhi, Root Canal Delhi, Braces Delhi, Best Dentist in Delhi" />
        {/* Open Graph */}
        <meta property="og:title" content="Dental Services in Delhi | Dr. Guglani’s Multispeciality Dental Centre" />
        <meta property="og:description" content="Explore a wide range of dental services in Delhi including implants, root canal, braces, and more at Dr. Guglani’s Multispeciality Dental Centre." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dentistguglani.com/services" />
        <meta property="og:image" content="/logo192.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dental Services in Delhi | Dr. Guglani’s Multispeciality Dental Centre" />
        <meta name="twitter:description" content="Explore a wide range of dental services in Delhi including implants, root canal, braces, and more at Dr. Guglani’s Multispeciality Dental Centre." />
        <meta name="twitter:image" content="/logo192.png" />
      </Helmet>
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-800 mb-3">Our Dental Services</h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive dental care with a focus on patient comfort and cutting-edge techniques.
              Schedule your appointment today.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg className="absolute right-3 top-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-700 text-xl">No services match your search. Please try different keywords.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
              {filteredServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer"
                  onClick={() => handleServiceClick(service)}
                >
                  <div className="relative overflow-hidden rounded-lg mb-5 h-52">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/70 opacity-0 hover:opacity-100 transition-opacity flex items-end justify-center">
                      <span className="text-white font-medium text-lg p-4">Learn More</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal for Service Details */}
        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-blue-800">{selectedService.title}</h3>
                  <button 
                    className="text-gray-500 hover:text-gray-700"
                    onClick={closeModal}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="mb-6">
                  <img 
                    src={selectedService.image} 
                    alt={selectedService.title} 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-600 mb-6">{selectedService.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">What to Expect</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Initial consultation to assess your needs</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Treatment planning with your doctor</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Comfortable procedure with minimal discomfort</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Follow-up care and maintenance instructions</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-between space-x-4 mt-8">
                  <button
                    onClick={() => {
                      navigate('/', { state: { scrollToAppointment: true } });
                    }}
                    className="px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium flex-1 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book Appointment
                  </button>
                  <button 
                    onClick={() => window.location.href = "/Contact"}
                    className="px-4 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors font-medium flex-1 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Services;