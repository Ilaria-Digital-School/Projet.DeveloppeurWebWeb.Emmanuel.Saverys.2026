import React, { useEffect, useState } from "react";

const CreateQuestionPermis = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);
  const [instantReset, setInstantReset] = useState(false);

  useEffect(() => {
    // Désactive transition
    setInstantReset(true);
    setFlipped(false);

    // Réactive transition après frame
    const timeout = setTimeout(() => {
      setInstantReset(false);
    }, 50);

    return () => clearTimeout(timeout);
  }, [question]);

  return (
    <div className="permis-card-wrapper">
      <div
        className={`permis-card ${flipped ? "flipped" : ""} ${
          instantReset ? "no-transition" : ""
        }`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="permis-card-face permis-front">
          <h3>Question</h3>
          <p>{question}</p>
          <span className="hint">Clique pour voir la réponse</span>
        </div>

        <div className="permis-card-face permis-back">
          <h3>Réponse</h3>
          <p>{answer}</p>
          <span className="hint">Clique pour revenir</span>
        </div>
      </div>
    </div>
  );
};

export default CreateQuestionPermis;

