
import React, { useEffect, useState } from 'react';

// Carte d'un avis client
const AvisCard = ({ avis, onClick }) => (
  <article className="avis-card-GM" onClick={onClick}>
    <div className="avis-card-GM__top">
      <span className="avis-card-GM__avatar">
        G
      </span>

      <div>
        <h3>Avis Google</h3>
        <p>{avis.authorName}</p>
      </div>
    </div>

    {/* Affichage des étoiles selon la note */}
    <div className="avis-card-GM__stars">
      {'★★★★★'}
    </div>

    <p className="avis-card-GM__text">{avis.text}</p>
    <small>{avis.time}</small>
  </article>
);

const CreateAvisGoogleMap = ({ avis = [] }) => {
  // Index du premier avis affiché et avis ouvert dans la modale
  const [index, setIndex] = useState(0);
  const [activeAvis, setActiveAvis] = useState(null);

  // Fait défiler les avis automatiquement
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % avis.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [activeAvis]);

  // Bloque le défilement de la page lorsque la modale est ouverte
  useEffect(() => {
    document.body.style.overflow = activeAvis !== null ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [activeAvis]);

  // Crée un tableau contenant jusqu'à 4 avis à afficher.
  // Le modulo (%) permet de revenir au début du tableau si nécessaire.
  const visibleAvis = Array.from(
    {
      length: Math.min(4, avis.length), // Définit le nombre d'avis à afficher : 4 maximum, ou moins s'il y en a moins de 4.
    },
    (_, i) => avis[(index + i) % avis.length] // Récupère les avis à partir de l'index actuel et revient au début du tableau si nécessaire.
    // _ : représente le premier paramètre (la valeur générée), qu'on n'utilise pas.
    //i : représente la position de l'élément dans le tableau créé.
  );

  // Passe à l'avis précédent ou suivant
  const changeAvis = (direction) => {
    setActiveAvis((prev) => (prev + direction + avis.length) % avis.length);
  };

  // Message si aucun avis n'est disponible
  if (!avis.length) {
    return <p className="avis-container-GM__empty">Aucun avis disponible.</p>;
  }

  return (
    <section className="avis-container-GM">

      {/* Titre de la section */}
      <div className="avis-heading-GM">
        <span>LA CONFIANCE DE NOS CLIENTS</span>
        <h2>Ils nous ont fait confiance</h2>
        <p>Découvrez les retours de nos clients sur nos prestations.</p>
      </div>

      <div className="avis-content-GM">

        {/* Résumé des avis Google */}
        <div className="avis-summary-GM">
          <span className="avis-summary-GM__google">G</span>
          <p className="avis-summary-GM__label">Avis Google</p>
          <strong>5.0<span>/5</span></strong>
          <div className="avis-summary-GM__stars">★★★★★</div>
          <p className="avis-summary-GM__count">+230 avis clients</p>

          <a
            href="https://www.google.com/maps/place/ECSR+-+%C3%89cole+de+Conduite+et+de+S%C3%A9curit%C3%A9+Routi%C3%A8re+RAFA/@45.7412407,-0.6625389,17z/data=!4m8!3m7!1s0x480103f11b5b3261:0xdaf1d38c5441129f!8m2!3d45.7412407!4d-0.6625389!9m1!1b1!16s%2Fg%2F11t9lm_fbf"
            target="_blank"
            rel="noreferrer"
          >
            Voir les avis <span>↗</span>
          </a>
        </div>

        {/* Liste des avis */}
        <div className="avis-list-GM">
          {visibleAvis.map((review, i) => (
            <AvisCard
              key={`${index}-${i}`}
              avis={review}
              onClick={() => setActiveAvis((index + i) % avis.length)}
            />
          ))}
        </div>
      </div>

      {/* Barre de progression */}
      <div className="avis-footer-GM">
        <span>AVIS CLIENTS</span>
        {/* Barre de progression */}
        <div className="avis-progress-GM">
          {/* Calcule le pourcentage de progression : +1 car l'index commence à 0, ×100 pour obtenir un pourcentage. */}
          <span style={{ width: `${((index + 1) / avis.length) * 100}%` }} />
        </div>

        {/* Affiche l'avis actuel et le nombre total, avec un zéro devant si nécessaire (01 au lieu de 1). */}
        <span>
          {index + 1} / {avis.length}
        </span>
      </div>

      {/* Modale affichant un avis en grand */}
      {activeAvis !== null && (
        <div className="avis-modal" onClick={() => setActiveAvis(null)}>

          <div onClick={(e) => e.stopPropagation()}>
            <AvisCard avis={avis[activeAvis]} />
          </div>

          {/* Les flèches arrêtent la propagation pour ne pas fermer la modale */}
          <button
            className="avis-modal__arrow"
            onClick={(e) => {
              e.stopPropagation();
              changeAvis(-1);
            }}
            aria-label="Avis précédent"
          >
            ‹
          </button>

          <button
            className="avis-modal__arrow avis-modal__arrow--right"
            onClick={(e) => {
              e.stopPropagation();
              changeAvis(1);
            }}
            aria-label="Avis suivant"
          >
            ›
          </button>

          <button
            className="avis-modal__close"
            onClick={() => setActiveAvis(null)}
            aria-label="Fermer"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
};

export default CreateAvisGoogleMap;
