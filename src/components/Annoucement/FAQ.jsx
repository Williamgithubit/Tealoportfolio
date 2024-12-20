import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="p-4 bg-gray-50">
      {/* Accordion #1 */}
      <Accordion
        title="Who are you?"
        par1="I am William T. Johnson Jr, a passionate Front-End Developer/Designer/Photographer] with expertise in React.js. I can create a splendid project to help businesses and individuals achieve their goals."
      />

      {/* Accordion #2 */}
      <Accordion
        title=" What services do you offer?"
        par1="I specialize in  web design, web development, UI/UX design, photography, content creation. For a detailed list, visit my Services section."
      />

      {/* Accordion #2 */}
      <Accordion
        title="Where are you located?"
        date1="October 25, 2024"
        par1="I am based in the West Cost of Africa to be precise Republic of Liberia, but I work with clients worldwide."
      />

      {/* Accordion #2 */}
      <Accordion
        title="What tools and technologies do you use?"
        par1="I use React, Tailwind CSS, Figma, Adobe Photoshop. My choice of tools depends on the project requirements."
      />
    </div>
  );
};

export default FAQ;
