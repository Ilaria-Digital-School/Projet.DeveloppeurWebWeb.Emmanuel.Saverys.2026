import React from "react";

const CreateTarif = ({ leftTitle, leftItems, rightTitle, rightItems }) => {
  return (
    <section className="tarif-section">
      <div className="tarif-wrapper">

    
        <div className="tarif-column">
          <h3>{leftTitle}</h3>

          {leftItems.map((item, index) => (
            <div className="tarif-row" key={index}>
              <div className="tarif-label">
                <span>{item.label}</span>
                {/* Affiche la note uniquement si item.note contient une valeur. */}
                {item.note && <small>{item.note}</small>}
              </div>
              <div className="tarif-price">{item.price}</div>
            </div>
          ))}
        </div>

      
        <div className="tarif-column">
          <h3>{rightTitle}</h3>

          {rightItems.map((item, index) => (
            <div className="tarif-row" key={index}>
              <div className="tarif-label">
                <span>{item.label}</span>
                {item.note && <small>{item.note}</small>}
              </div>
              <div className="tarif-price">{item.price}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CreateTarif;
