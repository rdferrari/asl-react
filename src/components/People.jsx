import React from "react";

import PeopleList from "../data/people.json";

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
              image="/images/people/barbara.png"
            />
            <KeyPeople
              name="Pare Keiha"
              position="Chair"
              image="/images/people/pare.png"
            />
          </div>
        </header>

        <div className="content-group-people">
          <h2 className="title-black">People (Alphabetical)</h2>
          <div className="people-container">
            {PeopleList.map(person => (
              <Person key={person.id} name={person.name} image={person.image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
