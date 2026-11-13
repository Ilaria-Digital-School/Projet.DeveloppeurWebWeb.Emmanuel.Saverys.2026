import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const CreateSideInfos = ({
  side = "left",
  title,
  text,
  btnTitle,
  btnLink,
  imageSrc,
}) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Détecte l'entrée du composant dans la zone visible de l'écran.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Arrête l'observation après la première apparition du composant.
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      // visible declenche l animation scss
      className={`create-side-infos ${visible ? "visible" : ""}`}
    >
      <div className={`content-wrapper ${side === "right" ? "right" : "left"}`}>
        <div className="image-container">
          <img src={imageSrc} alt={title} />
        </div>

        <div className="text-container">
          <h2>{title}</h2>
          {typeof text === "string" ? <p>{text}</p> : text}

          {/* Affiche le bouton uniquement si son titre et son lien sont renseignés. */}
          {btnTitle && btnLink && (
            <Link
              to={btnLink}
              className="btn-sideinfo"
              // Remonte la page en haut lors du clic sur le lien.
              onClick={() => window.scrollTo(0, 0)}
            >
              {/* Affiche le texte du bouton et une flèche décorative. */}
              {btnTitle} <span className="btn-arrow">{">"}</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CreateSideInfos;
