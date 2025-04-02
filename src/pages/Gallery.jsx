const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
  ];
  
  const Gallery = () => {
    return (
      <div className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Gallery ${index + 1}`} className="w-full rounded-lg shadow-lg" />
          ))}
        </div>
      </div>
    );
  };
  
  export default Gallery;
  