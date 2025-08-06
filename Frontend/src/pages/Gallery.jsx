const images = [ 
  "/gallery-8.jpg",
  "/gallery-2.jpg",
  "/gallery-3.jpg",
  "/gallery-4.jpg",
  "/gallery-5.jpg",
  "/gallery-10.jpg",
  "/gallery-7.jpg",
  "/gallery-1.jpg",
  "/gallery-9.jpg",
  "/gallery-6.jpg"
];

const Gallery = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white p-10 text-center">
      <h2 className="text-3xl font-bold mb-6">Our Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className={`w-full bg-white p-2 rounded-lg shadow-lg transition-all duration-300 hover:border-4 hover:border-teal-500 ${
              img.includes("gallery-5.jpg") ? "flex items-center justify-center h-auto" : ""
            } ${index === 1 ? "h-full" : ""}`}
            style={index === 1 ? { display: 'flex', alignItems: 'stretch', justifyContent: 'center' } : {}}
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className={`w-full ${index === 1 ? "h-full object-cover" : "h-auto object-contain"} ${img.includes("gallery-5.jpg") ? "max-h-full w-auto" : ""}`}
              style={index === 1 ? { minHeight: '250px', maxHeight: '100%', height: '100%' } : {}}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
