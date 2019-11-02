import React from "react";
import News from "./News";
import ImageBottom from "./ImageBottom";
import Story from "./Story";

const StoryRemote = () => {
  return (
    <div>
      <Story
        header="Remote Sensing - Namibia"
        intro="The DroneLab has been part of a team using drones for stocktakes of “extremophile” organisms living in Africa’s Namib Desert, where surface temperatures reach 68oC."
        imageHeader="/images/story-remote/dunas.jpg"
        text="Their research, which turned out some innovative new approaches to spatial analysis, caught the attention of scientists working on a Search for Extraterrestrial Intelligence (SETI) Institute programme, in similarly hostile conditions in South America’s famed Atacama Desert. They invited Bollard to Nasa’s Ames Research Centre in California, where they mapped out a collaboration involving more work at both regions over the coming years. For scientists hunting for life in the universe, such extreme environments provided a useful analogue to learn how it was that organisms could adapt and survive with little to sustain them. With a multi-spectral camera mounted on custom built drones, along with a hand-held hyperspectral instrument on the ground, they were able to characterise the spectral reflectance of one the most unique plant species on the planet. “On this planet, we hope our research will inform global policy makers on the importance of life in extreme desert systems as sentinels of climate change,” Bollard said."
        imageTextOne="/images/story-remote/plant.jpg"
        imageTextTwo="/images/story-remote/namibia-wide-combo.jpg"
      />

      <div className="story-container-news">
        <News
          image="/images/story-remote/drone-barbara.jpg"
          title="NZ scientist teams up with alien-hunting SETI effort"
          text="A Kiwi scientist has teamed up with an alien-hunting programme for a study taking her to some of the most extreme spots on Earth."
          link="https://www.nzherald.co.nz/nz/news/article.cfm?c_id=1&objectid=12122476"
        />
        <News
          image="/images/story-drone/ted-barbara.jpg"
          title="Mapping by drone - Africa to Antartica"
          text="While some drones are used to destroy, Barbara’s team uses them –
          complete with military guidance technology – to map threatened
          ecosystems in Africa, Australia and Antarctica."
          link="https://tedxauckland.com/talks/mapping-by-drone-africa-to-antartica/"
        />
        <News
          image="/images/story-remote/drone-close.jpg"
          title="Up, Up and Away"
          text="When traditional technology was no longer able to answer the conservation questions AUT’s Dr Barbara Bollard-Breen was asking, she found a solution in drones. And other industries are seeing the potential too. Erin McKenzie investigates the benefits of having eyes in the sky."
          link="https://idealog.co.nz/casestudies/and-away-auts-dr-bollard-breen"
        />
      </div>

      <ImageBottom image="/images/story-remote/dunas-feet.jpg" />
    </div>
  );
};

export default StoryRemote;
