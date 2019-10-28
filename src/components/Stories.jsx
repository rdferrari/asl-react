import React, { Component } from "react";
import { Link } from "react-router-dom";

import StoriesList from "../data/stories.json";

const Stories = () => {
  return (
    <div className="content-container-full">
      <div className="content-container-black">
        <header>
          <h1>Recent Stories / Te kōrero hou</h1>
        </header>
        <div className="content-group-black">
          <div className="content-black">
            <h2 className="title-black">Drones for Conservation</h2>
            <p className="intro-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="button-one bt-small">
              <Link to="/">See more</Link>
            </button>
          </div>
          <div className="images-black">
            <img className="image-right" src="/images/our-vision-ice.png" />
            <img className="image-right" src="/images/our-vision-tree.png" />
          </div>
        </div>

        <div className="content-group-black">
          <div className="content-black">
            <h2 className="title-black">Drones for Conservation</h2>
            <p className="intro-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="button-one bt-small">
              <Link to="/">See more</Link>
            </button>
          </div>
          <div className="images-black">
            <img className="image-right" src="/images/our-vision-ice.png" />
            <img className="image-right" src="/images/our-vision-tree.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
