import React from "react";
import { Project } from "../../../constants";

const Detail = ({ heading, description }: { heading: string; description: string | Array<any> }) => {
  const detailsClasses = "text-lg text-blueGray-500 dark:text-gray-600"
  return (
    <div className="mb-4">
      <h2 className="text-heading text-xl font-semibold">{heading}</h2>
      {
        typeof description === "string" ?
          <span className={detailsClasses}>{description}</span>
          :
          <ul>{description.map((item, index) => <li key={index} className={detailsClasses}>{item}</li>)}</ul>
      }
    </div>
  )
};

const Overview = ({ project }: { project: Project }) => {
  const { overview } = project
  const preview = overview.previewImagePath
  return (
    <div className="">
      <h1 style={{ color: project.textColor }}> {project.title} </h1>
      <div className="my-8 py-8 border-b-2 sm:flex">
        <div className={`${preview ? 'w-full sm:w-1/2' : 'w-full'}`}>
          <Detail heading={'Overview'} description={overview.description} />
          <Detail heading={'Organization'} description={overview.description} />
          <Detail heading={`Role${overview.roles.length ? 's' : ''}`} description={overview.roles} />
          <Detail heading={'Timeline'} description={overview.timeline} />
        </div>
        {preview &&
          <div className="w-full sm:w-1/2">
            <img src={preview} className="" />
          </div>
        }
      </div>
    </div>
  )
};

export default Overview;
