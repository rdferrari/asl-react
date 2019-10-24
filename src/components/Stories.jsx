import React from "react";
import Header from "./Header";

const Stories = () => {
  return (
    <div>
      <Header
        menuText="Recent Stories / Te kōrero hou"
        title="Recent Stories"
        lineOneMaori="Ko te taiao ko au,"
        lineTwoMaori="Ko au te taiao."
        lineOneEng="The enviroment is me,"
        lineTwoEng="I am the enviroment."
        image="/images/home-header.jpg"
      />
    </div>
  );
};

export default Stories;
