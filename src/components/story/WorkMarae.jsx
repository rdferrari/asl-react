import React from "react";
import ImageBottom from "./ImageBottom";
import Story from "./Story";

const WorkMarae = () => {
  return (
    <div>
      <Story
        header="AUT Marae Point Cloud"
        intro="Tikanga Māori in a virtual environment. The AUT Marae is called Ngā Wai o Horotiu: the waters of Horotiu. Horotiu was previously the name of the Pā site in the area now known as Albert Park in the city of Auckland. The chief of Horotiu Pā was the brother in-law of Apihai Te Kawau paramount chief of Ngāti Whātua."
        imageHeader="/images/work-marae/header.jpg"
        text="Digital storytelling traditional culture and language The point cloud project with Ngā Wai o Horotiu has given our culture the ability to transition our Purakau, traditional stories, whakatauaki, proverbs, waiata, music, karakia, sacred prayers, whakapapa, genealogy, into technologies that can be taken into other learning spaces to have engaging experiences from traditional knowledge. This project is a collaborative effort that will benefit the learning and teaching about Te Purengi for our staff and students. There is another important aspect of building the virtual model of Te Purengi and that is to be able to have a model to present to other Iwi, Māori tribes, to work with their people to create a model of their own Marae for teaching in their wananga, traditional places of learning their purakau, their stories. To preserve and present traditional indigenous knowledge with new digital technologies on mobile devices for teaching and learning."
        imageTextOne="/images/work-marae/content1.jpg"
        imageTextTwo="/images/work-marae/content2.jpg"
      />

      <ImageBottom image="/images/work-marae/bottom1.jpg" />
      <ImageBottom image="/images/work-marae/bottom2.jpg" />
      <ImageBottom image="/images/work-marae/bottom3.jpg" />
      <ImageBottom image="/images/work-marae/bottom4.jpg" />
      <ImageBottom image="/images/work-marae/bottom5.jpg" />
      <ImageBottom image="/images/work-marae/bottom6.jpg" />
    </div>
  );
};

export default WorkMarae;
