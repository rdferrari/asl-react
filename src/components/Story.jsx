import React from "react";
import { Link } from "react-router-dom";

const Story = () => {
  console.log(window.location.hash);
  return (
    <div>
      <header className="image-container">
        <div className="home-header-text">
          <h1 className="story-tagline">Drones for Conservation</h1>
          <p className="story-intro">
            Associate Professor Barbara Bollard, together with UAV engineer
            Ashray Doshi and Biogeographer Len Gillman, led three expeditions to
            Antarctica, where the team used custom built drones to map
            vegetation (mainly mosses and lichens) with cameras modified to
            capture electro-magnetic signatures reflected from the unique
            plants.
          </p>
        </div>
        <img
          className="full-image"
          src="/images/story-drone/drone-close-filter.jpg"
        />
      </header>
      <div className="story-container">
        <div className="story-container-flex">
          <p className="story-intro-text">
            The maps provided baseline data for follow-up surveys monitoring
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
            experience some of Antarctica's human history.
          </p>
          <div>
            <img
              className="story-image-text"
              src="/images/story-drone/drone-pilot.jpg"
            />
            <img
              className="story-image-text"
              src="/images/story-drone/team-photo-drones.jpg"
            />
          </div>
        </div>

        <h2 className="story-news-title">News Coverage / Purongo</h2>
        <div className="story-container-flex">
          <img
            className="story-image-news"
            src="/images/story-drone/ted-barbara.jpg"
          />
          <div className="story-news-content">
            <h3 className="story-title-news">
              Mapping by drone - Africa to Antartica
            </h3>
            <p className="story-text-news">
              While some drones are used to destroy, Barbara’s team uses them –
              complete with military guidance technology – to map threatened
              ecosystems in Africa, Australia and Antarctica.
            </p>
            <button className="button-two bt-small">
              <Link to="">Read more</Link>
            </button>
          </div>
        </div>
      </div>

      <img
        className="full-image story-image-fix"
        src="/images/story-drone/landscape-lab.jpg"
      />
      <img
        className="full-image story-image-fix"
        src="/images/story-drone/house-lab.jpg"
      />
      <img
        className="full-image story-image-fix"
        src="/images/story-drone/barbara.jpg"
      />
      <img
        className="full-image story-image-fix"
        src="/images/story-drone/glaciar.jpg"
      />
    </div>
  );
};

export default Story;
