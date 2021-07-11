import React from "react";
import { Project } from "../../constants";

const Tags = ({ tags, color }: { tags: Array<string>; color: string }) => (
  <div className="flex flex-wrap">
    {tags?.map((tag, index) => (
      <div
        key={tag}
        className="flex text-xs font-mono text-blueGray-500 dark:text-gray-600"
      >
        <span>{tag}</span>
        {index !== tags.length - 1 && (
          <div
            className="inline-block w-2 h-2 rounded-full mx-2 self-center		"
            style={{ backgroundColor: color }}
          />
        )}
      </div>
    ))}
  </div>
);

const Tile = ({ work, version = 1 }: { work: Project; version?: number }) =>
  !version ? (
    <div className="w-80 h-80 rounded-lg flex items-center justify-center overflow-hidden">
      <img src={work.tileImagePath} className="w-80" />
    </div>
  ) : (
    <div
      className="w-96 h-80 rounded shadow-xl overflow-hidden flex flex-col bg-white dark:bg-dark-80 transition duration-500 transform hover:-translate-y-2"
      style={{ cursor: "pointer" }}
    >
      {console.log(work.title, work.maintainAspectRatio)}
      <img
        src={work.tileImagePath}
        className="h-28 w-full"
        style={work.maintainAspectRatio ? { objectFit: "cover" } : null}
      />
      <div
        className="w-full px-4 pt-3 pb-6 flex flex-col"
        style={{ flex: "1 0 auto" }}
      >
        <div className="mb-auto">
          <h4 className="text-xl mb-2">{work.title}</h4>
          <p className="text-blueGray-500 dark:text-gray-600 text-sm">
            {work.description}
          </p>
        </div>
        <div className="flex sm:block justify-between">
          <div className="tailwind-hidden sm:block">
            <Tags tags={work.tags} color={work.textColor} />
          </div>
          <div className="flex flex-col justify-center sm:hidden ">
            <Tags tags={work.tags} color={work.textColor} />
          </div>

          <button className="outlined-default block sm:hidden text-sm mx-2">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );

export default Tile;
