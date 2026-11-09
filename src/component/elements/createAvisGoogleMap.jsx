import React, { useState, useEffect } from 'react';

const AvisCard = ({ authorName, rating, text, time }) => (
  <div className="avis-card-GM">
    <h3 className="avis-card-GM__author">{authorName}</h3>
    <p className="avis-card-GM__rating">⭐ {rating} / 5</p>
    <p className="avis-card-GM__text">{text}</p>
    <small className="avis-card-GM__date">{time}</small>
  </div>
);

const CreateAvisGoogleMap = ({ avis }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => (document.body.style.overflow = '');
  }, [isOpen]);

  const openAvis = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeAvis = () => {
    setActiveIndex(null);
    setIsOpen(false);
  };

  const nextAvis = () => {
    setActiveIndex((prev) => (prev + 1) % avis.length);
  };

  const prevAvis = () => {
    setActiveIndex((prev) => (prev - 1 + avis.length) % avis.length);
  };

  return (
    <div className="avis-container-GM">
      <h2 className="avis-container-GM__title">• Avis Google Maps</h2>

      {avis && avis.length > 0 ? (
        avis.map((review, index) => (
          <div key={index} onClick={() => openAvis(index)}>
            <AvisCard {...review} />
          </div>
        ))
      ) : (
        <p className="avis-container-GM__empty">Aucun avis disponible.</p>
      )}

      {isOpen && activeIndex !== null && (
        <div className="avis-modal" onClick={closeAvis}>
          <div className="avis-modal-content" onClick={(e) => e.stopPropagation()}>
            <AvisCard {...avis[activeIndex]} />
          </div>

          <button className="arrow left" onClick={(e) => { e.stopPropagation(); prevAvis(); }}>‹</button>
          <button className="arrow right" onClick={(e) => { e.stopPropagation(); nextAvis(); }}>›</button>

          <button className="close-btn" onClick={closeAvis}>×</button>
        </div>
      )}
    </div>
  );
};

export default CreateAvisGoogleMap;
