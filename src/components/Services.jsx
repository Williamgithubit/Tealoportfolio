import React from "react";
import icon1 from "../../public/Icons/photo.gif";
import icon2 from "../../public/Icons/worldwide.gif";
import icon3 from "../../public/Icons/crayons.gif";
import icon4 from "../../public/Icons/responsive.gif";

const Services = () => {
  const cards = [
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
    {
      icons: icon1,
      title: "Photography",
      description:
        "Tell your product's story to engage users and boost conversation",
    }
    // {
    //   icons: icon4,
    //   title: "Mobile App",
    //   description:
    //     "Tell your product's story to engage users and boost conversation",
    // },
  ];

  return (
    <div>
      <section className="mt-20 bg-gray-100/30 dark:bg-gray-900/30 p-6 sm:p-10">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-[3rem] font-bold text-center text-gray-800 dark:text-white">
          Awesome Services
        </h1>

        {/* Cards */}
        <article className="w-full mt-8 flex flex-wrap justify-center gap-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] md:w-[30%] lg:w-[25%] bg-white/90 dark:bg-gray-900/80 p-6 shadow-md hover:shadow-xl hover:shadow-brand/20 rounded-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-brand/50 group"
            >
              <img
                src={card.icons}
                alt={card.title}
                className="w-20 h-20 mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300 opacity-90 group-hover:opacity-100"
              />
              <h2 className="text-lg font-semibold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-brand group-hover:to-brand/80 transition-all duration-300">
                {card.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200">
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
