import React from "react";
import ReactMarkdown from "react-markdown";
// import { render } from "react-dom";
import work from "./Work.md";

const Project = () => {
  return (
    <div>
      <ReactMarkdown>{work}</ReactMarkdown>
    </div>
  );
};

export default Project;
