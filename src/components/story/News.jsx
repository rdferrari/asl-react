import React from "react";
import { Link } from "react-router-dom";

const News = ({ image, title, text, link }) => {
  return (
    <div className="story-container-flex">
      <img className="story-image-news" src={image} />
      <div className="story-news-content">
        <h3 className="story-title-news">{title}</h3>
        <p className="story-text-news">{text}</p>
        <button className="button-two bt-small">
          <Link to={link}>Read more</Link>
        </button>
      </div>
    </div>
  );
};

export default News;
