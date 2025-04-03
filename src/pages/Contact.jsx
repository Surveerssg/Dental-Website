import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact <span className="text-blue-600">Us</span></h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're here to answer any questions you may have about our dental services.
            Feel free to get in touch with us.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Left Column: Map */}
            <div className="bg-gray-200 h-full min-h-64">
              {/* Map placeholder - in real implementation, you'd use Google Maps or a similar service */}
              <div className="h-full w-full relative">
                <div className="absolute inset-0 bg-blue-600/20 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <FaMapMarkerAlt className="text-red-500 text-3xl mx-auto mb-2" />
                    <p className="font-medium">C-4/11, Lawrence Road, Keshav Puram, Delhi-110035</p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm mt-2 inline-block"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Column: Contact Details */}
            <div className="p-8 border-r border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-full text-blue-600">
                    <FaPhone />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Phone</h4>
                    <p className="text-gray-600">+91 9810806678</p>
                    <a href="tel:+919810806678" className="text-blue-600 text-sm hover:underline">Call now</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-full text-blue-600">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Email</h4>
                    <p className="text-gray-600">drssguglanidentist@gmail.com</p>
                    <p className="text-gray-600">drssguglani@gmail.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-full text-blue-600">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Address</h4>
                    <p className="text-gray-600">
                      C-4/11, Lawrence Road, <br />
                      Keshav Puram, <br />
                      Delhi-110035
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="font-semibold text-gray-700 mb-3">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition">
                    <FaFacebook />
                  </a>
                  <a href="#" className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition">
                    <FaInstagram />
                  </a>
                  <a href="#" className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Hours */}
            <div className="p-8 bg-blue-600 text-white">
              <h3 className="text-xl font-bold mb-6">Opening Hours</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-semibold">Monday - Saturday</h4>
                    <p className="text-blue-100">9:00 AM - 1:00 PM</p>
                    <p className="text-blue-100">5:00 PM - 9:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sunday</h4>
                    <p className="text-blue-100">9:00 AM - 1:00 PM</p>
                    <p className="text-blue-100">Closed in Evening</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-blue-500">
                <h4 className="font-semibold mb-3">Emergency Care</h4>
                <p className="text-blue-100 mb-4">
                  For dental emergencies outside regular hours, please call our emergency line.
                </p>
                <a 
                  href="tel:+919810806678" 
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
                >
                  Emergency Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;