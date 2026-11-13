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

// Contient les différents modèles de tutoriels et leurs étapes.
// Chaque tutoriel possède un nom permettant de l'identifier et un tableau d'étapes.
// Chaque étape peut contenir une image, une position, un titre et un texte explicatif.
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
  // Par défaut, tabNumber vaut 0 : le premier tutoriel est donc sélectionné.
  const tuto = tutosTemplates[tabNumber];

  // Référence directe vers la fenêtre du tutoriel dans le DOM.
  // Elle sera utilisée pour mesurer et ajuster sa hauteur.
  const popupRef = useRef(null); 

  // Détermine si le tutoriel doit être affiché au chargement du composant.
  const [visible, setVisible] = useState(() => {
    if (!tuto) return false;

    // Vérifie dans le localStorage si l'utilisateur a déjà accepté de ne plus afficher ce tutoriel.
    const accepted = localStorage.getItem(`tuto_${tuto.name}_accepted`);

    // Le tutoriel est affiché tant que l'utilisateur ne l'a pas désactivé définitivement.
    return accepted !== "true";
  });

  // Mémorise l'étape actuellement affichée dans le tutoriel.
  const [currentStep, setCurrentStep] = useState(0);

  // Mémorise si l'utilisateur a coché l'option pour ne plus afficher le tutoriel.
  const [dontShowAgain, setDontShowAgain] = useState(false);

  // Récupère les étapes du tutoriel sélectionné.
  // Le tableau vide évite une erreur si aucun tutoriel ne correspond au numéro reçu.
  const steps = tuto?.steps || [];

  useEffect(() => {
    // Empêche le défilement de la page lorsque le tutoriel est ouvert.
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      // Rétablit le défilement normal lorsque le tutoriel est fermé.
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    }

    // Rétablit les propriétés de défilement lorsque le composant est démonté
    // ou lorsque la valeur de visible change.
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    };
  }, [visible]);

  useEffect(() => {
    // Vérifie que la fenêtre existe et qu'il y a des étapes à mesurer.
    if (popupRef.current && steps.length > 0) {
      let maxHeight = 0;

      // Crée temporairement un élément HTML invisible pour mesurer le contenu de chaque étape.
      const tempDiv = document.createElement("div");
      tempDiv.style.position = "absolute";
      tempDiv.style.visibility = "hidden";

      // Utilise la même largeur que la fenêtre du tutoriel pour obtenir une mesure cohérente.
      tempDiv.style.width = `${popupRef.current.offsetWidth}px`;

      // Ajoute temporairement cet élément au DOM pour pouvoir mesurer sa hauteur.
      document.body.appendChild(tempDiv);

      steps.forEach((step) => {
        // Insère le titre et le texte de chaque étape dans l'élément temporaire.
        // Cela permet de mesurer la hauteur nécessaire pour chaque contenu.
        tempDiv.innerHTML = `
          <div style="display:flex; flex-direction: column; gap: 30px;">
            <h2>${step.title}</h2>
            <p>${step.text}</p>
          </div>
        `;

        // Compare les hauteurs pour conserver uniquement la plus grande.
        // Les 150 pixels supplémentaires correspondent à l'espace réservé au padding et aux boutons.
        maxHeight = Math.max(maxHeight, tempDiv.offsetHeight + 150); // +padding et boutons
      });

      // Supprime l'élément temporaire une fois les mesures terminées.
      document.body.removeChild(tempDiv);

      // Applique à la fenêtre du tutoriel la hauteur maximale calculée.
      // Ainsi, sa hauteur reste identique même lorsque l'on change d'étape.
      popupRef.current.style.height = `${maxHeight}px`;
    }
  }, [steps]);

  const closeTuto = () => {
    // Si l'utilisateur a coché l'option, mémorise son choix dans le navigateur.
    // localStorage conserve cette information même après la fermeture du navigateur.
    if (dontShowAgain && tuto) {
      localStorage.setItem(`tuto_${tuto.name}_accepted`, "true");
    }

    // Ferme le tutoriel en modifiant son état de visibilité.
    setVisible(false);
  };

  const nextStep = () => {
    // Passe à l'étape suivante uniquement si la dernière étape n'est pas atteinte.
    // Évite ainsi de dépasser le nombre total d'étapes.
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    // Revient à l'étape précédente uniquement si l'on n'est pas déjà à la première.
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  if (!tuto) return null;

  // Récupère les informations de l'étape actuellement sélectionnée.
  const step = steps[currentStep];

  return (
    <>
      {!visible && (
        // Affiche un bouton d'information pour permettre de rouvrir le tutoriel.
        <button
          className="tuto-reopen"
          onClick={() => {
            // Réinitialise le tutoriel à sa première étape avant de le rouvrir.
            setCurrentStep(0);
            setVisible(true);
          }}
        >
          <Info size={28}  />
        </button>
      )}

      {visible && (
        // Fond superposé à la page pour mettre le tutoriel au premier plan.
        <div className="tuto-overlay">
          <div className="tuto-popup" ref={popupRef}>
            {/* Ferme le tutoriel et enregistre éventuellement le choix de ne plus l'afficher. */}
            <button className="tuto-close" onClick={closeTuto}>
              ✕
            </button>

            {/* Applique une classe CSS différente selon la position définie pour chaque étape. */}
            <div className={`tuto-content ${step.position}`}>
              <div className="tuto-text">
                <h2>{step.title}</h2>
                <p>{step.text}</p>
              </div>

              {/* Affiche l'image associée à l'étape.
                  Si sa position vaut "hide", l'image est masquée. */}
              <img
                src={step.img}
                alt={step.title}
                className="tuto-image"
                style={{ display: step.position === "hide" ? "none" : "block" }}
              />
            </div>

            {/* Contrôles permettant de naviguer entre les différentes étapes. */}
            <div className="tuto-navigation">
              <button onClick={prevStep} disabled={currentStep === 0}>
                ←
              </button>

              {/* Affiche le numéro de l'étape actuelle et le nombre total d'étapes. */}
              <span>
                {currentStep + 1} / {steps.length}
              </span>

              <button
                onClick={nextStep}
                // Désactive le bouton suivant lorsque la dernière étape est atteinte.
                disabled={currentStep === steps.length - 1}
              >
                →
              </button>
            </div>

            {/* Case à cocher permettant de mémoriser le choix de l'utilisateur. */}
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={dontShowAgain}
                // Met à jour l'état selon que la case est cochée ou décochée.
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