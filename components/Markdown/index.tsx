import React from "react";
import { renderMd } from "../../utils/markdown";

const Markdown = ({ content }: { content: string }) => (
  <div className="w-9/12 flex justify-center">
    <div dangerouslySetInnerHTML={{ __html: renderMd(content) }} />
  </div>
);
export default Markdown;
