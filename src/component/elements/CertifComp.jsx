import React from "react";

import label from "../../assets/label.jpg";
import cpf from "../../assets/CPF.jpg";
import unEuroLogo from "../../assets/permisUnEuroLogo.png";
import qualiopi from "../../assets/qualiopi.png";
import googleLogo from "../../assets/google.png";

const CertifComp = () => {
  return (
    <section>
      <div className="certif">
        {/* Gauche */}
        <a href="/label-qualite#cpf" target="_blank" className="hide-on-medium">
          <img src={cpf} alt="CPF" />
        </a>
        <a href="/label-qualite#ecole-qualite" target="_blank">
          <img src={label} alt="Label" />
        </a>

<a
  href="https://www.google.com/maps/place/ECSR+-+%C3%89cole+de+Conduite+et+de+S%C3%A9curit%C3%A9+Routi%C3%A8re+RAFA/@45.7412407,-0.6625389,17z/data=!4m8!3m7!1s0x480103f11b5b3261:0xdaf1d38c5441129f!8m2!3d45.7412407!4d-0.6625389!9m1!1b1!16s%2Fg%2F11t9lm_fbf?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  className="google-link"
>
  <div className="google">
    <div className="google__top">
      <img src={googleLogo} alt="Logo Google" />
      <span>4.9/5</span>
      <span className="stars">★★★★★</span>
    </div>

    <div className="google__bottom">
      <span className="desktop-text">( +200 retours clients sur Google Avis )</span>
      <span className="mobile-text">(+200 retours ...)</span>
    </div>
  </div>
</a>

        <a href="/label-qualite#certification-qualiopi" target="_blank">
          <img src={qualiopi} alt="Qualiopi"/>
        </a>
        <a href="/label-qualite#permis-un-euro" target="_blank" className="hide-on-medium">
          <img src={unEuroLogo} alt="Permis 1€" />
        </a>
      </div>
    </section>
  );
};

export default CertifComp;
