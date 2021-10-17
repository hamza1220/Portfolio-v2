import React from "react";
import Awards from "../../components/Resume/Awards";
import Education from "../../components/Resume/Education";
import Experience from "../../components/Resume/Experience";
import Interests from "../../components/Resume/Interests";
import Skills from "../../components/Resume/Skills";
import { DownloadIcon } from "../../utils/icons";
import { Resume } from "../../constants";

const ResumePage = ({ resume }: { resume: Resume }) => (
  <div className="flex flex-col w-full space-y-10">
    <div className="flex flex-row items-center">
      <h1>Resume</h1>
      <a href={resume.download_url} target="_blank" rel="noopener noreferrer">
        <DownloadIcon className="h-8 w-8 flex-shrink-0 ml-4 duration-200 hover:text-primary dark:hover:text-primary-light hover:animate-bounce" />
      </a>
    </div>
    <Education items={resume.education} />
    <Experience items={resume.experience} />
    <Skills items={resume.skills} />
    <Interests items={resume.interests} />
    <Awards items={resume.awards} />
  </div>
);

export default ResumePage;
