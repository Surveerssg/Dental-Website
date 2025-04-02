const Hero = () => {
  const scrollToAppointment = () => {
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section>
      {/* Background Image */}
      <div
        className="h-[80vh] bg-[url('https://images.pexels.com/photos/6627537/pexels-photo-6627537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] 
        bg-cover bg-center"
      ></div>

      {/* Hero Text */}
      <div className="flex flex-col items-center text-center px-6 py-12 lg:py-20">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Your Smile, Our Passion
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl">
          Providing top-notch dental care to help you achieve a healthy and
          confident smile.
        </p>

        {/* Button with Smooth Scroll */}
        <button
          onClick={scrollToAppointment}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Book an Appointment
        </button>
      </div>
    </section>
  );
};

export default Hero;
