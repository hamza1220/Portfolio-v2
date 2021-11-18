import React from "react";
import { Project } from "../../../constants";

const Detail = ({
  heading,
  description,
}: {
  heading: string;
  description: string | Array<any>;
}) => {
  const detailsClasses = "text-lg text-blueGray-500 dark:text-gray-600";
  return (
    <div className="mb-4">
      <h2 className="text-heading text-xl font-semibold">{heading}</h2>
      {typeof description === "string" ? (
        <span className={detailsClasses}>{description}</span>
      ) : (
        <ul>
          {description.map((item, index) => (
            <li key={index} className={detailsClasses}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Overview = ({ project }: { project: Project }) => {
  const { overview } = project;
  const preview = overview.previewImagePath;
  return (
    <div>
      <h1 style={{ color: project.textColor }}> {project.title} </h1>
      <div className="my-8 py-8 border-b-2 border-gray-200 dark:border-gray-A100 sm:flex">
        <div
          className={`${
            preview ? "w-full sm:w-1/2 flex flex-col justify-center" : "w-full"
          }`}
        >
          <Detail heading={"Overview"} description={overview.description} />
          {overview.projectType && (
            <Detail
              heading={
                overview.projectType.toLowerCase() === "course work"
                  ? "Project Type"
                  : "Organization"
              }
              description={overview.projectType}
            />
          )}
          <Detail
            heading={`Role${overview.roles.length ? "s" : ""}`}
            description={overview.roles}
          />
          {overview.team && (
            <Detail heading={"Team"} description={overview.team} />
          )}

          <Detail heading={"Timeline"} description={overview.timeline} />
        </div>
        {preview && (
          <div className="w-full sm:w-1/2 flex justify-center self-center">
            {!preview.includes("youtube") ? (
              <img src={`${preview}`} className="w-full h-full" />
            ) : (
              <iframe
                width="560"
                height="315"
                src={`${preview}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;
