import React from "react";

interface ToggleProps {
  click: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const drawerToggleButton = (props: ToggleProps) => (
  <button
    className="flex flex-col justify-around h-6 w-7 bg-transparent border-none cursor-pointer p-0 box-border focus:outline-none"
    onClick={props.click}
  >
    <div className="bg-primary dark:bg-primary-light w-7 h-0.5 rounded" />
    <div className="bg-primary dark:bg-primary-light w-7 h-0.5 rounded" />
    <div className="bg-primary dark:bg-primary-light w-7 h-0.5 rounded" />
  </button>
);

export default drawerToggleButton;
