import React from 'react';

interface ToggleProps {
  click: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const backdrop = (props: ToggleProps) => (
  <div
    className="w-full h-full fixed top-0 left-0 bg-black opacity-30 z-20"
    onClick={props.click}
  />
);

export default backdrop;
