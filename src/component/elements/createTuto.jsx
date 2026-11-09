import React, { useState, useEffect, useRef } from "react";
import selectMode from "../../assets/slideTuto/Mode-Aca.png";
import filterAca from "../../assets/slideTuto/filtre-Aca.png";
import filterSynth from "../../assets/slideTuto/filtres-Synth.png";
import compteurAca from "../../assets/slideTuto/compteur-Aca.png";
import compteurSynth from "../../assets/slideTuto/compteur-Synth.png";
import card from "../../assets/slideTuto/Card.png";
import searchBarAca from "../../assets/slideTuto/searchBar-Aca.webp";
import searchBarSynth from "../../assets/slideTuto/searchBar-Synth.webp";
import btnSerie from "../../assets/slideTuto/btnSerie-Aca.png";
import btnQust from "../../assets/slideTuto/btnNextQust-Synth.png";
import compteurSerie from "../../assets/slideTuto/Compteur.png";
import refresh from "../../assets/slideTuto/refresh.webp";
import { Info } from "lucide-react";

const tutosTemplates = [
  {
    name: "quiz-Synthèse",
    steps: [
      {
        position: "hide",
        title: "Tuto Quiz Synthèse",
        text: "Révise les questions essentielles sans doublons, tout en conservant une base complète. Filtre par catégorie pour cibler tes points faibles. Progression sauvegardée automatiquement (sur le même appareil).",
      },
      {
        img: filterSynth,
        position: "top",
        title: "Filtrage par catégorie",
        text: "Le bouton 'Toutes' affiche toutes les séries. Les autres boutons permettent de cibler un type spécifique (ex: VE/VI).",
      },
      {
        img: searchBarSynth,
        position: "bottom",
        title: "Barre de recherche",
        text: "La barre permet de rechercher et de filtrer tous les mots mots-clé correspondants (ex : SAIP). La recherche respecte le filtre choisi.",
      },
      {
        img: compteurSynth,
        position: "bottom",
        title: "Questions restantes",
        text: "Indique combien de questions restent avant la fin du quiz.",
      },
      {
        img: card,
        position: "left",
        title: "Carte de question",
        text: "Clique dessus pour voir la réponse",
      },
      {
        img: btnQust,
        position: "bottom",
        title: "Question suivante",
        text: "Passe directement à la question suivante.",
      },
      {
        img: refresh,
        position: "right",
        title: "Réinitialiser le quiz",
        text: "Le bouton 'Réinitialiser' ramène le quiz au début (ex : 158/158 questions restantes)",
      },
    ],
  },
  {
    name: "quiz-Académique",
    steps: [
      {
        position: "hide",
        title: "Tuto Quiz Académique",
        text: "Séries dans l’ordre officiel, mêmes questions/réponses. Quelques VE/VI ont un commentaire pour les réponses vides. Progression sauvegardée automatiquement.",
      },
      {
        img: selectMode,
        position: "bottom",
        title: "Modes de navigation",
        text: "Standard : questions dans l'ordre officiel. Aléatoire : questions mélangées pour varier l'apprentissage. La progression est sauvegardée automatiquement.",
      },
      {
        img: filterAca,
        position: "top",
        title: "Filtrage par catégorie",
        text: "Le bouton 'Toutes' affiche toutes les séries. Les autres boutons permettent de cibler un type spécifique (ex: VE/VI).",
      },
      {
        img: compteurAca,
        position: "bottom",
        title: "Numéro de série",
        text: "Chaque série contient exactement 3 questions avec les mêmes réponses que dans le questionnaire officiel.",
      },
      {
        img: searchBarAca,
        position: "bottom",
        title: "Barre de recherche",
        text: "Clique sur l'icône loupe pour faire apparaître la barre de recherche et accéder directement à une série.",
      },
      {
        img: card,
        position: "left",
        title: "Carte de question",
        text: "Chaque question est sur une carte. Clique pour voir la réponse et clique à nouveau pour revenir à la question.",
      },
      {
        img: compteurSerie,
        position: "bottom",
        title: "Navigation dans la série",
        text: "Chaque série a 3 questions. Les flèches permettent de passer de l'une à l'autre. Le compteur indique la position actuelle.",
      },
      {
        img: btnSerie,
        position: "bottom",
        title: "Série suivante",
        text: "Le bouton 'Série suivante' permet de passer directement à la série suivante.",
      },
      {
        img: refresh,
        position: "right",
        title: "Réinitialiser le quiz",
        text: "Le bouton 'Réinitialiser' ramène le quiz au début : série 1, question 1.",
      },
    ],
  },
];

const CreateTuto = ({ tabNumber = 0 }) => {
  const tuto = tutosTemplates[tabNumber];
  const popupRef = useRef(null); 

  const [visible, setVisible] = useState(() => {
    if (!tuto) return false;
    const accepted = localStorage.getItem(`tuto_${tuto.name}_accepted`);
    return accepted !== "true";
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const steps = tuto?.steps || [];

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    };
  }, [visible]);

  useEffect(() => {
    if (popupRef.current && steps.length > 0) {
      let maxHeight = 0;
      const tempDiv = document.createElement("div");
      tempDiv.style.position = "absolute";
      tempDiv.style.visibility = "hidden";
      tempDiv.style.width = `${popupRef.current.offsetWidth}px`;
      document.body.appendChild(tempDiv);

      steps.forEach((step) => {
        tempDiv.innerHTML = `
          <div style="display:flex; flex-direction: column; gap: 30px;">
            <h2>${step.title}</h2>
            <p>${step.text}</p>
          </div>
        `;
        maxHeight = Math.max(maxHeight, tempDiv.offsetHeight + 150); // +padding et boutons
      });

      document.body.removeChild(tempDiv);
      popupRef.current.style.height = `${maxHeight}px`;
    }
  }, [steps]);

  const closeTuto = () => {
    if (dontShowAgain && tuto) {
      localStorage.setItem(`tuto_${tuto.name}_accepted`, "true");
    }
    setVisible(false);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  if (!tuto) return null;

  const step = steps[currentStep];

  return (
    <>
      {!visible && (
        <button
          className="tuto-reopen"
          onClick={() => {
            setCurrentStep(0);
            setVisible(true);
          }}
        >
          <Info size={28}  />
        </button>
      )}

      {visible && (
        <div className="tuto-overlay">
          <div className="tuto-popup" ref={popupRef}>
            <button className="tuto-close" onClick={closeTuto}>
              ✕
            </button>

            <div className={`tuto-content ${step.position}`}>
              <div className="tuto-text">
                <h2>{step.title}</h2>
                <p>{step.text}</p>
              </div>
              <img
                src={step.img}
                alt={step.title}
                className="tuto-image"
                style={{ display: step.position === "hide" ? "none" : "block" }}
              />
            </div>

            <div className="tuto-navigation">
              <button onClick={prevStep} disabled={currentStep === 0}>
                ←
              </button>
              <span>
                {currentStep + 1} / {steps.length}
              </span>
              <button
                onClick={nextStep}
                disabled={currentStep === steps.length - 1}
              >
                →
              </button>
            </div>

            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={dontShowAgain}
                onChange={(e) => setDontShowAgain(e.target.checked)}
              />
              Ne plus afficher ce tutoriel
            </label>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateTuto;
