import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { FaExternalLinkAlt } from "react-icons/fa"; // Import the icon
import photogr1 from "../../public/assets/ph1.jpg";
import photogr2 from "../../public/assets/ph2.jpg";
import mobile1 from "../../public/assets/mb1.jpg";
import mobile2 from "../../public/assets/mb2.jpg";
import ui1 from "../../public/assets/ui1.jpg";
import ui2 from "../../public/assets/ui2.jpg";
import web1 from "../../public/assets/web1.jpg";
import web2 from "../../public/assets/web2.jpg";

const categories = {
  All: [
    {
      image: photogr1,
      title: "Photography",
      description: "Project for photography",
      link: "#",
      category: "Photography",
    },
    {
      image: web1,
      title: "Web Design",
      description: "Project for Web Design",
      link: "#",
      category: "Web Design",
    },
    {
      image: ui1,
      title: "UI/UX Design",
      description: "Project for UI/UX Design",
      link: "#",
      category: "UI/UX Design",
    },
    {
      image: mobile1,
      title: "Mobile Apps",
      description: "Project for Mobile Apps",
      link: "#",
      category: "Mobile Apps",
    },
  ],
  Photography: [
    {
      image: photogr1,
      title: "Photography",
      description: "Project for photography",
      link: "#",
      category: "Photography",
    },
    {
      image: photogr2,
      title: "Photography",
      description: "Project for photography",
      link: "#",
      category: "Photography",
    },
  ],
  "Web Design": [
    {
      image: web1,
      title: "Web Design",
      description: "Project for Web Design",
      link: "#",
      category: "Web Design",
    },
    {
      image: web2,
      title: "Web Design",
      description: "Project for Web Design",
      link: "#",
      category: "Web Design",
    },
  ],
  "UI/UX Design": [
    {
      image: ui1,
      title: "UI/UX Design",
      description: "Project for UI/UX Design",
      link: "#",
      category: "UI/UX Design",
    },
    {
      image: ui2,
      title: "UI/UX Design",
      description: "Project for UI/UX Design",
      link: "#",
      category: "UI/UX Design",
    },
  ],
  "Mobile Apps": [
    {
      image: mobile1,
      title: "Mobile Apps",
      description: "Project for Mobile Apps",
      link: "#",
      category: "Mobile Apps",
    },
    {
      image: mobile2,
      title: "Mobile Apps",
      description: "Project for Mobile Apps",
      link: "#",
      category: "Mobile Apps",
    },
  ],
};

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8" id="portfolio">
      <div className="heading py-8 text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">My Portfolio</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm sm:text-base rounded-lg font-medium transition ${
                activeCategory === category
                  ? "bg-[#fab702] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-[#efd58d]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <Splide
        options={{
          perPage: 3,
          gap: "1rem",
          autoplay: true,
          speed: 2000,
          rewind: true,
          rewindByDrag: true,
          pauseOnHover: true,
          breakpoints: {
            1280: { perPage: 3 },
            1024: { perPage: 2 },
            768: { perPage: 1 },
          },
        }}
        aria-label="Portfolio Slider"
        className="pb-8"
      >
        {categories[activeCategory].map((card, index) => (
          <SplideSlide key={index}>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover sm:h-80 lg:h-96"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-white text-lg sm:text-xl font-bold mb-2">{card.title}</h2>
                <p className="text-white mb-4 text-sm sm:text-base">{card.description}</p>
                <a
                  href={card.link}
                  className="text-white flex items-center gap-2 font-medium hover:text-[#fab702]"
                >
                  <FaExternalLinkAlt className="h-5 w-5" />
                  Visit
                </a>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}

export default Portfolio;
