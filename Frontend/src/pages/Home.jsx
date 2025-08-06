import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Best Dentist in Delhi | Dr. Guglani’s Multispeciality Dental Centre</title>
        <meta name="description" content="Looking for the best dentist in Delhi? Dr. Guglani’s clinic serves Shalimar Bagh, Ashok Vihar, Keshav Puram, and more. Book your appointment today!" />
        <meta name="keywords" content="Best Dentist in Delhi, Dentist near Shalimar Bagh, Dentist near Ashok Vihar, Dentist near Keshav Puram, Dentist in North West Delhi, Dental Clinic Delhi" />
        {/* Open Graph */}
        <meta property="og:title" content="Best Dentist in Delhi | Dr. Guglani’s Multispeciality Dental Centre" />
        <meta property="og:description" content="Looking for the best dentist in Delhi? Dr. Guglani’s clinic serves Shalimar Bagh, Ashok Vihar, Keshav Puram, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dentistguglani.com/" />
        <meta property="og:image" content="/logo192.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Dentist in Delhi | Dr. Guglani’s Multispeciality Dental Centre" />
        <meta name="twitter:description" content="Looking for the best dentist in Delhi? Dr. Guglani’s clinic serves Shalimar Bagh, Ashok Vihar, Keshav Puram, and more." />
        <meta name="twitter:image" content="/logo192.png" />
        {/* LocalBusiness Schema */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Dentist",
            "name": "Dr. Guglani’s Multispeciality Dental Centre",
            "image": "https://www.dentistguglani.com/logo192.png",
            "@id": "https://www.dentistguglani.com/",
            "url": "https://www.dentistguglani.com/",
            "telephone": "+91 9810806678",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "C-4/11, Lawrence Road, Keshav Puram",
              "addressLocality": "Delhi",
              "postalCode": "110035",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 28.6846,
              "longitude": 77.1621
            },
            "openingHoursSpecification": [{
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "09:00",
              "closes": "21:00"
            }]
          }
        `}</script>
      </Helmet>
      <h1 className="text-3xl font-bold text-blue-500">Welcome to Dr. Guglani’s Multispecialty Dental Centre</h1>
    </>
  );
};

export default Home;
  