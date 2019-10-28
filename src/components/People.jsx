import React from "react";
import { Link } from "react-router-dom";

// import PeopleList from "../data/people.json";

const KeyPeople = ({ name, position, image }) => {
  return (
    <div className="key-people-container">
      <img className="key-people-image" src={image} />
      <div className="key-people-texts">
        <p className="key-people-name">{name}</p>
        <p className="key-people-position">{position}</p>
      </div>
    </div>
  );
};

const Person = ({ name, image }) => {
  return (
    <div className="person-container">
      <img className="people-image" src={image} />
      <div className="key-people-texts">
        <p className="people-name">{name}</p>
      </div>
    </div>
  );
};

const People = () => {
  return (
    <div className="people-container">
      <div className="content-container-black">
        <header>
          <h1>People / Tangata</h1>
          <h2 className="title-black">Key People</h2>
          <div className="key-people-row-container">
            <KeyPeople
              name="Barbara Bollard"
              position="Director"
              image="/images/image-key-people.png"
            />
            <KeyPeople
              name="Barbara Bollard"
              position="Director"
              image="/images/image-key-people.png"
            />
          </div>
        </header>

        <div className="content-group-people">
          <h2 className="title-black">People (Alphabetical)</h2>
          <div className="people-container">
            <Person name="Ali Taheri" image="/images/image-key-people.png" />
            <Person name="Ali Taheri" image="/images/image-key-people.png" />
            <Person name="Ali Taheri" image="/images/image-key-people.png" />
            <Person name="Ali Taheri" image="/images/image-key-people.png" />
            <Person name="Ali Taheri" image="/images/image-key-people.png" />
            <Person name="Ali Taheri" image="/images/image-key-people.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
