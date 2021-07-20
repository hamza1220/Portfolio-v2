import React from "react";
import { Project } from "../../../constants";

const Overview = ({ project }: { project: Project }) => (
  <div className="h-96">
    <h1 style={{ color: project.textColor }}> {project.title} </h1>
  </div>
);

export default Overview;
