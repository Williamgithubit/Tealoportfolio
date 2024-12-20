import React, { Fragment, useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitter,
  FaTiktok,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      setIsMobileMenuOpen(false); // Close the mobile menu on scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close the mobile menu
    }
  };

  return (
    <Fragment>
      {/* Top Header with Social Links */}
      <header className="hidden md:flex md:justify-end w-full h-12 bg-gray-900 text-white items-center px-4">
        <div className="flex items-center gap-4 md:mr-5">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookSquare className="text-xl hover:text-blue-500 transition-colors duration-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagramSquare className="text-xl hover:text-red-500 transition-colors duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="text-xl hover:text-blue-400 transition-colors duration-300" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok className="text-xl hover:text-black transition-colors duration-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-xl hover:text-blue-400 transition-colors duration-300" />
          </a>
        </div>
      </header>

      {/* Main Header */}
      <header
        className={`bg-black top-0 text-white flex items-center w-full fixed left-0 h-auto md:h-20 z-30 shadow-md transition-all duration-300 ${
          isScrolled ? "top-0" : "md:top-12"
        }`}
      >
        <div className="w-full px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/">Tealo</Link>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl transition-all duration-300 z-30"
          >
            {isMobileMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </button>

          {/* Navigation Menu */}
          <nav
            className={`${
              isMobileMenuOpen ? "block min-h-screen" : "hidden"
            } md:block absolute md:relative top-full left-0 w-full md:w-auto bg-black shadow-md md:shadow-none z-20`}
          >
            <ul className="flex flex-col md:flex-row gap-4 p-4 md:p-0">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-[18px] block py-2 hover:text-[#fab702] hover:underline transition-all duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-[18px] block py-2 hover:text-[#fab702] hover:underline transition-all duration-300"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-[18px] block py-2 hover:text-[#fab702] hover:underline transition-all duration-300"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-[18px] block py-2 px-4 rounded-full bg-[#fab702] hover:bg-[#f4cc5f88] hover:text-white transition duration-200 w-full md:w-28 text-center"
                >
                  Contact
                </button>
              </li>
            </ul>

            {/* Social Links for Mobile View */}
            <div className="flex justify-center gap-4 mt-6 md:hidden">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookSquare className="text-xl hover:text-blue-500 transition-colors duration-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagramSquare className="text-xl hover:text-red-500 transition-colors duration-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="text-xl hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <FaTiktok className="text-xl hover:text-black transition-colors duration-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="text-xl hover:text-blue-400 transition-colors duration-300" />
              </a>
            </div>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
