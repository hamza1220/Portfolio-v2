import React from "react";
import Jumbotron from "../Jumbotron";
import About from "../About";
import Work from "../Work";

const Landing = (_: any) => {
  return (
    <div>
      <Jumbotron />
      <About />
      <Work />
    </div>
  );
};
export default Landing;
