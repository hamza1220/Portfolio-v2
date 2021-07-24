import React from "react";

const Skills = () => {
  const languages = ["Javascript", "Typescript", "Python", "C++"];
  const frameworks = [
    "React",
    "Redux",
    "React-Native",
    "NodeJS",
    "OpenCV",
    "Keras",
  ];
  const design = ["Protopie", "Adobe Photoshop", "Figma"];
  return (
    <div className="flex flex-col md:flex-row w-full py-4 md:flex-start">
      <div className="w-full md:w-4/12">
        <h2>Skills </h2>
      </div>
      <div className="grid gap-y-6 md:gap-y-0 sm:grid-cols-3 md:gap-x-28 place-content-start sm:place-content-center">
        <div>
          <h6 className="pb-4">Languages</h6>
          {languages.map((lang) => (
            <div className="text-gray-900 dark:text-gray-400">{lang}</div>
          ))}
        </div>
        <div>
          <h6 className="pb-4">Frameworks</h6>
          {frameworks.map((fw) => (
            <div className="text-gray-900 dark:text-gray-400">{fw}</div>
          ))}
        </div>
        <div>
          <h6 className="pb-4">UI/UX</h6>
          {design.map((des) => (
            <div className="text-gray-900 dark:text-gray-400">{des}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
