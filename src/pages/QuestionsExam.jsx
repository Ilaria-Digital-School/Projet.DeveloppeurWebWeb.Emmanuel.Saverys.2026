import { useEffect, useMemo, useState } from "react";
import data from "../data/allQuestions.json";
import useDocumentMeta from "../component/useDocumentMeta";

// Paramètres utilisés par défaut.
const DEFAULT_SETTINGS = {
  cards: 3,
  openByDefault: true,
  compactMode: false,
  animations: true,
};

export default function QuestionsExam() {
  // Récupère les questions depuis le JSON.
  const questions = data.questions || data;

  // Regroupe les questions par numéro de série.
  const grouped = useMemo(() => {
    const g = {};

    questions.forEach((q) => {
      // Crée un tableau pour cette série si nécessaire.
      if (!g[q.id]) {
        g[q.id] = [];
      }

      // Ajoute la question à sa série.
      g[q.id].push(q);
    });

    return g;
  }, [questions]);

  // Récupère les numéros de série et les classe dans l'ordre. Object.keys() est une méthode JavaScript qui permet de récupérer toutes les clés (propriétés) d'un objet sous forme de tableau.
  const series = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => a - b);

  // Récupère les données de la dernière session , parse String -> obj json
  const saved = JSON.parse(localStorage.getItem("exam") || "{}");

  // Mémorise la série actuellement sélectionnée.
  const [serie, setSerie] = useState(saved.serie || series[0]);

  // Garde également le numéro affiché dans le champ de saisie.
  const [serieInput, setSerieInput] = useState(
    String(saved.serie || series[0])
  );

  // Mémorise la position de la question actuelle.
  const [index, setIndex] = useState(saved.index || 0);

  // Mémorise l'état d'affichage de chaque réponse (ouverte ou masquée).
  const [openMap, setOpenMap] = useState({});

  // Récupère les préférences sauvegardées ou utilise les paramètres par défaut.
  const [settings, setSettings] = useState(
    saved.settings || DEFAULT_SETTINGS
  );

  // Contrôle l'ouverture de la fenêtre des paramètres.
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Récupère les questions de la série sélectionnée.
  const current = grouped[serie] || [];

  // Sauvegarde la progression et les paramètres à chaque modification. stringify obj json -> string
  useEffect(() => {
    localStorage.setItem(
      "exam",
      JSON.stringify({
        serie,
        index,
        settings,
      })
    );
  }, [serie, index, settings]);

  // Change de série et remet la navigation à zéro.
  const changeSerie = (newSerie) => {
    const value = Number(newSerie);

    setSerie(value);
    setSerieInput(String(value));
    setIndex(0);
    setOpenMap({});
  };

  // Sélectionne une série au hasard.
  const randomSerie = () => {
    const random = series[Math.floor(Math.random() * series.length)]; // arrondir un nombre à l'entier inférieur et random

    changeSerie(random);
  };

  // Ouvre ou masque la réponse de la question correspondant à son index.
  //ex : {
  //0: true,
  //1: false,
  //2: true
  //}
  const toggleAnswer = (index) => {
    setOpenMap((prev) => ({
      ...prev,
      [index]: !prev[index], // inverse l'index precis de la rep if true => false 
    }));
  };

  // Retourne la classe CSS selon la catégorie de la question.
  const getBadge = (cat) => {
    if (cat === "VI" || cat === "VE") return "ve";

    if (cat === "QSER") return "qser";

    return "secours";
  };

  // Affiche trois questions ou uniquement celle sélectionnée.
  const visibleQuestions =
    settings.cards === 3 ? current.slice(0, 3) : [current[index]];
  // mod 3 cartes current.slice(0, 3) ["Question 1", "Question 2", "Question 3"]
  // mode 1 carte [current[index]]  ["Question 2"]

  // Définit le titre et la description de la page.
  useDocumentMeta({
    title: "Laboratoire | ECSR Rafa Auto Conduite",
    description:
      "Entraînez-vous avec toutes les séries de questions du permis B. Suivez votre progression et révisez efficacement grâce à notre quiz complet.",
    canonical: "https://ecsr-rafa.com/laboratoire",
  });


  return (
    <div className="exam-page">

      {/* Titre principal de la page */}
      <div className="exam-header">
        <h1>Laboratoire</h1>
      </div>

      {/* Saisie du numéro de série et accès aux paramètres */}
      <div className="serie-header">
        <div className="serie-title">
          <span>Série</span>

          <input
            type="number"
            min={series[0]}
            max={series[series.length - 1]}
            value={serieInput}
            onChange={(e) => {
              const value = e.target.value;

              setSerieInput(value);

              // Attend qu'un numéro soit saisi.
              if (value === "") return;

              const number = Number(value);

              // Change de série uniquement si elle existe.
              if (grouped[number]) {
                setSerie(number);
                setIndex(0);
                setOpenMap({});
              }
            }}
          />
        </div>

        {/* Ouvre la fenêtre des paramètres */}
        <button
          className="settings-btn"
          onClick={() => setSettingsOpen(true)}
        >
          ⚙
        </button>
      </div>

      {/* Sélection d'une série dans la liste ou choix aléatoire */}
      <div className="serie-header">
        <div className="series-select">
          <select
            value={serie}
            onChange={(e) => changeSerie(e.target.value)}
          >
            {series.map((s) => (
              <option key={s} value={s}>
                Série {s}
              </option>
            ))}
          </select>
        </div>

        {/* Sélectionne une série au hasard */}
        <button
          className="random-btn"
          onClick={randomSerie}
          title="Série aléatoire"
        >
          🔀
        </button>
      </div>

      {/* Affichage des questions sous forme de cartes */}
      <div
        className={`questions ${settings.cards === 3 ? "grid-3" : "grid-1"}`}
      >
        {visibleQuestions.map((question, i) => (
          <div
            key={i}
            className={`question-card ${settings.compactMode ? "compact" : ""}`}
          >
            {/* Affiche la catégorie de la question avec sa couleur */}
            <span className={`badge ${getBadge(question.categorie)}`}>
              {question.categorie}
            </span>

            {/* Affiche l'intitulé de la question */}
            <h3>{question.question}</h3>

            {/* Affiche le bouton pour ouvrir ou masquer la réponse si le mode automatique est désactivé */}
            {!settings.openByDefault && (
              <button
                className="answer-btn"
                onClick={() => toggleAnswer(i)}
              >
                {openMap[i] ? "Masquer la réponse" : "Voir la réponse"}
              </button>
            )}

            {/* Affiche la réponse automatiquement ou uniquement après un clic */}
            {(settings.openByDefault || openMap[i]) && (
              <div className="answer">{question.reponse}</div>
            )}
          </div>
        ))}
      </div>

      {/* Affiche la navigation des catégories uniquement en mode 1 carte */}
      {settings.cards !== 3 && (
        <div className="question-nav">

          {/* Sélectionne la catégorie VE / VI et réinitialise l'affichage des réponses */}
          <button
            className={`qbtn q-blue ${index === 0 ? "active" : ""}`}
            onClick={() => {
              setIndex(0);
              setOpenMap({});
            }}
          >
            VE / VI
          </button>

          {/* Sélectionne la catégorie QSER et réinitialise l'affichage des réponses */}
          <button
            className={`qbtn q-purple ${index === 1 ? "active" : ""}`}
            onClick={() => {
              setIndex(1);
              setOpenMap({});
            }}
          >
            QSER
          </button>

          {/* Sélectionne la catégorie premiers secours et réinitialise l'affichage des réponses */}
          <button
            className={`qbtn q-green ${index === 2 ? "active" : ""}`}
            onClick={() => {
              setIndex(2);
              setOpenMap({});
            }}
          >
            1ers secours
          </button>
        </div>
      )}

      {/* Fenêtre de configuration des paramètres */}
      {settingsOpen && (
        <div
          className="settings-overlay"
          onClick={() => setSettingsOpen(false)}
        >
          <div
            className="settings-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="settings-header">
              <h3>Paramètres</h3>

              {/* Ferme la fenêtre des paramètres */}
              <button
                className="close-settings"
                onClick={() => setSettingsOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Active ou désactive l'affichage automatique des réponses */}
            <label>
              Réponses auto
              <input
                type="checkbox"
                checked={settings.openByDefault}
                onChange={() =>
                  setSettings((prev) => ({
                    ...prev,
                    openByDefault: !prev.openByDefault,
                  }))
                }
              />
            </label>

            {/* Active le mode 3 cartes ou revient au mode 1 carte */}
            <label>
              Mode 3 cartes
              <input
                type="checkbox"
                checked={settings.cards === 3}
                onChange={() =>
                  setSettings((prev) => ({
                    ...prev,
                    cards: prev.cards === 3 ? 1 : 3,
                  }))
                }
              />
            </label>

            {/* Active ou désactive l'affichage compact des cartes */}
            <label>
              Interface compacte
              <input
                type="checkbox"
                checked={settings.compactMode}
                onChange={() =>
                  setSettings((prev) => ({
                    ...prev,
                    compactMode: !prev.compactMode,
                  }))
                }
              />
            </label>
          </div>
        </div>
      )}

      {/* Navigation vers la série précédente ou suivante */}
      <div className="multiChoice-navigation">

        {/* Passe à la série précédente si elle existe */}
        <button
          className="nav-btn prev"
          disabled={series.indexOf(serie) === 0}
          onClick={() => changeSerie(series[series.indexOf(serie) - 1])}
        >
          ← Série précédente
        </button>

        {/* Passe à la série suivante si elle existe */}
        <button
          className="nav-btn next"
          disabled={series.indexOf(serie) === series.length - 1}
          onClick={() => changeSerie(series[series.indexOf(serie) + 1])}
        >
          Série suivante →
        </button>

      </div>

    </div>
  );

} 