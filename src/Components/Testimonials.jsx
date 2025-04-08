import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const testimonials = [
  {
    name: "Amit Bansal",
    feedback: "My family has been getting treatment from Dr Guglani since 15-20 years. He is an expert in his profession, never had a bad experience. Highly recommended!",
  },
  {
    name: "Kuljit Kaur",
    feedback: "I got 6 upper and 6 lower ceramic teeth fixed from Dr. Sarabpreet Singh Guglani in 2019. They are perfectly matching other teeth and working very fine till now. Now I am planning further treatment from the same Dental Centre. Highly recommended.",
  },
  {
    name: "Kanwal Dhingra",
    feedback: "I got my teeth extracted from Dr. Guglani’s Multispeciality Dental Centre. It was totally painless experience. Dr. Guglani is very experienced and capable Dental Surgeon. He is the best!",
  },
  {
    name: "Rajiv Kohli",
    feedback: "Good dental services at reasonable prices. He resolves your dental issues in very less sittings. Some other dentists take more sittings in resolving similar issues. I'm his old patient. I'm very much satisfied. I highly recommend him.",
  },
  {
    name: "Venus Katiyal",
    feedback: "I have been to Dr S.S Guglani for Root Canal Treatment. It was a painless RCT in one seating. He completed the whole treatment with utmost hygiene and was very careful regarding the contamination. The chair and clinic is clean and well maintained. I recommend Dr. Guglani's Multispecialty Dental Centre, best choice for any dental treatment. I am also planning to revisit the doctor for regular cleaning.",
  },
  {
    name: "Vimal Suri",
    feedback: "I am getting the dental treatment from Dr Guglani from last 30 years when Dr Guglani opened the new clinic. He is my family dentist. I am highly satisfied from the Dental Treatment done at his clinic.",
  },
  {
    name: "Amrit Kaur",
    feedback: "Nice clinic, well qualified and experienced doctor and the best dental treatment in Delhi.",
  },
  {
    name: "Tanya Paswan",
    feedback: "I got the Root Canal Treatment done followed by tooth colored crown from Dr. Guglani's Multispeciality Dental Centre. I am totally satisfied with the painless procedure done by Dr. S. S. Guglani. I am thankful to the Doctor and recommend this clinic for all types of Dental Treatments.",
  },
  {
    name: "Sahaj Kaur Kalra",
    feedback: "Amazing doctor , really friendly and good overall experience. Very professional and dedicated to his work, Thank You for the great service.",
  },
];

const Testimonials = () => {
  return (
    <div className="p-10 bg-gray-400 text-center">
      <h2 className="text-3xl font-bold mb-6">What Our Patients Say</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:border-2 hover:border-black h-full">
              <p className="italic">"{testimonial.feedback}"</p>
              <h3 className="mt-4 font-bold">{testimonial.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="mt-6 text-lg">
        For more testimonials,{" "}
        <a
          href="https://www.google.com/maps/place/Dr.+Guglani's+Multispeciality+Dental+Centre/@28.691555,77.156709,16z/data=!4m18!1m9!3m8!1s0x390d02366aaaaaab:0xc0a2190d8ccac8e3!2sDr.+Guglani's+Multispeciality+Dental+Centre!8m2!3d28.6915546!4d77.1567091!9m1!1b1!16s%2Fg%2F1td3pw8d!3m7!1s0x390d02366aaaaaab:0xc0a2190d8ccac8e3!8m2!3d28.6915546!4d77.1567091!9m1!1b1!16s%2Fg%2F1td3pw8d?hl=en&entry=ttu&g_ep=EgoyMDI1MDQwNi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800 underline hover:text-teal-600"
        >
          visit us on Google Maps
        </a>
        .
      </p>
    </div>
  );
};

export default Testimonials;
