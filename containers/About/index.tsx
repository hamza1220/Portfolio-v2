import React from "react";
import SectionHeading from "../../components/SectionHeading";
import Link from "next/link";

const profileImg = require("../../public/profile-img.jpeg");

const About = () => {
  const recentTech = [
    "JavaScript (ES6+)",
    "React",
    "Flask",
    "Node.js",
    "Vue",
    "GAE",
  ];

  return (
    <div id="about" className="w-full py-24 flex flex-col justify-center ">
      <SectionHeading text={"About Me"} index={1} />
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-1 lg:gap-4">
        <div className="sm:col-start-1 sm:col-end-4 leading-normal text-xl text-blueGray-500 dark:text-gray-600">
          <p className="mb-4 text-2xl leading-relaxed">
            I'm currently a student at{" "}
            <span
              className="font-semibold hover:opacity-75"
              style={{ color: "#8E6F3E" }}
            >
              Purdue
            </span>{" "}
            studying UX Design. Most recently, I was a full-stack software
            engineer at
            <Link href="https://www.educative.io">
              <span className="cursor-pointer font-semibold hover:opacity-75 gradient-purple text-gradient">
                {" "}
                Educative Inc.
              </span>
            </Link>{" "}
            My interests revolve around Human-Computer Interaction, UX Design,
            and Software Engineering.
          </p>
          <p className="mb-4 text-2xl leading-relaxed">
            Through my experiences, I've found that the best product designers
            would be those who have knowledge of both, engineering and design.
            That is how I view my personal design philosophy by and it is what
            drives me forward to pursue UX on top of my computer science
            background.
          </p>

          <p className="mb-4 text-2xl leading-relaxed">
            If you want to work with me, or want to grab coffee, or rant about
            how bad Manchester United are right now, send me an email over at
            raza.khawaja@hotmail.com.
          </p>

          {/* <p>
            Some of the technologies I have recently been working with include:
          </p>
          <ul className="grid grid-cols-2 gap-2 font-mono text-sm mt-6">
            {recentTech.map((technology, _) => (
              <li className="mb-1" key={technology}>
                <span className="text-primary dark:text-primary-light mr-2 text-lg">
                  ▹
                </span>{" "}
                {technology}
              </li>
            ))}
          </ul> */}
        </div>
        <div className="flex justify-center items-center mb-8 sm:mt-0 sm:col-end-6 sm:col-span-2 ">
          <img
            alt="profile image"
            src={profileImg}
            className="rounded-full h-80 w-80 border-4 border-primary dark:border-primary-light"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
