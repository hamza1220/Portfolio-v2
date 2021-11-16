import React from "react";

const Spinner = () => (
  <div className="flex justify-center items-center">
    <div
      className="
      animate-spin
      rounded-full
      h-32
      w-32
      border-t-2 border-b-2 border-primary dark:border-primary-light
    "
    ></div>
  </div>
);

export default Spinner;
