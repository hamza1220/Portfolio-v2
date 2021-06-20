import React from "react";
import SectionHeading from "../../components/SectionHeading";
import Tabs from "../../components/Tabs";
import Tile from "../../components/Tile";
import { workTypes, Project } from "../../constants";

const Work = () => {
  const [works, setWorks] = React.useState<Array<Project>>(null);
  const [tabIndex, changeTab] = React.useState<number>(0);

  const { FEATURED, SE, DS, ALL } = workTypes;
  const tabs = [FEATURED, SE, DS, ALL];

  React.useEffect(() => {
    fetch("info/works.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setWorks(Object.values(res)));
  }, []);

  const selectedWorks = works
    ? tabs[tabIndex] === ALL
      ? works
      : works.filter((work) => work.type.includes(tabs[tabIndex]))
    : [];

  const x = selectedWorks
    .concat(selectedWorks)
    .concat(selectedWorks)
    .concat(selectedWorks)
    .concat(selectedWorks)
    .concat(selectedWorks);

  return (
    <div id="work" className="w-full p-6 py-24 flex flex-col justify-center ">
      <SectionHeading text={"My Work"} index={2} />
      <Tabs
        tabs={tabs}
        activeIndex={tabIndex}
        changeTab={(index: number) => changeTab(index)}
      />
      <div className="w-full flex justify-center mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
          {x.map((work, index) => (
            <div key={index} className="flex items-center justify-center">
              <Tile work={work} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
