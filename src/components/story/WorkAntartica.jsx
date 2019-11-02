import React from "react";
import News from "./News";
import ImageBottom from "./ImageBottom";
import Story from "./Story";

const WorkAntartica = () => {
  return (
    <div>
      <Story
        header="Photogrammetry Hillary Hut, Antarctica"
        intro="A partnership led by Assoc Prof Barbara Bollard (Science) and Gregory Bennett (Art and Design) has produced the world’s first VR experience of an entire historic hut in Antarctica."
        imageHeader="/images/work-antartica/header.jpg"
        text="The team has been mapping 3D models of the interior and exterior of historical huts for VR experiences so soon the public will be able to experience some of Antarctica’s human history. By being able to view the hut and surrounding areas in 3D, scientists can look at the relationship between where things grow, how they grow and how they are influenced by a warming climate, whereas artists can use the same models to create experiences for the wider public to engage with the remote environment in a powerful and meaningful way. The artists challenge the scientists to think beyond “data” and to question the results in new ways with new lines of inquiry. The first hut to be launched in October 2019 (by the Prime Minister) will be the TAE Hut, commonly referred to as Sir Edmund Hillary’s Hut. People will be invited to step inside Hillary’s Hut and to explore the first building at what is now New Zealand’s Scott Base. It is a fully immersive experience, which includes a guided tour through the hut, celebrates New Zealand’s first leadership presence in Antarctica as part of the Trans-Antarctic Expedition and International Geophysical Year. The virtual reality experience will be freely available at selected institutions around New Zealand, as well as being accessible online internationally. The core ArtScience team working on Antarctic Historic Huts with the Antarctica Heritage Trust. Lee Strickland, Len Gillman, PhD student Katarina Markovic, Gregory Bennett, Barbara Bollard (front). Second image is an example of the radio room in the VR experience. The core ArtScience team working on Antarctic Historic Huts with the Antarctica Heritage Trust. Lee Strickland, Len Gillman, PhD student Katarina Markovic, Gregory Bennett, Barbara Bollard (front). Second image is an example of the radio room in the VR experience."
        imageTextOne="/images/work-antartica/content.jpg"
        imageTextTwo="/images/work-antartica/content2.jpg"
        news={true}
      />

      <div className="story-container-news">
        <News
          image="/images/work-antartica/new1.jpg"
          title="Antarctic Virtual Reality Announced"
          text="The Trust is thrilled to have partnered with Auckland University of Technology to create a ground-breaking virtual reality experience of Sir Edmund Hillary’s Antarctic hut."
          link="https://nzaht.org/antarctic-virtual-reality-announced/"
        />
      </div>

      <ImageBottom image="/images/work-antartica/bottom1.jpg" />
    </div>
  );
};

export default WorkAntartica;
