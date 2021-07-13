import React from "react";
import { Project } from "../../constants";

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
      {writeup}
    </div>
  ) : null;
};

export default ProjectDetails;
