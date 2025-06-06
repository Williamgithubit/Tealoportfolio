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
    { icon: FaGlobe, description: "Web Design" },
    { icon: MdOutlineDesignServices, description: "UI/UX Design" },
    { icon: MdLinkedCamera, description: "Photography" },
    // { icon: MdOutlineAppShortcut, description: "Mobile App" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section w-full h-full md:h-screen flex flex-col lg:flex-row p-6 lg:p-14 items-center mt-16 lg:mt-0 bg-black dark:bg-background-dark-primary relative" id="home">
        {/* Text Content */}
        <div className="w-full mt-8 lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <p className="mb-6 text-white dark:text-text-dark-primary">
            <span className="text-brand font-bold text-2xl">|</span> Hello, I AM WILLIAM T. JOHNSON JR...
          </p>
          <h1 className="text-3xl lg:text-5xl font-medium leading-tight text-white dark:text-text-dark-primary">
            BEST WEB <span className="text-brand">DEVELOPER</span> FOR YOU
          </h1>
          <p className="my-6 lg:my-10 text-sm lg:text-lg font-inter text-gray-300 dark:text-text-dark-secondary">
            I specialize in designing and developing services for customers of
            all sizes, focusing on creating stylish and modern websites, web
            services. Let's bring your vision to life with design and functionality that stands out.
          </p>
          <div>
            <a
              href="#"
              download={true}
              className="font-bold text-sm lg:text-lg rounded-xl py-3 px-11 bg-brand text-white hover:bg-brand/80 transition duration-200"
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
      <section className="w-full flex p-8 lg:p-14 text-center md:mt-[-6rem]">
        <div className="wrapper w-full flex flex-col lg:flex-row justify-center lg:justify-around gap-6">
          {services.map((box, index) => (
            <div
              key={index}
              className="service-box lg:w-[30%] p-6 bg-white/80 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-700 hover:border-brand shadow-lg hover:shadow-xl hover:shadow-brand/30 rounded-xl text-center hover:bg-gradient-to-br hover:from-brand hover:to-brand/90 hover:text-white transition-all duration-300 group flex flex-col items-center"
            >
              <div className="icon-container text-5xl text-brand/90 dark:text-brand/80 group-hover:text-white mb-4 transform group-hover:scale-110 transition-all duration-300">
                {React.createElement(box.icon)}
              </div>
              <p className="text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300 group-hover:text-white">
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
