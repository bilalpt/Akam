import React from 'react'
import { motion } from 'framer-motion';
import couple from '../../Components/images/homeimg/couple.png';
import Groupimg from '../../Components/images/homeimg/Groupimg.png';
import single from '../../Components/images/homeimg/single.png';

const Cardarea = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/918714586247", "_blank");
  };

  return (
    <div className=''>
      <div className='bg-[#064C4C]  md:h-[98vh] md:w-[100vw] rounded-bl-full '>
            <div className="md:h-[98vh] ">
                <h1 className="text-[#c0f3f0] text-center pt-28 text-4xl md:text-5xl font-serif">Peace Begins Inside</h1>
                <h1 className="text-[#c0f3f0] text-center pt-2 md:pt-7 md:text-2xl">What kind of therapy are you looking for?</h1>

                <div className="flex justify-center gap-6 mt-10 flex-wrap">

                    {/* Left Card - Comes from Left */}

                    <motion.div 
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className=" bg-[#557e6b] p-6 rounded-lg shadow-lg w-80 text-center border-2 border-transparent hover:border-white transition duration-300"
                    >
                        <img src={couple} alt="Mental Health" className="w-40 mx-auto" />
                        <h2 className="text-xl font-semibold text-[#112417] mt-4">Family Counseling</h2>
                        <p className="mt-2 text-[#112417]">
                            Explore various therapy options that suit your needs and preferences.
                        </p>
                        <button 
                            onClick={openWhatsApp}
                            className="mt-4 px-4 py-2 bg-white text-red-700 hover:bg-red-600 hover:text-white rounded-lg">
                            Get Started
                        </button>
                    </motion.div>

                    {/* Center Card - No Animation */}
                    <div className=" bg-[#a3bf84] p-6 rounded-lg shadow-lg w-80 text-center border-2 border-transparent hover:border-white transition duration-300">
                        <img src={single} alt="Counseling" className="w-40 mx-auto" />
                        <h2 className="text-xl font-semibold text-[#383b39] mt-4">Individual Counseling</h2>
                        <p className="mt-2 text-[#383b39]">
                            Get one-on-one sessions tailored to your needs and goals.
                        </p>
                        <button 
                            onClick={openWhatsApp}
                            className="mt-4 px-4 py-2 bg-white text-purple-700 hover:bg-purple-600 hover:text-white rounded-lg">
                            Learn More
                        </button>
                    </div>

                    {/* Right Card - Comes from Right */}
                    <motion.div 
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className=" bg-[#A0C1B8] p-6 rounded-lg shadow-lg w-80 text-center border-2 border-transparent hover:border-white transition duration-300"
                    >
                        <img src={Groupimg} alt="Group Therapy" className="w-40 mx-auto" />
                        <h2 className="text-xl font-semibold text-[#383b39] mt-4">Remedial Therapy</h2>
                        <p className="mt-2 text-[#383b39]">
                        Be part of a nurturing community and embark on a journey of healing and growth together.
                        </p>
                        <button 
                            onClick={openWhatsApp}
                            className="mt-4 px-4 py-2 bg-white text-green-700 hover:bg-green-600 hover:text-white rounded-lg">
                            Join Now
                        </button>
                    </motion.div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Cardarea;
