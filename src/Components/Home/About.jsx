import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import about from "../images/aboutimg/about.png";
import about1 from "../images/aboutimg/about1.png";


const About = () => {
    // Detect when the About section comes into view
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div className="bg-[#ffffff] md:h-[90vh] w-full ">
            <div
                ref={ref}
                className="min-h-screen  md:flex justify-center items-center mx-4 pt-14 md:pt-0 "
            >
                {/* About Section (Slides from Top) */}
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)"
                    }}
                    className="bg-[#e67070] h-80 md:w-[45vw] rounded-4xl shadow-lg transition-all duration-300 "
                >
                    <h1 className="text-4xl pt-2 md:pt-10 pl-5 font-bold font-mono text-[#c0f3f0]">About Us</h1>
                    <p className="text-xl px-5 pt-8 font-sans font-thin text-[#c0f3f0]">
                        Akam Mind Care is a trusted provider of mental health services,
                        committed to helping individuals find peace within, improve their
                        well-being, and lead a life of balance and joy. Our compassionate
                        approach combines evidence-based techniques with personalized care
                        to ensure lasting results.
                    </p>
                </motion.div>




                {/* Image Section (Slides from Bottom) */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className=" mx-8 md:mx-0 md:ml-20"
                >
                    <img src={about1} alt="About Us" className="object-cover  md: mt-28 md:mt-0  mb-0 md:mb-24 md:h-[70vh]" />
                </motion.div>
            </div>
        </div>
    );
};

export default About;
