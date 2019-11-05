import React from "react";
import { Link } from "react-router-dom";

import StoriesList from "../data/stories.json";

const Stories = () => {
  return (
    <div className="main-box">
      <div className="main-header-box_black">
        <header>
          <h1 className="main-tagline">Recent Stories / Te kōrero hou</h1>
        </header>
      </div>

      {StoriesList.map(story => (
        <div key={story.id} className="main-content-box_black">
          <div className="main-box-left">
            <h2 className="main-title">{story.title}</h2>
            <p className="main-intro">{story.intro}</p>
            <p className="main-intro_sub">{story.text}</p>
            <button className="button-one bt-small">
              <Link to={story.link}>See more</Link>
            </button>
          </div>
          <div className="main-box-right">
            <img
              alt="Recent stories images"
              className="main-content-image"
              src={story.image_one}
            />
            <img
              alt="Recent stories images"
              className="main-content-image"
              src={story.image_two}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
