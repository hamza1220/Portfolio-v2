import React from "react";
import { Project } from "../../constants";

const Tile = ({ work }: { work: Project }) => {
  return (
    <div className="w-80 h-80 rounded-lg flex items-center justify-center overflow-hidden">
      <img src={work.tileImagePath} className="w-80" />
      {/* <p className="text-xl font-semibold">{work.title}</p> */}
    </div>
  );
};

export default Tile;
