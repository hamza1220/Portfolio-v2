import React from "react";
import Jumbotron from "./Jumbotron";

const Landing = (_: any) => {
  return (
    <div className="flex flex-col items-center bg-primary-lightP3">
      <div className="max-w-screen-xl w-full">
        <Jumbotron />
      </div>
    </div>
  );
};
export default Landing;
