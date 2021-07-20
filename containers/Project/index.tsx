import React from "react";
import { Project } from "../../constants";
import Markdown from "../../components/Project/Markdown";
import Overview from "../../components/Project/Overview";

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
    </div>
  ) : (
    <div>nope</div>
  );
};

export default ProjectDetails;
