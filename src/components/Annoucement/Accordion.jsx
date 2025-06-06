import React, { useState } from "react";

const Accordion = ({ title, date1, par1, par2, par3 }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 border border-background-light-secondary dark:border-background-dark-secondary mb-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full items-center"
      >
        <span className="font-medium md:text-lg text-text-light-primary dark:text-text-dark-primary">{title}</span>
        <svg
          className={`fill-brand transition-transform duration-300 ease-out ${
            accordionOpen ? "rotate-180" : ""
          }`}
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 15.5l-6-6h12l-6 6z" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          accordionOpen ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="text-text-light-secondary dark:text-text-dark-secondary text-sm px-1">
          <div className="overflow-hidden font-semibold my-3">{date1}</div>
          <hr />
          <div className="overflow-hidden font-semibold mb-3">{par1}</div>
          <div className="overflow-hidden font-semibold mb-3">{par2}</div>
          <div className="overflow-hidden font-semibold text-right underline">
            {par3}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
