import React from "react";

const Interests = () => (
  <div className="flex flex-col md:flex-row w-full py-4 md:flex-start">
    <div className="w-full md:w-4/12">
      <h2>Interests </h2>
    </div>
    <div className="tailwind-hidden md:flex border-l-2 border-solid border-primary pr-2 h-6 self-center" />
    <div className="flex flex-col w-full md:w-8/12 justify-center">
      <span className="text-gray-900 dark:text-gray-400">
        Football (soccer), Tennis, Cricket, Memes, Cinema
      </span>
    </div>
  </div>
);

export default Interests;
