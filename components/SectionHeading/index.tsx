import React from "react";

const SectionHeading = ({ text, index }: { text: string; index: number }) => {
  return (
    <h3 className="text-heading text-4xl font-semibold mt-2 mb-10">
      {/* <span className="mr-2 text-primary dark:text-primary-light text-2xl font-mono font-medium">
        0{index}.
      </span> */}
      {text}
    </h3>
  );
};

export default SectionHeading;
