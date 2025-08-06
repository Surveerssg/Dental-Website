import FAQ from "../Components/FAQ";
import { Helmet } from "react-helmet";

const FAQPage = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white p-10">
      <Helmet>
        <title>Dental FAQs | Best Dentist in Delhi | Dr. Guglani</title>
        <meta name="description" content="Find answers to common dental questions about oral hygiene, cavity prevention, flossing, and children's dental care at Dr. Guglani’s Multispeciality Dental Centre in Delhi." />
        <meta name="keywords" content="Dental FAQs, Dentist in Delhi, Best Dentist in Delhi, Dental Clinic Delhi, Dental Questions" />
        {/* Open Graph */}
        <meta property="og:title" content="Dental FAQs | Best Dentist in Delhi | Dr. Guglani" />
        <meta property="og:description" content="Find answers to common dental questions about oral hygiene, cavity prevention, flossing, and children's dental care at Dr. Guglani’s Multispeciality Dental Centre in Delhi." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dentistguglani.com/faq" />
        <meta property="og:image" content="/logo192.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dental FAQs | Best Dentist in Delhi | Dr. Guglani" />
        <meta name="twitter:description" content="Find answers to common dental questions about oral hygiene, cavity prevention, flossing, and children's dental care at Dr. Guglani’s Multispeciality Dental Centre in Delhi." />
        <meta name="twitter:image" content="/logo192.png" />
      </Helmet>
      <FAQ />
    </div>
  );
};

export default FAQPage;
