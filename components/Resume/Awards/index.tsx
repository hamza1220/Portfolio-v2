import React from "react";

const AwardsSection = ({ items }: { items: string[] }) =>
  !!items.length ? (
    <div className="flex flex-col md:flex-row w-full py-4 md:flex-start">
      <div className="w-full md:w-4/12">
        <h2>Awards </h2>
      </div>
      <div className="tailwind-hidden md:flex border-l-2 border-solid border-primary dark:border-primary-light pr-2" />
      <div className="flex flex-col w-full md:w-8/12 justify-center">
        <ul>
          {items.map((award) => (
            <li className="text-blueGray-500 dark:text-gray-600" key={award}>
              {award}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : null;

export default AwardsSection;
