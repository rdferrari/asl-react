import React from "react";
import { Link } from "react-router-dom";

import StoriesList from "../data/stories.json";

const Stories = () => {
  return (
    <div className="content-container-full">
      <div className="content-container-black">
        <header>
          <h1 className="tagline">Recent Stories / Te kōrero hou</h1>
        </header>
        {StoriesList.map(story => (
          <div key={story.id} className="content-group-black">
            <div className="content-black">
              <h2 className="title-black">{story.title}</h2>
              <p className="intro-black">{story.intro}</p>
              <p className="intro-black_sub">{story.text}</p>
              <button className="button-one bt-small">
                <Link to={story.link}>See more</Link>
              </button>
            </div>
            <div className="images-black">
              <img
                alt="Recent stories images"
                className="image-right"
                src={story.image_one}
              />
              <img
                alt="Recent stories images"
                className="image-right"
                src={story.image_two}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
