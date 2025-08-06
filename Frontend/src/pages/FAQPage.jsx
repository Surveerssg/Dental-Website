import FAQ from "../Components/FAQ";
import { Helmet } from "react-helmet";

const FAQPage = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white p-10">
      <Helmet>
        {/* <title>General Dentistry FAQs | Dr. Guglani</title> */}
        <meta name="description" content="Find answers to common dental questions about oral hygiene, cavity prevention, flossing, and children's dental care." />
      </Helmet>
      <FAQ />
    </div>
  );
};

export default FAQPage;
