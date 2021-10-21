import React from "react";

const Tabs = ({
  tabs,
  activeIndex,
  changeTab,
}: {
  tabs: Array<string>;
  activeIndex: number;
  changeTab: any;
}) => (
  <div className="w-full flex sm:justify-end">
    <div className="flex flex-wrap">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`sm:px-6 py-4 rounded-none transition duration-200 ease-in-out ${
            index === activeIndex
              ? "border-b-4 border-primary dark:border-primary-light sm:border-0 text-primary dark:text-primary-light"
              : "text-black dark:text-dark-contrastText"
          } ${
            index !== activeIndex
              ? "hover:text-blueGray-500 dark:hover:text-blueGray-500"
              : ""
          }`}
          onClick={(_) => changeTab(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  </div>
);

export default Tabs;
