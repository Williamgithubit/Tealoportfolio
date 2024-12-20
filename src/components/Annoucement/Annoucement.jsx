import React from "react";
import FAQ from './FAQ';
import image from "../../../public/assets/faq.png";

function Annoucement() {
  return (
      <section className="w-full mt-20 px-8">
        <div className="heading lg:p-4 px-14 py-8">
          <h1 className="text-2xl md:text-4xl text-center font-bold mb-5">FAQ</h1>
        </div>
        <div className="wrapper p-6 md:p-4 w-full flex flex-col sm:flex-row  lg:flex-row gap-3 mt-[-1rem]">
          <div className="accordion w-full sm:w-[60%]">
            <FAQ />
          </div>

          <div className="content w-full sm:w-[40%] px-8 p-2 bg-gray-50 hidden sm:block">
            <img src={image} alt="FAQ Illustration" className="w-full h-auto" />
          </div>
        </div>
      </section>

  );
}

export default Annoucement;
