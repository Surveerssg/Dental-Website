const AboutCard = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Image */}
          <div className="md:w-2/5 relative">
            <div className="h-full">
              <img 
                src="Dr. Guglani.jpg" 
                alt="Dr. Sarabpreet Singh Guglani"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-10"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-blue-600 py-2 px-4">
              <h3 className="text-white font-medium text-lg">Dr. Sarabpreet Singh Guglani</h3>
              <p className="text-blue-100 text-sm">Specialist Dental Surgeon</p>
            </div>
          </div>
  
          {/* Right Side - Text */}
          <div className="md:w-3/5 p-8">
            <div className="flex items-center mb-4">
              <div className="w-1 h-8 bg-blue-600 mr-3"></div>
              <h2 className="text-3xl font-bold text-gray-800">About Dr. Guglani</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
  With 32 years of dental excellence, Dr. Sarabpreet Singh Guglani is a distinguished Specialist Dental Surgeon known for his commitment to patient-centered care. A graduate of D.A.V. (C) Dental College, Yamuna Nagar (BDS 1988–1992), he has been a trusted name in Delhi’s dental community since establishing his practice in 1993. 

  Dr. Guglani has held numerous leadership roles within the Indian Dental Association, including President of the North West Delhi branch in 2017, Advisor to IDA North-West Delhi, and Chairman-CDH for IDA Delhi State. His involvement continues as a representative to the IDA Delhi State branch and a Central Council member of IDA Head Office.

  Beyond dentistry, he is actively engaged in social service through the Lions Club, where he has served as Deputy Cabinet Secretary. He also plays key roles in local community organizations, including the Residents Welfare Association and Gurdwara C-3 in Keshav Puram.

  Dr. Guglani’s dedication to clinical excellence and community welfare has made him a respected leader and trusted healthcare provider in North Delhi.
</p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-blue-50 rounded-lg px-4 py-2">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span className="text-sm text-gray-700">30+ Years Experience</span>
              </div>
              <div className="flex items-center bg-blue-50 rounded-lg px-4 py-2">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span className="text-sm text-gray-700">Clinically Accredited</span>
              </div>
              <div className="flex items-center bg-blue-50 rounded-lg px-4 py-2">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span className="text-sm text-gray-700">Patient-Centered Care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const YouTubeCard = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-sm uppercase tracking-wider text-blue-600 font-semibold mb-2">Learn More</h3>
          <h2 className="text-3xl font-bold text-gray-800">Watch Our Introduction</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          {/* YouTube Video Embed */}
          <div className="w-full relative" style={{ paddingBottom: "56.25%" }}>
            <iframe 
              className="absolute top-0 left-0 w-full h-full" 
              src="https://www.youtube.com/embed/wWsRaJAISAE" 
              title="Dr. Guglani Introduction Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
  
          {/* YouTube Channel Link */}
          <div className="p-6 bg-white">
            <p className="text-gray-700 mb-6">
              Watch more informative videos about common dental conditions, preventive care, and dental health advice on our YouTube channel.
            </p>
            <div className="flex justify-end">
              <a 
                href="https://www.youtube.com/channel/UCuz4HJ6RH2wsoIBiuBlm2Vw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              >
                <span>Visit YouTube Channel</span>
                {/* Simple external link icon using inline SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutCard, YouTubeCard };