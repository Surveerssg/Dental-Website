import { useState } from "react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    contact: "",
    date: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment request submitted!");
  };

  return (
    <section id="appointment" className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-8">
        
        {/* Left Side - Image */}
        <div className="md:w-1/2 hidden md:block">
          <img 
            src="appointmentForm.png"
            alt="Doctor"
            className="w-full rounded-lg"
          />
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 w-full px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            <em>What are you waiting for? Leave an appointment today!</em>
          </h2>
          
          <form onSubmit={handleSubmit}>
            {/* Patient Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Patient Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg" 
                required 
              />
            </div>

            {/* Gender Dropdown */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Gender</label>
              <select 
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Contact Number */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Contact Number</label>
              <input 
                type="tel" 
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>

            {/* Appointment Date */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Appointment Date</label>
              <input 
                type="date" 
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
