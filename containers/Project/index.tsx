import React from "react";
import { Project } from "../../constants";
import Markdown from "../../components/Markdown";

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
      <h1 style={{ color: project.textColor }}> {project.title} </h1>
      <div className="flex justify-center">
        <Markdown content={writeup} />
      </div>
    </div>
  ) : (
    <div>nope</div>
  );
};

export default ProjectDetails;
