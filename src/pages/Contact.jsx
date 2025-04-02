import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-16 bg-gray-400">
      <div className="max-w-4xl mx-auto bg-white shadow-md p-8 rounded-lg">
        {/* Header */}
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-4">Contact Us</h2>
        <p className="text-center text-gray-700 mb-8">Visit our clinic or call us for more information</p>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Address & Phone */}
          <div className="space-y-4">
            {/* Address */}
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-red-500 text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Address:</h3>
                <p className="text-gray-600">
                  C-4/11, Lawrence Road, <br />
                  Keshav Puram, <br />
                  Delhi-110035
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3">
              <FaPhone className="text-green-500 text-xl" />
              <div>
                <h3 className="font-semibold text-lg">Phone:</h3>
                <p className="text-gray-600">+91 9810806678</p>
              </div>
            </div>
          </div>

          {/* Right Side: Email & Opening Hours */}
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-start space-x-3">
              <FaEnvelope className="text-blue-500 text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Email:</h3>
                <p className="text-gray-600">drssguglanidentist@gmail.com</p>
                <p className="text-gray-600">drssguglani@gmail.com</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start space-x-3">
              <FaClock className="text-yellow-500 text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Opening Hours:</h3>
                <p className="text-gray-600">
                  Mon-Sat: 9:00 AM - 1:00 PM and 5:00 PM - 9:00 PM <br />
                  Sunday: 9:00 AM - 1:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
