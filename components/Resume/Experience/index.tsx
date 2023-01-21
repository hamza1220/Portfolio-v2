import React from "react";
import { Experience } from "../../../constants";

const ExperienceSection = ({ items }: { items: Experience[] }) => (
  <div className="flex flex-col md:flex-row w-full py-4 md:flex-start">
    <div className="w-full md:w-4/12">
      <h2>Experience </h2>
    </div>
    <div className="tailwind-hidden md:flex border-l-2 border-solid border-primary dark:border-primary-light pr-2" />
    <div className="flex flex-col w-full md:w-8/12 space-y-10">
      {items.map((experience, index) => (
        <div key={index}>
          <h3 className="font-bold text-xl">
            <a
              className="hover:opacity-70 cursor-pointer transition duration-200"
              href={experience.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.organization}
            </a>
            <span className="pl-4 text-base">{experience.location}</span>
          </h3>
          {experience.positions.map((position, index) => (
            <div className={`${index ? "pt-4" : ""}`} key={index}>
              <h4 className="font-bold text-base">
                {position.title} / {position.duration}
              </h4>
              <span className="text-blueGray-500 dark:text-gray-600 whitespace-pre-line">
                {position.body}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default ExperienceSection;
