import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import { MdLinkedCamera } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdOutlineAppShortcut } from "react-icons/md";
import image from "../../public/assets/3.jpg";

function Hero() {
  // Services Data
  const services = [
    { icon: MdLinkedCamera, description: "Photography" },
    { icon: FaGlobe, description: "Web Design" },
    { icon: MdOutlineDesignServices, description: "UI/UX Design" },
    // { icon: MdOutlineAppShortcut, description: "Mobile App" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section w-full h-full md:h-screen flex flex-col lg:flex-row p-6 lg:p-14 items-center mt-16 lg:mt-0" id="home">
        {/* Text Content */}
        <div className="w-full mt-8 text-white lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <p class="mb-6">
            <span className="text-[#fab702] font-bold text-2xl">|</span> Hello, I AM WILLIAM T. JOHNSON JR...
          </p>
          <h1 className="text-3xl lg:text-5xl font-medium leading-tight">
            BEST WEB <span className="text-[#fab702]">DEVELOPER</span> FOR YOU
          </h1>
          <p className="my-6 lg:my-10 text-sm lg:text-lg font-inter">
            I specialize in designing and developing services for customers of
            all sizes, focusing on creating stylish and modern websites, web
            services, and online stores.
          </p>
          <div>
            <a
              href="/pdf/Resume.pdf"
              download={true}
              className="font-bold text-sm lg:text-lg rounded-xl py-3 px-11 bg-[#fab702] hover:bg-[#f4cc5f88] hover:text-white transition duration-200"
            >
              Download CV &rarr;
            </a>
          </div>
        </div>
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src={image} alt="image" className="w-3/4 lg:w-[60%]" />
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section w-full flex p-8 lg:p-14 text-center md:mt-[-6rem]">
        <div className="wrapper w-full flex flex-col lg:flex-row justify-center lg:justify-around ">
          {services.map((box, index) => (
            <div
              key={index}
              className="service-box lg:w-[30%] p-6 bg-white border-b-4 border-gray-400 shadow-lg rounded-lg text-center hover:bg-[#fab702]  hover:text-white transition duration-200 group flex flex-col items-center hover:duration-500"
            >
              <div className="icon-container text-5xl text-[#fab702] group-hover:text-white mb-4">
                {React.createElement(box.icon)}
              </div>
              <p className="text-sm lg:text-base group-hover:text-white">
                {box.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Hero;
