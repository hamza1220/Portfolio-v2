import React from "react";
import Awards from "../../components/Resume/Awards";
import Education from "../../components/Resume/Education";
import Experience from "../../components/Resume/Experience";
import Interests from "../../components/Resume/Interests";
import Skills from "../../components/Resume/Skills";

const Resume = () => {
  return (
    <div className="flex flex-col w-full space-y-10">
      <h1>Resume </h1>
      <Education />
      <Experience />
      <Skills />
      <Interests />
      <Awards />
    </div>
  );
};

export default Resume;
