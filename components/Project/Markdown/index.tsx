import React from "react";
import { renderMd } from "../../../utils/markdown";

const Markdown = ({ content }: { content: string }) => (
  <div className="w-11/12 sm:w-9/12 flex justify-center md">
    <div
      dangerouslySetInnerHTML={{ __html: renderMd(content) }}
      className="flex flex-col"
    />
  </div>
);

export default Markdown;
