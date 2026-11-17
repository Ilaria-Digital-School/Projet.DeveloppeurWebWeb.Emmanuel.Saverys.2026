import React from "react";

const AvisCard = ({ rating = 5, comment, name, moniteur, photo }) => {
  const defaultAvatar =
    "https://ui-avatars.com/api/?name=Client&background=eee&color=555";

  return (
    <div className="avis-card">
      <div className="avis-user-top">
        <img src={photo || defaultAvatar} alt={name} className="avis-avatar" />
        <p className="avis-name">{name}</p>
      </div>

      <div className="avis-stars">
        {/* Génère cinq étoiles pour représenter la note maximale. */}
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            // Remplit les étoiles jusqu'à la note attribuée par nom de classe.
            className={i < rating ? "star filled" : "star"}
          >
            ★
          </span>
        ))}
      </div>

      <p className="avis-comment">« {comment} »</p>

      <p className="avis-moniteur">
        Moniteur <strong>{moniteur}</strong>
      </p>
    </div>
  );
};

export default AvisCard;
