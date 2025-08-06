import { Helmet } from "react-helmet";
import { AboutCard, YouTubeCard } from "../Components/AboutCard";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Dr. Guglani | Best Dentist in Delhi</title>
        <meta name="description" content="Learn about Dr. Guglani, one of the best dentists in Delhi, and his commitment to providing top-quality dental care in North West Delhi." />
        <meta name="keywords" content="About Dr. Guglani, Best Dentist in Delhi, Dental Clinic Delhi, Experienced Dentist Delhi" />
        {/* Open Graph */}
        <meta property="og:title" content="About Dr. Guglani | Best Dentist in Delhi" />
        <meta property="og:description" content="Learn about Dr. Guglani, one of the best dentists in Delhi, and his commitment to providing top-quality dental care in North West Delhi." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dentistguglani.com/about" />
        <meta property="og:image" content="/logo192.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Dr. Guglani | Best Dentist in Delhi" />
        <meta name="twitter:description" content="Learn about Dr. Guglani, one of the best dentists in Delhi, and his commitment to providing top-quality dental care in North West Delhi." />
        <meta name="twitter:image" content="/logo192.png" />
      </Helmet>
      <AboutCard />
      <YouTubeCard />
    </>
  );
};

export default About;
