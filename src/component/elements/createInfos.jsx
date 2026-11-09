import React from "react";

const CreateSideInfos = ({ image, title1, text1, title2, text2, title3, text3 }) => {
  return (
    <section className="side-infos">
      <div className="side-infos__image">
        <img src={image} alt={title1} />
      </div>

      <div className="side-infos__content">
        <div className="block">
          <h3>{title1}</h3>
          <p>{text1}</p>
        </div>

        <span className="separator" />

        <div className="block">
          <h3>{title2}</h3>
          <p>{text2}</p>
        </div>

        <span className="separator" />

        <div className="block">
          <h3>{title3}</h3>
          <p>{text3}</p>
        </div>
      </div>
    </section>
  );
};

export default CreateSideInfos;

