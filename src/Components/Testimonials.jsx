const testimonials = [
    {
      name: "Surveer Singh",
      feedback: "Best dental care I have ever received! Highly recommend Dr. Guglani.",
    },
    {
      name: "Kritleen Kaur",
      feedback: "Friendly staff and pain-free treatment. A 5-star experience!",
    },
    {
      name: "Gurdip Kaur",
      feedback: "The clinic is clean, and the service is outstanding. Very professional.",
    },
  ];
  
  const Testimonials = () => {
    return (
      <div className="p-10 bg-gray-400 text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Patients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="italic">"{testimonial.feedback}"</p>
              <h3 className="mt-4 font-bold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  