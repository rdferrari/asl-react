import React from "react";

const News = ({ image, title, text, link }) => {
  return (
    <div className="story-container-flex">
      <img alt="" className="story-image-news" src={image} />
      <div className="story-news-content">
        <h3 className="story-title-news">{title}</h3>
        <p className="story-text-news">{text}</p>
        <button className="button-two bt-small">
          <a rel="noopener noreferrer" target="_blank" href={link}>
            Read more
          </a>
        </button>
      </div>
    </div>
  );
};

export default News;
