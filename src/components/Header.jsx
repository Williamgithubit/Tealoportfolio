import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebookSquare, FaInstagramSquare, FaTwitter, FaTiktok } from "react-icons/fa";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = (menu) => {
    setIsDropdownOpen(isDropdownOpen === menu ? null : menu);
  };

  // Scroll handler to adjust the header position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
  
      {/* Top Header with Social Links */}
      <header className="hidden md:flex w-full h-12 bg-gray-800 text-white items-center px-4">
        <div className="flex items-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookSquare className="text-xl hover:text-blue-500" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagramSquare className="text-xl hover:text-pink-500" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="text-xl hover:text-blue-400" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok className="text-xl hover:text-black" />
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
            className="md:hidden text-2xl"
          >
            <GiHamburgerMenu className="text-white" />
          </button>

          {/* Navigation */}
          <nav
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:block absolute md:relative top-full left-0 w-full md:w-auto bg-black shadow-md md:shadow-none`}
          >
            <ul className="flex flex-col md:flex-row gap-2 md:gap-8 p-4 md:p-0 md:mr-2">
              <li>
                <Link
                  to="/"
                  className="text-[18px] block py-2 md:py-0 hover:text-[#fab702] hover:underline"
                >
                  Home
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("about")}
                  className="text-[18px] w-full md:w-auto flex items-center justify-between hover:text-[#fab702] hover:underline py-2 md:py-0"
                >
                  About Me
                </button>
              </li>
              <li className="relative">
                <button
                  className="text-[18px] w-full md:w-auto flex items-center justify-between hover:text-[#fab702] hover:underline py-2 md:py-0"
                >
                  Our Services
                </button>
              </li>

              {/* Contact Button */}
              <li>
                <Link
                  to="/"
                  className="text-[18px] block py-2 md:py-0 hover:text-[#fab702] hover:underline"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-[18px] block py-2 md:py-0 px-4 rounded-full bg-[#fab702] hover:bg-[#f4cc5f88] hover:text-white transition duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Social Links for Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="flex justify-center gap-4 py-4 border-t border-gray-700">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebookSquare className="text-xl hover:text-blue-500" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagramSquare className="text-xl hover:text-pink-500" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter className="text-xl hover:text-blue-400" />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <FaTiktok className="text-xl hover:text-black" />
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
