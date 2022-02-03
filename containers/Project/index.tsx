import React from "react";
import { Project } from "../../constants";
import Markdown from "../../components/Markdown";
import Overview from "../../components/Project/Overview";
import PrevNextProjects from "../../components/Project/PrevNextProjects";
import Spinner from "../../components/Spinner";

const ProjectDetails = ({
  project,
  writeup,
  allProjects,
}: {
  project: Project;
  writeup: string;
  allProjects: Array<Project>;
}) => {
  return project ? (
    <div>
      <Overview project={project} />
      <div className="flex justify-center">
        <Markdown content={writeup} />
      </div>
      <PrevNextProjects allProjects={allProjects} currentProject={project} />
    </div>
  ) : (
    <Spinner />
  );
};

export default ProjectDetails;
