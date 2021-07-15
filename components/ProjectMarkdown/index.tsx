import React from "react";
import { renderMd } from "../../utils/markdown";
// import styles from "./index.module.css";

const Markdown = ({ content }: { content: string }) => (
  <div className="w-11/12 sm:w-9/12 flex justify-center">
    <div dangerouslySetInnerHTML={{ __html: renderMd(content) }} />
  </div>
);

export default Markdown;
