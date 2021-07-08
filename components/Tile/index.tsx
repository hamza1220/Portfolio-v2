import React from "react";
import { Project } from "../../constants";

const Tags = ({ tags, color }: { tags: Array<string>; color: string }) => (
  <div className="flex">
    {tags?.map((tag, index) => (
      <div className="flex text-xs font-mono text-blueGray-500">
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
      className="w-96 h-80 rounded shadow-xl overflow-hidden flex flex-col bg-white transition duration-500 transform hover:-translate-y-2"
      style={{ cursor: "pointer" }}
    >
      <img
        src={
          "https://images.unsplash.com/photo-1551085429-91a8422c72ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        }
        className="h-28 w-full"
      />
      <div
        className="w-full px-4 pt-3 pb-6 flex flex-col"
        style={{ flex: "1 0 auto" }}
      >
        {/* <span className="text-xs">{work.organization}</span> */}
        <div className="mb-auto">
          <h4 className="text-heading font-semibold leading-normal tracking-wide text-xl mb-2">
            {work.title}
          </h4>
          <p className="text-blueGray-500 text-sm">{work.description}</p>
        </div>
        <div className="mt-auto justify-self-end	">
          <Tags tags={work.tags} color={work.textColor} />
        </div>
      </div>
    </div>
  );

export default Tile;
