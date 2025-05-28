import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const Hero = () => {
  const scrollToAppointment = () => {
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative">
      {/* Hero Image Carousel */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade,Pagination]}
          effect="fade"
          autoplay={{ delay: 5000 }}
          loop={true}
          pagination={{ clickable: true }}
          className="h-full"
        >
          {/* Slide 1 */}
          <SwiperSlide>
  {/* Background Image */}
  <div className="absolute inset-0 bg-[url('/hero-section.webp')] bg-cover bg-center"></div>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-blue-900 opacity-40"></div>

  {/* Text Content */}
  <div className="absolute inset-0 flex items-center justify-center px-4">
    <div className="text-white text-center drop-shadow max-w-xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Personalized Dental Solutions
      </h2>
      <p className="text-lg">
        Trusted care for every stage of life — from routine checkups to advanced treatments.
      </p>
    </div>
  </div>
</SwiperSlide>


          {/* Slide 2 - Dummy */}
          <SwiperSlide>
  {/* Background Image */}
  <div className="absolute inset-0 bg-[url('/hero-dummy.webp')] bg-cover bg-center"></div>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-blue-900 opacity-40"></div>

  {/* Custom text inside the slide */}
  <div className="absolute inset-0 flex items-center justify-center px-4">
    <div className="text-white text-center drop-shadow max-w-xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Your Comfort Is Our Priority
      </h2>
      <p className="text-lg">
        Experience dental care designed to keep you smiling — gentle, advanced, and always caring.
      </p>
    </div>
  </div>
</SwiperSlide>

        </Swiper>

        {/* Main Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              Quality Dental Care <br />
              <span className="text-blue-300">for Every Smile!</span>
            </h1>
            <p className="text-white text-lg md:text-xl mb-8 max-w-xl mx-auto drop-shadow">
              Professional dental services with a gentle touch for patients of all ages
            </p>
            <button
              onClick={scrollToAppointment}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Book Your Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-8 lg:py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-blue-50 rounded-xl p-6 text-center shadow-md transition-all duration-300 hover:border-2 hover:border-teal-500">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Same-Day Appointments</h3>
              <p className="text-gray-600">Emergency care when you need it most</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-blue-50 rounded-xl p-6 text-center shadow-md transition-all duration-300 hover:border-2 hover:border-teal-500">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Modern Technology</h3>
              <p className="text-gray-600">State-of-the-art equipment for precise care</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-blue-50 rounded-xl p-6 text-center shadow-md transition-all duration-300 hover:border-2 hover:border-teal-500">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Comfortable Experience</h3>
              <p className="text-gray-600">Gentle care in a relaxing environment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
