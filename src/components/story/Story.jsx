import React from "react";
import News from "./News";
import ImageBottom from "./ImageBottom";

const Story = ({
  header,
  intro,
  imageHeader,
  text,
  imageTextOne,
  imageTextTwo,
  news
}) => {
  return (
    <div>
      <header className="image-container">
        <div className="home-header-text">
          <h1 className="story-tagline">{header}</h1>
          <p className="story-intro">{intro}</p>
        </div>
        <img className="full-image" src={imageHeader} />
      </header>
      <div className="story-container">
        <div className="story-container-flex">
          <p className="story-intro-text">{text}</p>
          <div>
            <img className="story-image-text" src={imageTextOne} />
            <img className="story-image-text" src={imageTextTwo} />
          </div>
        </div>
        {news === true ? (
          <h2 className="story-news-title">News Coverage / Purongo</h2>
        ) : null}
      </div>
    </div>
  );
};

export default Story;
