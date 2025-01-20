import React from "react";
import icon1 from "../../public/Icons/photo.gif";
import icon2 from "../../public/Icons/worldwide.gif";
import icon3 from "../../public/Icons/crayons.gif";
import icon4 from "../../public/Icons/responsive.gif";

const Services = () => {
  const cards = [
    {
      icons: icon1,
      title: "Photography",
      description:
        "Tell your product's story to engage users and boost conversation",
    },
    {
      icons: icon2,
      title: "Web Design",
      description:
        "Tell your product's story to engage users and boost conversation",
    },
    {
      icons: icon3,
      title: "UI/UX Design",
      description:
        "Tell your product's story to engage users and boost conversation",
    },
    // {
    //   icons: icon4,
    //   title: "Mobile App",
    //   description:
    //     "Tell your product's story to engage users and boost conversation",
    // },
  ];

  return (
    <div>
      <section className="mt-20 bg-gray-100 p-6 sm:p-10">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-[3rem] font-bold text-center">
          Awesome Services
        </h1>

        {/* Cards */}
        <article className="w-full mt-8 flex flex-wrap justify-center gap-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] md:w-[30%] lg:w-[25%] bg-white p-4 shadow-lg rounded-lg hover:scale-105 hover:duration-300"
            >
              {/* Icon */}
              <img
                src={card.icons}
                alt="icon"
                className="m-auto w-20 h-20 sm:w-24 sm:h-24"
              />

              {/* Title */}
              <div className="bg-gradient-to-r from-[#fab702] to-[#f4e9cc] w-[70%] text-center m-auto font-bold rounded-md my-4 p-2 text-sm sm:text-base">
                {card.title}
              </div>

              {/* Description */}
              <p className="text-center text-sm sm:text-base text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </article>
      </section>
    </div>
  );
};

export default Services;
