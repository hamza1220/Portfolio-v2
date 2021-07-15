import React from "react";
import ReactMarkdown from "react-markdown";
import md from 'markdown-it';
import work from "./Work.md";
import { renderMd } from "../../utils/markdown";

const Project = () => {
  return (
    <div
    dangerouslySetInnerHTML={{ __html: renderMd(work) }}
    />
  );
};

export default Project;
