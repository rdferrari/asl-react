import React from "react";
import ImageBottom from "./ImageBottom";
import Story from "./Story";

const WorkCrude = () => {
  return (
    <div>
      <Story
        header="Crude"
        intro="Crude (2018), by Andrew Denton. A video installation informed by essayist modes of filmmaking."
        imageHeader="/images/work-crude/header.jpg"
        text="The film seeks to evoke a space of reflection, uneasiness, and sadness by engaging with the residual and stratified signs of our collective impact on our environment. It attempts to see and hear some of the elusive signs of anthropogenic climate change in order to make what is invisible, visible, to evoke contemplations on the subject of ecological crisis, through affective cinematic devices."
        imageTextOne="/images/work-crude/content.jpg"
      />

      <ImageBottom image="/images/work-crude/bottom1.jpg" />
      <ImageBottom image="/images/work-crude/bottom2.jpg" />
      <ImageBottom image="/images/work-crude/bottom3.jpg" />
      <ImageBottom image="/images/work-crude/bottom4.jpg" />
      <ImageBottom image="/images/work-crude/bottom5.jpg" />
      <ImageBottom image="/images/work-crude/bottom6.jpg" />
    </div>
  );
};

export default WorkCrude;
