import FAQ from "../components/FAQ";
import { Helmet } from "react-helmet";

const FAQPage = () => {
  return (
    <div className="p-10 bg-gray-400">
      <Helmet>
        {/* <title>General Dentistry FAQs | Dr. Guglani</title> */}
        <meta name="description" content="Find answers to common dental questions about oral hygiene, cavity prevention, flossing, and children's dental care." />
      </Helmet>
      <FAQ />
    </div>
  );
};

export default FAQPage;
