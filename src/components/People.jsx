import React from "react";

import PeopleList from "../data/people.json";

const KeyPeople = ({ name, position, image, link }) => {
  return (
    <div className="">
      <a rel="noopener noreferrer" href={link} target="_blank">
        <img alt="Key people" className="people-image_key" src={image} />
        <div className="people-text">
          <p className="people-name_key">{name}</p>
          <p className="people-position">{position}</p>
        </div>
      </a>
    </div>
  );
};

const Person = ({ name, image, link }) => {
  return (
    <div className="">
      <a rel="noopener noreferrer" href={link} target="_blank">
        <img alt="Person" className="people-image" src={image} />
        <div className="people-text">
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
    <div className="main-box">
      <div className="main-header-box_black">
        <header>
          <h1 className="main-tagline">People / Tangata</h1>
          <h2 className="main-title">Key People</h2>
        </header>

        <div className="people-box">
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

        <div className="content-group-people">
          <h2 className="title-black">People (Alphabetical)</h2>
          <div className="person-box">
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
