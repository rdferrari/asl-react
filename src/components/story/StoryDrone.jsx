import React from "react";
import News from "./News";
import ImageBottom from "./ImageBottom";
import Story from "./Story";

const StoryDrone = () => {
  return (
    <div>
      <Story
        header="Drones for Conservation"
        intro="Associate Professor Barbara Bollard, together with UAV engineer
            Ashray Doshi and Biogeographer Len Gillman, led three expeditions to
            Antarctica, where the team used custom built drones to map
            vegetation (mainly mosses and lichens) with cameras modified to
            capture electro-magnetic signatures reflected from the unique
            plants."
        imageHeader="/images/story-drone/drone-close-filter.jpg"
        text="The maps provided baseline data for follow-up surveys monitoring
            changes to vegetation. The research is being used to understand
            human impacts and provide solutions that would help conserve
            Antarctic landforms at risk from climate change. There are limited
            resources to monitor the past and cumulative effects of humans, but
            drones proved successful at working in conditions that are so
            different, cold and extreme heat. They were able to map the
            footprint of camping sites and walking trails, some of which are
            several years old, and find artifacts from sites that date back to
            1911 – all while creating high-resolution baseline maps of the areas
            from the thousands of images captured by the drones. Many of the
            projects the DroneLab have worked on in Antarctica have been turned
            into virtual reality (VR) experiences, giving insights into
            parameters that would not have been otherwise noticed. They are now
            able to view areas in 3D and in a fully immersive environment
            allowing them to investigate the relationships between where things
            grow and how they grow. More recently the team have provided time
            and expertise to map 3D models of the interior and exterior of the
            historic huts for VR experiences, so soon the public will be able to
            experience some of Antarctica's human history."
        imageTextOne="/images/story-drone/drone-pilot.jpg"
        imageTextTwo="/images/story-drone/team-photo-drones.jpg"
      />

      <div className="story-container-news">
        <News
          image="/images/story-drone/ted-barbara.jpg"
          title="Mapping by drone - Africa to Antartica"
          text="While some drones are used to destroy, Barbara’s team uses them –
          complete with military guidance technology – to map threatened
          ecosystems in Africa, Australia and Antarctica."
          link="/"
        />
        <News
          image="/images/story-drone/antartida-top.jpg"
          title="Stunning 3D Scott Base model created by drone"
          text="New Zealand’s Antarctic outpost has been recreated in a stunning 3D model,
          allowing people to view Scott Base from any aerial angle."
          link="/"
        />
        <News
          image="/images/story-drone/team-photo-drones.jpg"
          title="Digital mapping of Antartica"
          text="Professor Barbara Bollard-Breen uses drones to map 
          the specially protected area around Scott Base in Antarctica."
          link="/"
        />
        <News
          image="/images/story-drone/drone.jpg"
          title="Up, Up and Away"
          text="When traditional technology was no longer able to answer the conservation questions AUT’s Dr Barbara Bollard-Breen was asking, she found a solution in drones. And other industries are seeing the potential too. 
          Erin McKenzie investigates the benefits of having eyes in the sky."
          link="/"
        />
      </div>

      <ImageBottom image="/images/story-drone/landscape-lab.jpg" />
      <ImageBottom image="/images/story-drone/house-lab.jpg" />
      <ImageBottom image="/images/story-drone/barbara.jpg" />
      <ImageBottom image="/images/story-drone/glaciar.jpg" />
    </div>
  );
};

export default StoryDrone;
