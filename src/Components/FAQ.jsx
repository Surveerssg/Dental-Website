import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Why should I go to the dentist regularly?",
    answer:
      'Many people do not see a dentist on a regular basis. They only go when they have a problem. This is known as "crisis treatment" versus "preventive treatment." While these patients may feel they are saving money, it often ends up costing much more in dollars and time. This is because many dental problems do not have symptoms until they reach the advanced stages of the disease process. An example is tooth decay. It is typical to hear, "Nothing hurts... I don\'t have any problems." \n\nTooth decay often does not hurt until it gets close to the nerve of the tooth. It is not uncommon to see a patient with a huge cavity who has never felt a thing. The dentist can usually detect a cavity 3-4 years before it develops any symptoms. This early detection can help you prevent root canal treatment.',
  },
  {
    question: "Why should I floss, isn't brushing enough?",
    answer:
      "Flossing reduces the number of bacteria in your mouth. There are millions of these microscopic creatures feeding on food particles left on your teeth. These bacteria live in plaque which can be removed by flossing. Brushing your teeth gets rid of some of the bacteria in your mouth. Flossing gets rid of the bacteria the toothbrush can't get to. That's the bacteria hiding in the tiny spaces between your teeth. If you do not floss, you allow plaque to remain between your teeth. Eventually, it hardens into tartar. Plaque can be removed by brushing. Only the dentist can remove tartar.",
  },
  {
    question: "How can I get my kids to brush their teeth?",
    answer:
      "Make it fun! If you are enthusiastic about brushing your teeth, your children will also be enthusiastic. Children want to do the things their parents do. If your children see you brushing your teeth and displaying good dental habits, they will follow. Ask the dentist for other creative ways to get children to brush their teeth.\n\nGetting your children to brush starts with taking them to the dentist at an early age. All children should be seen by their first birthday or 6 months after the eruption of the first tooth.",
  },
  {
    question: "How can I prevent cavities?",
    answer:
      "Always spend two to three minutes brushing your teeth. It takes that long to get rid of the bacteria that destroy tooth enamel. Do not brush too hard. It takes very little pressure to remove bacteria and plaque. Floss at least once a day. Flossing is the only way to get bacteria from between your teeth.\n\nWatch the sugar you eat. There is sugar in candy, fruits, crackers, and chips. These are the foods that the bacteria in your mouth like best. Be mindful of foods like raisins and peanut butter that stick to your teeth. They can provide a constant supply for the bacteria eating into your teeth. Try to minimize the times during the day when sweet items are eaten and brush your teeth afterward.\n\nIf you cannot brush after a meal, rinse your mouth with water - which can help to remove food from your teeth. Chewing sugarless gum after a meal can also help. Chewing stimulates the flow of your saliva which acts as a natural plaque-fighting substance. And do not forget your regular dental visits. Good dental habits will go a long way toward a no-cavity visit.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 sm:p-4 bg-yellow-100">
      <h1 className="text-4xl font-bold text-center mb-6">General Dentistry FAQs</h1>
      <p className="text-center text-gray-600 mb-6">
        Have a question that is not answered below? Feel free to give us a call and ask!
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg shadow-lg">
            <button
              className="w-full p-4 flex justify-between items-center bg-blue-500 text-white font-medium text-lg sm:text-base"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {openIndex === index && (
                <div className="p-4 bg-white text-gray-700">
                  {faq.answer.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="mb-3">{paragraph}</p>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>

      {/* ✅ Contact Us Button Here */}
      <div className="text-center mt-8">
        <a
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Contact Us for More Info
        </a>
      </div>
    </div>
  );
};

export default FAQ;
