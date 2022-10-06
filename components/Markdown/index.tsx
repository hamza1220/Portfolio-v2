import React from "react";
import { renderMd } from "../../utils/markdown";

const Markdown = ({
  content,
  isNotFullPage,
}: {
  content: string;
  isNotFullPage?: boolean;
}) => (
  <div
    className={`md ${
      !isNotFullPage ? "w-11/12 sm:w-9/12 flex justify-center" : ""
    }`}
  >
    <div
      dangerouslySetInnerHTML={{ __html: renderMd(content) }}
      className="flex flex-col w-full"
    />
  </div>
);

export default Markdown;
