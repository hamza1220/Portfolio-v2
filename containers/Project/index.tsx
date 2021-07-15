import React from "react";
import { Project } from "../../constants";
import ProjectMarkdown from "../../components/ProjectMarkdown";
import ProjectIntro from "../../components/ProjectIntro";

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
      <ProjectIntro project={project} />
      <div className="flex justify-center">
        <ProjectMarkdown content={writeup} />
      </div>
    </div>
  ) : (
    <div>nope</div>
  );
};

export default ProjectDetails;
