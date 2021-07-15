import React from "react";
import Jumbotron from "../Jumbotron";
import About from "../About";
import Work from "../Work";
import { Project } from "../../constants";

const Landing = ({ works }: { works: Array<Project> }) => {
  return (
    <div>
      <Jumbotron />
      <About />
      <Work works={works} />
    </div>
  );
};
export default Landing;
