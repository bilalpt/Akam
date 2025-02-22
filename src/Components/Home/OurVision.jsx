import React from 'react';
import vision from '../../Components/images/aboutimg/vision.png';
import { motion } from "framer-motion";


const OurVision = () => {
  return (
    <div className='bg-[#064C4C] h-auto flex flex-col md:flex-row items-center md:items-start py-10 px-6 md:px-32 pb-14'>
      {/* Image Section */}
      <div className='w-full md:ml-14 md:w-[70vh] h-auto flex flex-col items-center md:items-start'>
        <motion.img
          src={vision}
          className='h-40 md:pl-14 md:h-56 w-auto'
          alt="Vision"
          initial={{ scale: 0.5, opacity: 0 }} // Start small and transparent
          whileInView={{ scale: 1, opacity: 1 }} // Animate on scroll
          viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the image is in view
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
        />
        <h1 className='text-2xl md:text-4xl text-center md:text-left font-bold font-serif text-[#e0e5e7] mt-6 md:pl-10'>
        Healing with Care and Purpose</h1>
      </div>

      {/* Text Section */}
      <div className='w-full md:w-[38vw] mt-10 md:mt-5 md:ml-36'>
        <h1 className='text-2xl md:text-4xl font-serif text-[#e0e5e7] text-center md:text-left'>
          Our Vision
        </h1>
        <p className='pt-3 md:pt-5 text-[#e0e5e7] text-center md:text-left'>
          To be a trusted provider of mental care,
          helping individuals find serenity,
          improve their well-being, and live a life
          full of peace, balance, and joy.        </p>
        <hr className='mt-6 md:mt-10 border-[#e0e5e7]' />
        <h1 className='text-2xl md:text-4xl font-serif mt-6 md:mt-10 text-[#e0e5e7] text-center md:text-left'>
          Our Mission
        </h1>
        <p className='pt-3 md:pt-5 text-[#e0e5e7] text-center md:text-left'>
        o deliver compassionate, evidencebased mental health care that 
empowers individuals to overcome 
challenges, foster resilience, and thrive.        </p>
      </div>
    </div>
  );
};

export default OurVision;
