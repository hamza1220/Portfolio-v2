import React from "react";
import { Education } from "../../../constants";

const EducationSection = ({ items }: { items: Education[] }) => (
  <div className="flex flex-col md:flex-row w-full py-4 md:flex-start">
    <div className="w-full md:w-4/12">
      <h2>Education </h2>
    </div>
    <div className="tailwind-hidden md:flex border-l-2 border-solid border-primary dark:border-primary-light pr-2" />
    <div className="flex flex-col w-full md:w-8/12 space-y-10">
      {items.map((education) => (
        <div key={education.title}>
          <h3 className="font-bold text-xl">
            <a
              className="hover:opacity-70 cursor-pointer transition duration-200"
              href={education.url ?? ""}
              target="_blank"
              rel="noopener noreferrer"
            >
              {education.institute}
            </a>
          </h3>
          <h4 className="font-bold text-base">
            {education.title} / {education.duration}
          </h4>
          <span className="text-blueGray-500 dark:text-gray-600">
            {education.body1}
          </span>
          {education.body2 && (
            <p className="text-blueGray-500 dark:text-gray-600">
              {education.body2}
            </p>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default EducationSection;
