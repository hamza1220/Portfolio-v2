import React from "react";
import SectionHeading from "../../components/SectionHeading";
import Tabs from "../../components/Tabs";

const Work = () => {
  const [tabIndex, changeTab] = React.useState(0);
  const tabs = ["Featured", "Software Engineering", "Data Science", "All"];

  return (
    <div className="w-full p-6 py-24 flex flex-col justify-center ">
      <SectionHeading text={"My Work"} index={2} />
      <Tabs
        tabs={tabs}
        activeIndex={tabIndex}
        changeTab={(index: number) => changeTab(index)}
      />
    </div>
  );
};

export default Work;
