import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaClipboardList, FaUserMd, FaChild, FaAngry, FaSpa, FaUsers, FaSchool, FaCogs } from "react-icons/fa";

const cardData = [
  { 
    title: "Mental Health Therapies", 
    icon: <FaBrain />, 
    description: "Individual and group therapy for anxiety, depression, and stress"
  },
  { 
    title: "Psychological Assessments", 
    icon: <FaClipboardList />, 
    description: "IQ Tests, Aptitude Tests, Personality Assessments"
  },
  { 
    title: "Counseling Services", 
    icon: <FaUserMd />, 
    description: "Family Counseling, Career Counseling, Couples Counseling"
  },
  { 
    title: "Behavioral Therapy for Children", 
    icon: <FaChild />, 
    description: "Support for ADHD, autism, and emotional regulation."
  },
  { 
    title: "Stress and Anger Management", 
    icon: <FaAngry />, 
    description: "Effective strategies to manage emotions."
  },
  { 
    title: "Mindfulness and Relaxation Training", 
    icon: <FaSpa />, 
    description: "Techniques to enhance focus and mental clarity."
  },
  { 
    title: "Parenting Support Programs", 
    icon: <FaUsers />, 
    description: "Guidance to help parents navigate challenges."
  },
  { 
    title: "School and Workplace Interventions", 
    icon: <FaSchool />, 
    description: "Mental health workshops and productivity programs."
  },
  { 
    title: "Remedial Therapy", 
    icon: <FaCogs />, 
    description: "Support for learning disabilities and difficulties."
  },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.2 },
  }),
};

const Services = () => {
  return (
    <div className="p-6 overflow-hidden mb-14">
      {/* Heading */}
      <div className="text-center mb-16 mt-12">
        <h1 className="text-3xl font-bold text-gray-800 uppercase">Services</h1>
      </div>

      {/* Cards Grid */}
      <motion.div className="grid grid-cols-1 md:grid-cols-3 md:mx-60 gap-6">
        {cardData.map((item, index) => (
          <motion.div
            key={index}
            className="max-w-xs w-full p-6 shadow-lg transition-all duration-300 rounded-xl relative bg-gradient-to-b bg-[#e67070] mx-auto"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
            whileTap={{ y: -10 }}
            style={{ willChange: "transform" }}
          >
            {/* Animated Icon */}
            <motion.div
              className="absolute top-4 left-4 w-12 h-12 bg-white text-[#e67070] flex items-center justify-center rounded-full text-2xl shadow-md"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.icon}
            </motion.div>

            {/* Card Content */}
            <div className="mt-14 space-y-4 text-left">
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="text-white text-md">{item.description}</p>
            </div>

            {/* Button */}
            <div className="mt-4">
              <button className="text-white text-md font-medium cursor-pointer">
                Get started &gt;
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
