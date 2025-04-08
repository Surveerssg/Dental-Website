import { useState } from "react";
import { FaCalendarAlt, FaUser, FaPhone, FaInfoCircle } from "react-icons/fa";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    contact: "",
    date: "",
    time: "",
    service: "",
    message: ""
  });
  
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const nextStep = () => setFormStep(formStep + 1);
  const prevStep = () => setFormStep(formStep - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const dentalServices = [
    "General Check-up",
    "Teeth Cleaning",
    "Root Canal",
    "Dental Implants",
    "Teeth Whitening",
    "Orthodontics/Braces",
    "Dental Crown",
    "Other"
  ];

  const resetForm = () => {
    setFormData({
      name: "",
      gender: "",
      contact: "",
      date: "",
      time: "",
      service: "",
      message: ""
    });
    setIsSubmitted(false);
    setFormStep(1);
  };

  if (isSubmitted) {
    return (
      <section id="appointment" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Appointment Request Received!</h2>
            <p className="text-gray-600 mb-6">
              Thank you, {formData.name}. We've received your appointment request for {formData.date} at {formData.time}. 
              Our staff will contact you at {formData.contact} to confirm your appointment.
            </p>
            <button 
              onClick={resetForm}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="appointment" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side - Image and Info */}
        <div className="md:w-2/5 bg-blue-600 text-white p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-6">Schedule Your Visit</h2>
            <p className="mb-8 text-blue-100">
              Take the first step towards a healthier smile. Our team of dental professionals is ready to provide you with exceptional care.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 rounded-full">
                  <FaCalendarAlt className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="font-medium">Available Hours</h3>
                  <p className="text-sm text-blue-100">Mon-Sat: 9:00 AM - 1:00 PM, 5:00 PM - 9:00 PM</p>
                  <p className="text-sm text-blue-100">Sunday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 rounded-full">
                  <FaPhone className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="font-medium">Contact Number</h3>
                  <p className="text-sm text-blue-100">+91 9810806678</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="h-2 w-full bg-white/20 rounded-full mb-2">
              <div 
                className="h-full bg-white rounded-full transition-all duration-300" 
                style={{ width: `${formStep * 50}%` }} 
              ></div>
            </div>
            <p className="text-sm text-blue-100">Step {formStep} of 2</p>
          </div>
        </div>
        
        {/* Right Side - Form */}
        <div className="md:w-3/5 p-8">
          <form onSubmit={handleSubmit}>
            {formStep === 1 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Personal Information</h3>
                
                {/* Patient Name */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Patient Name*</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-gray-400" />
                    </div>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                      placeholder="John Doe"
                      required 
                    />
                  </div>
                </div>
                
                {/* Gender Dropdown */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Gender*</label>
                  <select 
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                {/* Contact Number */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Contact Number*</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="text-gray-400" />
                    </div>
                    <input 
                      type="tel" 
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+91 98XXXXXXXX"
                      required
                    />
                  </div>
                </div>
                
                <div className="pt-6">
                  <button 
                    type="button" 
                    onClick={nextStep}
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}
            
            {formStep === 2 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Appointment Details</h3>
                
                {/* Service Selection */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Service Required*</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select service</option>
                    {dentalServices.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                
                {/* Date and Time Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Preferred Date*</label>
                    <input 
                      type="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Preferred Time*</label>
                    <select 
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                    </select>
                  </div>
                </div>
                
                {/* Additional Message */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Additional Information</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24"
                    placeholder="Any specific concerns or questions?"
                  ></textarea>
                </div>
                
                <div className="pt-4 flex items-center text-sm text-gray-500 mb-4">
                  <FaInfoCircle className="mr-2 text-blue-500" />
                  <p>Our team will contact you to confirm your appointment.</p>
                </div>
                
                <div className="flex space-x-4 pt-2">
                  <button 
                    type="button" 
                    onClick={prevStep}
                    className="w-1/3 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition duration-300"
                  >
                    Back
                  </button>
                  <button 
                    type="submit" 
                    className="w-2/3 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex justify-center items-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : "Book Appointment"}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;