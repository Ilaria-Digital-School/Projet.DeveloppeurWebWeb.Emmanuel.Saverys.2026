import React from "react";

const TopInfos = ({ image, title1, text1, title2, text2, title3, text3 }) => {
  return (
    <section className="top-infos">
      <div>
        <div className="top-infos__container">
          {/* TEXTE */}
          <div className="top-infos__content">
            <div className="top-infos__block">
              <h3 className="top-infos__title">{title1}</h3>
              <p className="top-infos__text">{text1}</p>
            </div>

            <div className="top-infos__separator" />

            <div className="top-infos__block">
              <h3 className="top-infos__title">{title2}</h3>
              <p className="top-infos__text">{text2}</p>
            </div>

            <div className="top-infos__separator" />

            <div className="top-infos__block">
              <h3 className="top-infos__title">{title3}</h3>
              <p className="top-infos__text">{text3}</p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="top-infos__banner">
            <img src={image} alt="infos" />
          </div>
        </div>

        <div className="top-infos__link">
          <a href="https://www.canva.com/design/DAHEfGU9--w/ACTFc5QF559vMsdpPMha2g/view" target="_blank" rel="noopener noreferrer">
             Cliquez ici pour accéder au PDF officiel !
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopInfos;
