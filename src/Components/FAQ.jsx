import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Why should I go to the dentist regularly?",
    answer:
      'Regular dental visits prevent serious issues before they start, saving you time and money in the long run. Many problems, like cavities and gum disease, don’t show symptoms until they are severe.',
  },
  {
    question: "Why should I floss, isn't brushing enough?",
    answer:
      'Flossing removes plaque and bacteria from areas your toothbrush cannot reach, reducing the risk of cavities and gum disease.',
  },
  {
    question: "How can I get my kids to brush their teeth?",
    answer:
      'Make brushing fun! Use a reward system, play their favorite song, or let them pick their own toothbrush and toothpaste.',
  },
  {
    question: "How can I prevent cavities?",
    answer:
      'Brush twice daily with fluoride toothpaste, floss daily, limit sugary foods, and visit the dentist regularly for cleanings and check-ups.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">Frequently Asked Questions</h1>
      <p className="text-center text-gray-600 mb-8">Find answers to common questions about dental care and hygiene.</p>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <button
              className={`w-full p-5 flex justify-between items-center transition-all duration-300 text-lg font-medium ${openIndex === index ? "bg-blue-600 text-white" : "bg-white text-blue-800"}`}
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              {faq.question}
              {openIndex === index ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
            </button>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {openIndex === index && (
                <div className="p-5 bg-gray-50 text-gray-700">
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-lg"
        >
          Contact Us for More Info
        </a>
      </div>
    </div>
  );
};

export default FAQ;