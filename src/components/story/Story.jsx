import React from "react";

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
    <div className="story-box">
      <header className="main-image-box">
        <div className="main-header-box">
          <h1 className="story-tagline">{header}</h1>
          <p className="story-intro">{intro}</p>
        </div>
        <img
          alt="Maori tree"
          className="home-full-width-img"
          src={imageHeader}
        />
      </header>

      <div className="story-content-box">
        <div className="story-container-flex">
          <p className="story-text">{text}</p>
          <div>
            <img alt="" className="story-image" src={imageTextOne} />
            <img alt="" className="story-image" src={imageTextTwo} />
          </div>
        </div>
      </div>
      {news === true ? (
        <h2 className="story-news-tag">News Coverage / Purongo</h2>
      ) : null}
    </div>
  );
};

export default Story;
