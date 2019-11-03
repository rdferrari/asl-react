import React from "react";
import { Link } from "react-router-dom";

import PeopleList from "../data/people.json";

const KeyPeople = ({ name, position, image, link }) => {
  return (
    <div className="key-people-container">
      <img className="key-people-image" src={image} />
      <div className="key-people-texts">
        <a href={link} target="_blank">
          <p className="key-people-name">{name}</p>
          <p className="key-people-position">{position}</p>
        </a>
      </div>
    </div>
  );
};

const Person = ({ name, image, link }) => {
  return (
    <div className="person-container">
      <a href={link} target="_blank">
        <img className="people-image" src={image} />
        <div className="key-people-texts">
          <p className="people-name">{name}</p>
        </div>
      </a>
    </div>
  );
};

const People = () => {
  // const PeopleListName = PeopleList.filter(people => people.name > 6);

  const PeopleListName = PeopleList.sort(function(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="people-container">
      <div className="content-container-black">
        <header>
          <h1 className="tagline">People / Tangata</h1>
          <h2 className="title-black">Key People</h2>
          <div className="key-people-row-container">
            <KeyPeople
              name="Barbara Bollard"
              position="Director"
              image="/images/people/barbara.png"
              link="https://www.aut.ac.nz/profiles?id=em57148&asset=267682"
            />
            <KeyPeople
              name="Pare Keiha"
              position="Chair"
              image="/images/people/pare.png"
              link="https://www.aut.ac.nz/research/professors-listing/pare-keiha"
            />
          </div>
        </header>

        <div className="content-group-people">
          <h2 className="title-black">People (Alphabetical)</h2>
          <div className="people-container">
            {PeopleListName.map(person => (
              <Person
                key={person.id}
                name={person.name}
                image={person.image}
                link={person.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
