import React from "react";
import { Phone, Mail, Instagram } from "lucide-react";
import akamlogogreen from "../images/Logo/akamlogogreen.png";

const Contact = () => {
  return (
    <div className="w-full overflow-hidden mb-8">
      {/* Heading */}
      <div className="text-center md:mt-5">
        <h1 className="text-5xl font-sans mb-2 pt-9">Contact Us</h1>
        <div className="w-full max-w-[80vw] mx-auto"></div>
      </div>

      <div className="flex flex-col md:flex-row w-full pt-10 md:mt-5">
        {/* Contact Info */}
        <div className="w-full md:w-1/2 flex justify-center p-4 bg-[#fbfbfb] md:px-10">
          <div>
            <div className="flex flex-col items-start">
              <img className="w-64" src={akamlogogreen} alt="Akam Logo" />
              <p className="pl-10 italic pt-3 text-xl text-[#929191]">
                Valancheri, Kumbidi
              </p>
            </div>

            {/* Contact Details with Icons */}
            <div className="flex flex-col space-y-3 pt-4 pl-10">
              {/* Phone */}
              <div className="flex items-center space-x-2">
                <Phone className="text-[#808080]" size={20} />
                <a
                  href="tel:+918714586247"
                  className="text-[#929191] hover:underline"
                >
                  +91 87145 86247
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2">
                <Mail className="text-[#808080]" size={20} />
                <a
                  href="mailto:info@akammindcare.com"
                  className="text-[#929191] hover:underline"
                >
                  info@akammindcare.com
                </a>
              </div>

              {/* Instagram */}
              <div className="flex items-center space-x-2">
                <Instagram className="text-[#808080]" size={20} />
                <a
                  href="https://www.instagram.com/akam_mindcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#929191] hover:underline"
                >
                  akam_mindcare
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col items-center w-full md:w-[42vw] p-6 bg-[#f4f4f4] md:px-10">
          <h2 className="text-2xl font-sans relative pb-5 mb-6">
            Connect Us
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-[34vw] mt-10 h-0.5 bg-[#dad8d8]"></span>
          </h2>

          <form className="w-full md:w-[44vw] mt-6 space-y-4 md:px-14">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 focus:outline-none bg-[#f3ebebee]"
            />

            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 p-3 focus:outline-none bg-[#f3ebebee]"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="flex-1 p-3 focus:outline-none bg-[#f3ebebee]"
              />
            </div>

            <textarea
              placeholder="Address"
              className="w-full p-3 h-24 focus:outline-none bg-[#f3ebebee]"
            ></textarea>

            <div className="flex justify-end">
              <button className="group bg-white text-yellow-500 border-2 border-yellow-500 px-6 py-2 hover:bg-opacity-70 hover:border-yellow-700 hover:text-yellow-700 relative transition-all duration-300 hover:px-8">
                Submit
                <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Google Map Section */}
      {/* <div className="mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.7277171261458!2d77.19214079999999!3d10.202752799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0783d7225ee999%3A0xee4a6403484ca6f5!2sMass%20Home%20stay!5e0!3m2!1sen!2sin!4v1739867613923!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full md:w-[99vw] md:h-[60vh] bg-[#f5f3f3] pb-10"
        ></iframe>
      </div> */}
    </div>
  );
};

export default Contact;
