import React from "react";
import Jumbotron from "../Jumbotron";
// import About from "../About";
import Work from "../Work";
import { Project, Intro } from "../../constants";

const Landing = ({ works, intro }: { works: Array<Project>, intro: Intro }) => {
  return (
    <div>
      <Jumbotron intro={intro} />
      {/* <About /> */}
      <Work works={works} />
    </div>
  );
};
export default Landing;
