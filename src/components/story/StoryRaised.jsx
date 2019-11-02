import React from "react";
import News from "./News";
import ImageBottom from "./ImageBottom";
import Story from "./Story";

const StoryRaised = () => {
  return (
    <div>
      <Story
        header="Raised up Sky"
        intro="As part of AUT’s artist residency 2019, Joseph Michael will create the first ever life-size digital reconstruction of New Zealand’s largest known living kauri tree, Tāne Mahuta, located in the Waipoua Forest in the Northland region."
        imageHeader="/images/story-raised/tane-header.jpg"
        text="The project crosses traditional boundaries between Science and Art, allowing the interplay of information, data and scientific tools to inform the Artwork. In turn the Artwork is helping to inform critical forest management and forest ecology decisions, as well as providing a digital archive of these significant cultural and historical heritage sites. Mapping and recreating Tāne Mahuta and other significant Kauri trees of the Waipoua forest as a life-size virtual image, Joseph is working in conjunction with AUT’s Associate Professor Barbara Bollard, Ashray Doshi and Professor Len Gillman, School of Science, who are studying the trees from a scientific perspective at the same time. The team is also collaborating with Te Roroa iwi and the Department of Conservation and is supported by Radio NZ and Creative New Zealand. “It’s an exciting opportunity to expand our knowledge of one of NZ’s most treasured species, we need to think deeper and understand the consequences of our actions toward the natural environment,” says Joseph. “The opportunity to work across disciplines at AUT is fantastic, I’m working directly with scientists in the creation of this work and aiming to produce a visual meeting point between Mātauranga Māori and western science.” Joseph adds. Joseph is one of New Zealand’s most exciting artists, and his work, which is moving ever closer to bring art and science together, is something that is a natural fit for a University of Technology."
        imageTextOne="/images/story-raised/tane-real.jpg"
        imageTextTwo="/images/story-raised/tane-full.jpg"
      />

      <div className="story-container-news">
        <News
          image="/images/story-raised/tane-full.jpg"
          title="Tūrama Festival puts our most majestic trees in the spotlight"
          text="When Joseph Michael became an artist nearly two decades ago, the tools of his trade included paper, ink and screens for printmaking; today, he’s more likely to use ground-penetrating radar, drones and immersive augmented reality."
          link="https://www.nzherald.co.nz/entertainment/news/article.cfm?c_id=1501119&objectid=12252019"
        />
      </div>

      <ImageBottom image="/images/story-raised/tane-bottom.jpg" />
    </div>
  );
};

export default StoryRaised;
