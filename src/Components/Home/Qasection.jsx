import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Expert Professionals",
    answer:
      "Our team consists of highly qualified and experienced professionals dedicated to providing the best care and support.",
  },
  {
    question: "Proven Approaches",
    answer:
      "We use evidence-based methods to ensure effective and reliable mental health support.",
  },
  {
    question: "Comprehensive Services",
    answer:
      "From therapy and counseling to workshops and support groups, we offer a wide range of services tailored to individual needs.",
  },
  {
    question: "Community Impact",
    answer:
      "We actively engage with communities to promote mental health awareness and support initiatives for well-being.",
  },
  {
    question: "Personalized Care",
    answer:
      "Each individual receives customized support to meet their specific needs and goals.",
  },
  {
    question: "Holistic Healing",
    answer:
      "We focus on a holistic approach, addressing mental, emotional, and physical well-being.",
  },
  {
    question: "Child-Centric Programs",
    answer:
      "Specialized programs designed to support children’s mental health and emotional development.",
  },
  {
    question: "Affordable Solutions",
    answer:
      "We provide cost-effective mental health services, ensuring accessibility for everyone.",
  },
  {
    question: "Confidentiality Assured",
    answer:
      "Your privacy is our priority. We maintain strict confidentiality in all our interactions.",
  },
];

const Qasection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#064C4C] flex items-center justify-center p-6 pb-14">
      <div className="max-w-5xl w-full mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-white mb-8 pt-3">
          Why Choose Us?
        </h1>

        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="w-full flex justify-between items-center py-4 text-left font-semibold text-white"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "▼" : "▶"}</span>
            </button>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              className="overflow-hidden text-gray-200"
            >
              <p className="py-2">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qasection;