import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebookSquare, FaInstagramSquare, FaTwitter, FaTiktok } from "react-icons/fa";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = (menu) => {
    setIsDropdownOpen(isDropdownOpen === menu ? null : menu);
  };

  // Scroll handler to adjust the header position and close the mobile menu
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
        </div>
      </header>

      {/* Main Header */}
      <header
        className={`bg-black top-0 text-white flex items-center w-full pl-0 pr-0 fixed left-0 h-auto md:h-20 z-10 shadow-md transition-all duration-300 ${
          isScrolled ? "top-0" : "md:top-12"
        }`}
      >
        <div className="w-full px-4 py-4 flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="text-2xl font-bold">
            <Link to="/">Tealo</Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl transition-all duration-300"
          >
            {isMobileMenuOpen ? (
              <AiOutlineClose className="text-white transition-all duration-300" />
            ) : (
              <GiHamburgerMenu className="text-white transition-all duration-300" />
            )}
          </button>

          {/* Navigation */}
          <nav
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:block absolute md:relative top-full left-0 w-full md:w-auto bg-black shadow-md md:shadow-none transition-all duration-300`}
          >
            <ul className="flex flex-col md:flex-row gap-2 md:gap-8 p-4 md:p-0 md:mr-2">
              <li>
                <Link
                  to="/"
                  className="text-[18px] block py-2 md:py-0 hover:text-[#fab702] hover:underline transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("about")}
                  className="text-[18px] w-full md:w-auto flex items-center justify-between hover:text-[#fab702] hover:underline py-2 md:py-0 transition-all duration-300"
                >
                  About Me
                </button>
                {isDropdownOpen === "about" && (
                  <ul className="absolute bg-white shadow-md mt-2 py-2 w-40 transition-all duration-300">
                    <li className="px-4 py-2 hover:bg-gray-200 transition-all duration-300">
                      <Link to="/about/history">History</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 transition-all duration-300">
                      <Link to="/about/team">Team</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative">
                <button
                  className="text-[18px] w-full md:w-auto flex items-center justify-between hover:text-[#fab702] hover:underline py-2 md:py-0 transition-all duration-300"
                >
                  Our Services
                </button>
              </li>

              {/* Contact Button */}
              <li>
                <Link
                  to="/"
                  className="text-[18px] block py-2 md:py-0 hover:text-[#fab702] hover:underline transition-all duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-[18px] block py-2 md:py-0 px-4 rounded-full bg-[#fab702] hover:bg-[#f4cc5f88] hover:text-white transition duration-200 w-28 text-center"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Social Links for Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="flex justify-center gap-4 py-4 border-t border-gray-700">
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
              </div>
            )}
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
