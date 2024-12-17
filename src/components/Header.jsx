import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import icon from '../../public/assets/arrow dropdown.svg';


const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setIsDropdownOpen(isDropdownOpen === menu ? null : menu);
  };

  return (
    <Fragment>
      <header className="bg-black backdrop-blur-xl text-white flex items-center w-full pl-0 pr-0 fixed top-0 left-0 h-auto md:h-20 z-10 shadow-md">
        <div className="w-full px-4 py-4 flex justify-between items-center">
          {/* Logo/Brand - Add your logo here */}
          <div className="text-2xl font-bold">
            <Link to="/" >Tealo</Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl"
          >
            <GiHamburgerMenu className="text-white"/>
          </button>

          {/* Navigation */}
          <nav
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:block absolute md:relative top-full left-0 w-full md:w-auto bg-black shadow-md md:shadow-none`}
          >
            <ul className="flex flex-col md:flex-row gap-2 md:gap-8 p-4 md:p-0">
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
                  <span className="ml-2"><img src={icon} className="mt-1" alt="dropdown" /></span>
                </button>
                {isDropdownOpen === "about" && (
                  <ul className="md:absolute relative left-0 mt-2 w-full md:w-48 bg-white z-20 border rounded shadow-lg">
                    <li className="p-2 hover:bg-gray-100">
                      <Link to="/about/team" className="block w-full">Our Team</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-100">
                      <Link to="/about/mission" className="block w-full">Our Mission</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative">
                <button
                  className="text-[18px] w-full md:w-auto flex items-center justify-between hover:text-[#fab702] hover:underline py-2 md:py-0"
                >
                  Our Services
                  {/* <span className="ml-2"><img src={icon} className="mt-1" alt="dropdown" /></span> */}
                </button>
              </li>

              {/* Contact Button */}
              <li>
                <Link
                  to="/"
                  className="text-[18px] block py-2 md:py-0 hover:text-[#fab702] hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
