import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import akamlogogreen from "../images/Logo/akamlogogreen.png";
import akamlogowhite from "../images/Logo/akamlogowhite.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-[#064C4C]"
      }`}
    >
      <div className="container mx-auto flex items-center md:px-24 py-2">
        {/* Logo */}
        <div className="flex-1 flex items-center">
          <img
            src={isScrolled ? akamlogogreen : akamlogowhite}
            alt="Incubenation Logo"
            className="h-20 w-60 object-cover transition-all duration-300"
          />
        </div>

        {/* Desktop Menu */}
        <div className="flex-1 hidden md:flex justify-center space-x-6">
          <a href="#home" className={`${isScrolled ? "text-black" : "text-white"} transition-all duration-300`}>
            Home
          </a>
          <a href="#about" className={`${isScrolled ? "text-black" : "text-white"} transition-all duration-300`}>
            About
          </a>
          <a href="#services" className={`${isScrolled ? "text-black" : "text-white"} transition-all duration-300`}>
            Services
          </a>
          <a href="#contact" className={`${isScrolled ? "text-black" : "text-white"} transition-all duration-300`}>
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex-1 flex justify-end">
          <button onClick={toggleMenu} className={`transition-all duration-300 ${isScrolled ? "text-black" : "text-white"}`}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden ${isScrolled ? "bg-white" : "bg-[#064C4C]"}`}>
          <div className="flex flex-col space-y-2 p-4">
            <a onClick={() => setIsOpen(false)} href="#home" className={`${isScrolled ? "text-black" : "text-white"} transition-all duration-300`}>
              Home
            </a>
            <a onClick={() => setIsOpen(false)} href="#about" className={`${isScrolled ? "text-black" : "text-white"} transition-all duration-300`}>
              About
            </a>
            <a onClick={() => setIsOpen(false)} href="#services" className={`${isScrolled ? "text-black" : "text-white"} transition-all duration-300`}>
              Services
            </a>
            <a onClick={() => setIsOpen(false)} href="#contact" className={`${isScrolled ? "text-black" : "text-white"} transition-all duration-300`}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
