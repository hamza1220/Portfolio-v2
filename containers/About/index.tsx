import React from "react";
import SectionHeading from "../../components/SectionHeading";
import Markdown from "../../components/Markdown";

const profileImg = require("../../public/aboutme.svg");

const About = ({ about }: { about: string }) => (
  <div id="about" className="w-full py-24 flex flex-col justify-center ">
    <SectionHeading text={"About Me"} index={1} />
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-1 lg:gap-4">
      <div className="sm:col-start-1 sm:col-end-4 leading-normal text-blueGray-500 dark:text-gray-600 about-container">
        <Markdown content={about} isNotFullPage />
      </div>
      <div className="flex justify-center items-center mb-8 sm:mt-0 sm:col-end-6 sm:col-span-2 ">
        <img
          alt="profile image"
          src={profileImg}
          className="h-auto w-auto max-w-md max-h-md rounded"
        />
      </div>
    </div>
  </div>
);

export default About;
