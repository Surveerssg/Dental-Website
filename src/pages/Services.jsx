const services = [
  { 
    title: "Dental Implants", 
    image: "https://imgs.search.brave.com/4sLbJq1cF4qOHNAybljc7ncZU7PGoEJnsdhKj5i3KmY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/OTk5NjE0NC9waG90/by90b290aC1pbXBs/YW50LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1KZWhXWlNB/M2FFMkJ2VlVLRXRj/a1M4NXVnZGJrTmNT/djdJMl9FUEFuQ3E4/PQ", 
    description: "Restore your smile with permanent, natural-looking tooth replacements that function just like real teeth, providing durability, comfort, and a confident bite" 
  },
  { 
    title: "Root Canal Treatment", 
    image: "https://imgs.search.brave.com/nNe9CMMRhHjFHdD7veJHCNYyyzbMhGXGSP-MtYpbZm0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzUwLzYyLzM0/LzM2MF9GXzI1MDYy/MzQ3NF9LdkllUXY5/QWtNZ2NwQUtMRVpP/N0RRMGRYamROQlRq/TC5qcGc", 
    description: "A procedure to save and repair a severely decayed or infected tooth by removing the pulp, cleaning the canal, and sealing it to prevent further infection." 
  },
  { 
    title: "Dental Fillings", 
    image: "https://imgs.search.brave.com/dSwEuVBIeqqXksLXX1wH4a1iHWk_Qx0mnxtm6stVZcY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzA0LzQ1LzMy/LzM2MF9GXzMwNDQ1/MzI4OF9pOThLVk1n/akp3VnhmQ2ZtN2li/Q2VBb3JpbzhTbjJ0/TC5qcGc", 
    description: "A restorative treatment that fills cavities caused by tooth decay, preventing further damage and restoring the tooth’s function and structure." 
  },
  { 
    title: "Cosmetic Dentistry", 
    image: "https://imgs.search.brave.com/HS8ju1R-uYbbNpAh4sI-3_TdNMLACMjUx4ZjAHgLqBo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzE0LzA5LzA1/LzM2MF9GXzExNDA5/MDU5Nl9xWGRLU0xw/dHlYVktkblZEM0dI/MXZQT3pvZ2Z3OVNI/cS5qcGc", 
    description: "Brighten and perfect your smile with professional teeth whitening, custom veneers, and other cosmetic treatments designed to give you a radiant, confident look." 
  },
  { 
    title: "Crowns and Bridges", 
    image: "https://imgs.search.brave.com/F05BcGjmRHycdDWV_xEbkRFLZcx9CQmz5bMdWaGrwPw/rs:fit:860:0:0:0/g:ce/aHR0cDovLzJhMS43/OTMubXlmdHB1cGxv/YWQuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzA0L2Ny/b3ducy1hbmQtYnJp/ZGdlcy5qcGc", 
    description: "Custom-made restorations used to cover damaged teeth (crowns) or replace missing teeth by bridging the gap between adjacent teeth" 
  },
  { 
    title: "Orthodontics", 
    image: "https://imgs.search.brave.com/2EnxAMuausRfPenxlKvcOIYwuVQa5yHHpxIO6emTFX0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzQ4LzQ4LzY1/LzM2MF9GXzQ4NDg2/NTY5X1JNRFBLdElo/NGNWU2FaYXRpUUs0/SnNKWWxqZklENmZV/LmpwZw", 
    description:"Orthodontic treatments designed to straighten teeth, correct bite issues, and improve overall dental alignment for a healthier, more confident smile."
  },
  { 
    title: "Gum (Periodontal) Disease Treatment", 
    image: "http://smilebydesign.co/app/webroot/ckeditor/plugins/imageuploader/uploads/201442d.jpg", 
    description:"Protect your gums from infection with deep cleaning, scaling, and expert care for healthier teeth and a stronger smile."
  },
  { 
    title: "Tooth Extraction", 
    image: "https://imgs.search.brave.com/ODfcSsT8CaYD17klteCoLEa7itn3EaBILfmSzFMXAl4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIy/MTc5MDkzNy9waG90/by9leHRyYWN0ZWQt/dG9vdGguanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWlhMEVK/emlfbFNtWlp6Sjk1/MzFYT2tCcElTaUNR/a1FrNERHQS13bkZ1/R3c9", 
    description:"Safe and painless removal of damaged, decayed, or problematic teeth to maintain your overall oral health."
  },
  { 
    title: "Dentures", 
    image: "https://imgs.search.brave.com/qoLv5m0RlZqlthN2A7d8qud-0f-4pXfDSQkyNnBD8UM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVudGlzdG9mY2hh/cmxlc3Rvbi5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MTIvaW1wbGFudC1z/dXBwb3J0ZWQtZGVu/dHVyZXMtbW9kZWwt/Mi5qcGc", 
    description:"Replace multiple missing teeth with comfortable, removable dentures for a natural look and better oral function."
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-yellow-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 my-3">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
