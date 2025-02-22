import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <div className="fixed right-5 bottom-5 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918714586247"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Call Button */}
      <a
        href="tel:+918714586247"
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
      >
        <FaPhoneAlt size={24} />
      </a>
    </div>
  );
};

export default FloatingButtons;
