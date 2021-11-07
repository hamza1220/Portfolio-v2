import React from "react";
import SectionHeading from "../../components/SectionHeading";
import Tabs from "../../components/Tabs";
import Tile from "../../components/Tile";
import { workTypes, Project } from "../../constants";

const Work = ({ works }: { works: Array<Project> }) => {
  const [tabIndex, changeTab] = React.useState<number>(0);

  const { FEATURED, SE, UX, ALL } = workTypes;
  const tabs = [FEATURED, UX, SE, ALL];

  const selectedWorks = works
    ? tabs[tabIndex] === ALL
      ? works
      : works.filter((work) => work.type.includes(tabs[tabIndex]))
    : [];

  return (
    <div id="work" className="w-full py-24 flex flex-col justify-center ">
      <SectionHeading text={"My Work"} index={2} />
      <Tabs
        tabs={tabs}
        activeIndex={tabIndex}
        changeTab={(index: number) => changeTab(index)}
      />
      <div className="w-full flex justify-center mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
          {selectedWorks
            .filter((work) => !work.hide)
            .map((work, index) => (
              <div key={index} className="flex items-center justify-center">
                {<Tile work={work} />}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
