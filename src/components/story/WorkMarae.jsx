import React from "react";
import News from "./News";
import ImageBottom from "./ImageBottom";
import Story from "./Story";

const WorkMarae = () => {
  return (
    <div>
      <Story
        header="AUT Marae Point Cloud"
        intro=""
        imageHeader="/images/work-marae/header.jpg"
      />

      <ImageBottom image="/images/work-marae/bottom1.jpg" />
      <ImageBottom image="/images/work-marae/bottom2.jpg" />
      <ImageBottom image="/images/work-marae/bottom3.jpg" />
      <ImageBottom image="/images/work-marae/bottom4.jpg" />
      <ImageBottom image="/images/work-marae/bottom5.jpg" />
      <ImageBottom image="/images/work-marae/bottom6.jpg" />
    </div>
  );
};

export default WorkMarae;
