import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="p-4 bg-gray-50">
      {/* Accordion #1 */}
      <Accordion
        title="Who are you?"
        par1="I am William T. Johnson Jr a Front-End Developer with a practical knowledge and experience in building responsive and user-friendly web applications. I specialize in React, Tailwind CSS, and JavaScript, and I have a strong background in creating accessible designs, optimizing performance, or collaborating with cross-functional teams."
      />

      {/* Accordion #2 */}
      <Accordion
        title=" What services do you offer?"
        par1="I specialize in  web design, web development, UI/UX design, photography, content creation. For a detailed list, visit my Services section."
      />

      {/* Accordion #2 */}
      <Accordion
        title="Where are you located?"
        date1="December 28, 2024"
        par1="I am based in the West Cost of Africa to be precise Republic of Liberia, but I work with clients worldwide."
      />

      {/* Accordion #2 */}
      <Accordion
        title="What tools and technologies do you use?"
        par1="I use React, Tailwind CSS, Figma, Wordpress, and GitHub. My choice of tools depends on the project requirements."
      />
    </div>
  );
};

export default FAQ;
