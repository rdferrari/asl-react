import React from "react";

const OurVision = () => {
  return (
    <div>
      <header className="main-box">
        <div className="main-header-box">
          <h1 className="main-tagline">Our Vision / Whakatauki</h1>
          <h2 className="main-subtagline">Whakatauki</h2>
          <p className="main-tagline_sub">Ko te taiao ko au, Ko au te taiao.</p>
          <p className="main-tagline_sub_italic">
            The enviroment is me, I am the enviroment.
          </p>
        </div>

        <img
          alt="Antartica glaciar"
          className="main-full-image"
          src="/images/home-glaciarb.jpg"
        />
      </header>
      <div className="main-content-box">
        <div className="main-box-left">
          <h3 className="main-content-title">
            Whatungarongaro te tangata toitū te whenua.
          </h3>
          <p className="main-content-title-eng">
            As man disappears from sight, the land remains.
          </p>

          <p className="main-content-text">
            Whatungarongaro te tangata toitū te whenua. As man disappears from
            sight, the land remains. The New Zealand Art Science Lab at AUT
            expands the horizons of Art and Science by means of
            transdisciplinary research, communicating the imperative of
            preserving Earth’s threatened ecosystems, through ethical discourse
            and scholarly practice. Researchers in the Lab explore ways of
            creating new methods of inquiry in a supportive environment that
            seeks to advance understanding of our living planet through diverse
            yet complementary knowledge strands.
          </p>
          <p className="main-content-text">
            The Lab explores a sense of place and belonging in Aotearoa,
            creating a platform for a positive environmental future vision. This
            vision takes into account the importance of our complex ecosystems,
            acknowledges human and non-human connection and interdependence, and
            recalibrates notions of value to prioritise kaitiakitanga.
          </p>
          <p className="main-content-text">
            When artists and scientists work together unexpected ideas and
            discoveries emerge.
          </p>
        </div>
        <div className="main-box-right">
          <img
            alt="Ice"
            className="main-content-image"
            src="/images/our-vision-ice.png"
          />
          <img
            alt="Tree"
            className="main-content-image"
            src="/images/our-vision-tree.png"
          />
          <img
            alt="People"
            className="main-content-image"
            src="/images/our-vision-people.png"
          />
        </div>
      </div>
    </div>
  );
};

export default OurVision;
