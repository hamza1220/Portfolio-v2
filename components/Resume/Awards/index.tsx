import React from "react";

const Awards = () => {
  const awards = [
    "LUMS Dean's Honor List 2016, 2017, 2019",
    "LUMS Undergraduate Award of Distinction",
    "A-Level High Achiever Medal",
    "O-Level High Achiever Medal",
  ];
  return (
    <div className="flex flex-col md:flex-row w-full py-4 md:flex-start">
      <div className="w-full md:w-4/12">
        <h2>Awards </h2>
      </div>
      <div className="tailwind-hidden md:flex border-l-2 border-solid border-primary pr-2" />
      <div className="flex flex-col w-full md:w-8/12 justify-center">
        {awards.map((award) => (
          <div className="text-gray-900 dark:text-gray-400">{award}</div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
