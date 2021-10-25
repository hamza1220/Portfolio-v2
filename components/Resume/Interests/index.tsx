import React from "react";
import { Interest } from "../../../constants";

const Interests = ({ items }: { items: Interest[] }) =>
  !!items.length ? (
    <div className="flex flex-col md:flex-row w-full py-4 md:flex-start">
      <div className="w-full md:w-4/12">
        <h2>Interests </h2>
      </div>
      <div className="tailwind-hidden md:flex border-l-2 border-solid border-primary dark:border-primary-light pr-2 h-6 self-center" />
      <div className="flex flex-col w-full md:w-8/12 justify-center">
        <span className="text-blueGray-500 dark:text-gray-600">
          {items.map((interest, index) => (
            <span key={interest.title}>
              {" "}
              {interest}
              {index !== items.length - 1 && ","}
            </span>
          ))}
        </span>
      </div>
    </div>
  ) : null;

export default Interests;
