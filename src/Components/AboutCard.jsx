const AboutCard = () => {
    return (
      <section className="py-16 bg-gray-400">
        <div className="max-w-4xl mx-auto bg-yellow-100 shadow-md rounded-lg p-8 flex flex-col md:flex-row items-center">
          
          {/* Left Side - Image */}
          <div className="md:w-1/3 w-full mb-6 md:mb-0">
            <img 
              src="Dr. Guglani.jpg" 
              alt="Dr. Sarabpreet Singh Guglani"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
  
          {/* Right Side - Text */}
          <div className="md:w-2/3 w-full md:pl-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Dr. Sarabpreet Singh Guglani</h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc sit amet suscipit varius, purus libero tincidunt nulla, non sollicitudin lacus lorem ac libero. Fusce condimentum scelerisque felis, vel faucibus nunc tincidunt ac.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  const YouTubeCard = () => {
    return (
      <section className="py-16 bg-pink-100">
        <div className="max-w-4xl mx-auto bg-yellow-100 shadow-md rounded-lg p-8">
          
          {/* YouTube Video Embed */}
          <h3 className="text-3xl font-bold text-blue-600 mb-4 text-center">Intro Video</h3>
          <div className="w-full flex justify-center">
            <iframe 
              className="w-full max-w-3xl h-64 rounded-lg shadow-lg" 
              src="https://www.youtube.com/embed/wWsRaJAISAE" 
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
  
          {/* YouTube Channel Link */}
          <div className="mt-6 text-center">
            <a 
              href="https://www.youtube.com/channel/UCuz4HJ6RH2wsoIBiuBlm2Vw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
            >
              Visit Our YouTube Channel
            </a>
          </div>
  
        </div>
      </section>
    );
  };
  
  export { AboutCard, YouTubeCard };
  