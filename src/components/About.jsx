import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import image from "../../public/assets/1.jpg";

const About = () => {
  return (
    <>
      <section className="mt-8 px-4">
        <h1 className="text-4xl lg:text-5xl font-bold text-center text-gray-100">
          ABOUT ME
        </h1>
        <article className="w-full h-auto flex flex-wrap justify-center lg:flex-nowrap lg:gap-8 mt-8">
          <div className="w-full lg:w-1/3 flex justify-center mb-6 lg:mb-0">
            <img
              src={image}
              alt="Profile"
              className="rounded-md max-w-full h-auto"
            />
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl font-bold mb-4">
              I'm a creative Web Designer/Developer based in The Republic of
              Liberia.
            </h2>
            <p className="text-2xl font-bold text-[#fab702] mb-4">
              Web Developer
            </p>
            <p className="mb-6">
              I am a Web Developer with a strong focus on digital branding.
              Visual Development seeks to attract, inspire, create desire and
              motivate people to respond to messages, with a view to making a
              favorable impact.
            </p>

            <div>
              <h1 className="text-2xl font-bold text-center lg:text-left my-5">
                My Skills
              </h1>

              <div className="mb-4">
                <h2>HTML</h2>
                <ProgressBar
                  completed={90}
                  bgColor="#fab702"
                  baseBgColor="#e0e0e0"
                  height="20px"
                  width="100%"
                  borderRadius="8px"
                  labelColor="#000"
                  labelSize="16px"
                  isLabelVisible={true}
                  transitionDuration="2s"
                />
              </div>
              <div className="mb-4">
                <h2>CSS</h2>
                <ProgressBar
                  completed={80}
                  bgColor="#fab702"
                  baseBgColor="#e0e0e0"
                  height="20px"
                  width="100%"
                  borderRadius="8px"
                  labelColor="#000"
                  labelSize="16px"
                  isLabelVisible={true}
                  transitionDuration="2s"
                />
              </div>
              <div className="mb-4">
                <h2>JavaScript</h2>
                <ProgressBar
                  completed={60}
                  bgColor="#fab702"
                  baseBgColor="#e0e0e0"
                  height="20px"
                  width="100%"
                  borderRadius="8px"
                  labelColor="#000"
                  labelSize="16px"
                  isLabelVisible={true}
                  transitionDuration="2s"
                />
              </div>
              <div className="mb-4">
                <h2>React Js</h2>
                <ProgressBar
                  completed={65}
                  bgColor="#fab702"
                  baseBgColor="#e0e0e0"
                  height="20px"
                  width="100%"
                  borderRadius="8px"
                  labelColor="#000"
                  labelSize="16px"
                  isLabelVisible={true}
                  transitionDuration="2s"
                />
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default About;