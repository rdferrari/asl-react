import React from "react";
import ImageBottom from "./ImageBottom";
import Story from "./Story";

const WorkAirBox = () => {
  return (
    <div>
      <Story
        header="AirBox AR"
        intro="The AirBox Science project is developed by NIWA in partnership with Massey University, and Auckland University of Technology’s AppLab, with funding from the Unlocking Curious Minds fund provided by the Ministry of Business Innovation and Employment."
        imageHeader="/images/work-airbox/ar-box-header.jpg"
        text="The app is a Data visualisation tool that uses AR (augmented reality) to show the experiments about air happening inside the AirBox. It functions by getting sensor data from AirBox unit, then showing you CO2, humidity, and temperature levels in near real time."
        imageTextOne="/images/work-airbox/ar-box-content.jpg"
      />

      <ImageBottom image="/images/work-airbox/ar-box-detail.jpg" />
      <ImageBottom image="/images/work-airbox/ar-box-sensor.jpg" />
      <ImageBottom image="/images/work-airbox/ar-box-close.jpg" />
      <ImageBottom image="/images/work-airbox/ar-box-header.jpg" />
    </div>
  );
};

export default WorkAirBox;
