import React from "react";
import { useRouter } from "next/router";
import { ChevronLeft, ChevronRight } from "../../../utils/icons";
import { Project } from "../../../constants";
import routes from "../../../constants/routes";

const PrevNextProjects = ({
  allProjects,
  currentProject,
}: {
  allProjects: Array<Project>;
  currentProject: Project;
}) => {
  const router = useRouter();
  const [prevProject, setPrevProject] = React.useState<Project>();
  const [nextProject, setNextProject] = React.useState<Project>();

  React.useEffect(() => {
    getSubsequentProjects();
  }, [currentProject]);

  const getSubsequentProjects = () => {
    const currInd = allProjects.findIndex(
      (proj) => proj.title === currentProject.title
    );
    if (currInd < allProjects.length - 1 && currInd > 0) {
      setPrevProject(allProjects[currInd - 1]);
      setNextProject(allProjects[currInd + 1]);
    } else if (currInd === 0) {
      setPrevProject(allProjects[allProjects.length - 1]);
      setNextProject(allProjects[currInd + 1]);
    } else if (currInd === allProjects.length - 1) {
      setPrevProject(allProjects[currInd - 1]);
      setNextProject(allProjects[0]);
    }
  };

  return (
    <>
      <div className="border border-b border-solid border-gray-200 dark:border-dark-60 my-8" />
      <div className="grid grid-rows-2 md:grid-cols-3 gap-4 md:gap-12">
        <div
          className="place-self-center md:place-self-start inline-flex cursor-pointer transform hover:-translate-x-4 hover:text-primary dark:hover:text-primary-light transition duration-500"
          onClick={(e) => {
            e.preventDefault();
            router.push(prevProject?.url);
          }}
        >
          <ChevronLeft className="flex-shrink-0" />
          <span className="w-48 max-w-xs truncate pl-2">
            {prevProject?.title}
          </span>
        </div>
        <div
          className="place-self-center cursor-pointer transition duration-500 transform hover:-translate-y-2 hover:text-primary dark:hover:text-primary-light tailwind-hidden md:block"
          onClick={(e) => {
            e.preventDefault();
            router.push(routes.PROJECTS);
          }}
        >
          All Projects
        </div>
        <div
          className="place-self-center md:place-self-end inline-flex cursor-pointer transform hover:translate-x-4 hover:text-primary dark:hover:text-primary-light transition duration-500"
          onClick={(e) => {
            e.preventDefault();
            router.push(nextProject?.url);
          }}
        >
          <span className="max-w-xs truncate pr-2">{nextProject?.title}</span>
          <ChevronRight className="flex-shrink-0 hover:text-primary dark:hover:text-primary-light" />
        </div>
      </div>
    </>
  );
};

export default PrevNextProjects;
