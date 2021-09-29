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
      <div className="flex flex-col-reverse sm:grid sm:grid-cols-5 sm:gap-4">
        <div className="sm:col-start-1 sm:col-end-4 leading-normal text-xl text-blueGray-500 dark:text-gray-600">
          <p className="mb-4">
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
              <span
                className="cursor-pointer font-semibold hover:opacity-75"
                style={{ color: "#5553FF" }}
              >
                {" "}
                Educative Inc.
              </span>
            </Link>{" "}
            My interests revolve around Human-Computer Interaction, UX Design
            and Software Engineering.
          </p>
          <p className="mb-4">
            I feel like my eventual goal is to become a product manager that has
            experience in both domains - the technology end and the users end. I
            believe knowledge of both is to make sure engineering aligns with
            user experience - that is why I feel like a UX Design degree will
            complement my computer science background.
          </p>

          <p className="mb-4">
            But enough about work; I am a sports geek - my favourite sport is
            football, where I support Manchester United. I also enjoy watching
            Tennis, Cricket and occasionally MMA. Recently, I have found I like
            cooking as well! I am trying to start reading and writing again too,
            but I can't say I've been too successful yet. Oh, and I love
            animals!
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
