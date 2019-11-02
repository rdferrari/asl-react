import React from "react";
import News from "./News";
import ImageBottom from "./ImageBottom";
import Story from "./Story";

const WorkCloud = () => {
  return (
    <div>
      <Story
        header="O Tū Kapua (What Clouds See) "
        intro="F4 Art Collective, (Susan Jowsey, Marcus Williams and Mercy Williams) and NIWA air quality scientists collaborated on a two year project, producing three significant participatory research outputs: My Personal Cloud, The ArtScience Project in schools and O-Tū- Kapua, as well as a number of published papers."
        imageHeader="/images/work-clouds/header.jpg"
        text="F4 Art Collective, (Susan Jowsey, Marcus Williams and Mercy Williams) and NIWA air quality scientists collaborated on a two year project, producing three significant participatory research outputs: My Personal Cloud, The ArtScience Project in schools and O-Tū- Kapua, as well as a number of published papers. This collaboration was part of the inaugural TEMPAuckland art-science project was curated by Corbans Estate, Te Uru Waitakere Contemporary Art Gallery and Auckland City and Te Kawerau a Maki. The final project O-Tū- Kapua saw F4 Collective and NIWA air quality scientists joined by Composer Maree Sheehan (Te Ara Poutama), AUT’s Centre for Learning and Teaching, and digital technologies company Imersia. O-Tū-Kapua received funding through an Unlocking Curious Minds (UCM) grant from the Ministry of Business Innovation and Employment (MBIE)."
        imageTextOne="/images/work-clouds/content.png"
        news={true}
      />

      <div className="story-container-news">
        <News
          image="/images/work-clouds/new1.jpg"
          title="How dirty is Auckland’s air?"
          text="A new smartphone app that allows users to check Auckland’s air quality at any given time features in a climate change festival where science meets art."
          link="/"
        />
        <News
          image="/images/work-clouds/new2.jpg"
          title="Can art make science a breath of fresh air?"
          text="Students in West Auckland are helping to create a truly innovative art installation while learning about air and climate science."
          link="/"
        />
      </div>

      <ImageBottom image="/images/work-clouds/bottom1.jpg" />
      <ImageBottom image="/images/work-clouds/bottom2.jpg" />
      <ImageBottom image="/images/work-clouds/bottom3.jpg" />
      <ImageBottom image="/images/work-clouds/bottom4.jpg" />
      <ImageBottom image="/images/work-clouds/bottom5.jpg" />
      <ImageBottom image="/images/work-clouds/bottom6.jpg" />
    </div>
  );
};

export default WorkCloud;
