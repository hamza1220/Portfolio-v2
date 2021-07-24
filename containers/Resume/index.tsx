import React from "react";
import Awards from "../../components/Resume/Awards";
import Education from "../../components/Resume/Education";
import Experience from "../../components/Resume/Experience";
import Interests from "../../components/Resume/Interests";
import Skills from "../../components/Resume/Skills";
import { DownloadIcon } from "../../utils/icons";

const Resume = () => {
  return (
    <div className="flex flex-col w-full space-y-10">
      <div className="flex flex-row items-center">
        <h1>Resume</h1>
        <a
          href="https://drive.google.com/file/d/11pJYtMOd3kYtwJyHJaYi383XE60vTl-x/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DownloadIcon className="h-8 w-8 flex-shrink-0 ml-4" />
        </a>
      </div>
      <Education />
      <Experience />
      <Skills />
      <Interests />
      <Awards />
    </div>
  );
};

export default Resume;
