import { useEffect, useMemo, useState } from "react";
import data from "../data/allQuestions.json";
import useDocumentMeta from "../component/useDocumentMeta";

// Définit les paramètres utilisés par défaut.
const DEFAULT_SETTINGS = {
  cards: 3,
  openByDefault: true,
  compactMode: false,
  animations: true,
};

export default function QuestionsExam() {
  // Récupère les questions, quel que soit le format du JSON.
  const questions = data.questions || data;

  // Regroupe les questions par identifiant pour retrouver facilement chaque série.
  const grouped = useMemo(() => {
    const g = {};
    //forEach() permet de parcourir un tableau et d'exécuter une action pour chaque élément
    questions.forEach((q) => {
      // Crée un groupe s'il n'existe pas encore.
      if (!g[q.id]) g[q.id] = [];

      // Ajoute la question dans son groupe.
      g[q.id].push(q);
    });

    return g;
  }, [questions]);

  // Récupère les numéros de séries et les trie dans l'ordre croissant.
  const series = Object.keys(grouped)
    .map(Number) // Convertit les valeurs en nombres : "4" => 4.
    .sort((a, b) => a - b); // Trie dans l'ordre croissant.

  // Récupère les données sauvegardées pour restaurer la dernière session ou crée un objet vide.
  const saved = JSON.parse(localStorage.getItem("exam") || "{}");

  // Stocke la série, la question et les préférences de l'utilisateur sinon part de 0.
  const [serie, setSerie] = useState(saved.serie || series[0]);

  const [serieInput, setSerieInput] = useState(
    String(saved.serie || series[0]), // Récupère la série sauvegardée ou prend la première série disponible.
  );

  const [index, setIndex] = useState(saved.index || 0); // Position de la question.

  const [openMap, setOpenMap] = useState({}); //état React qui mémorise quelles réponses sont ouvertes ou masquées ex qser open les 2 autres hide.

  const [settings, setSettings] = useState(
    saved.settings || DEFAULT_SETTINGS,
  );// save settings

  const [settingsOpen, setSettingsOpen] = useState(false);// settings page

  // Récupère les questions de la série sélectionnée ou rien pour eviter fausse valeur 
  const current = grouped[serie] || [];

  // Sauvegarde les changements pour conserver la progression après rechargement.
  useEffect(() => {
    localStorage.setItem(
      "exam",
      JSON.stringify({
        serie,
        index,
        settings,
      }),
    );
  }, [serie, index, settings]);

  // Change de série actuelle et réinitialise la navigation et les réponses ouvertes q14 index 3 . q15 i 1 .
  const changeSerie = (newSerie) => {
    const value = Number(newSerie);

    setSerie(value);
    setSerieInput(String(value));
    setIndex(0);
    setOpenMap({});
  };

  // Sélectionne une série au hasard parmi les séries disponibles.
  const randomSerie = () => {
    const random = series[Math.floor(Math.random() * series.length)]; //fllor()arrondit à l'entier inférieur et length adapte ce nombre au nombre de séries disponibles
    changeSerie(random);
  };

  // Affiche ou masque une réponse en fonction de son index.
  const toggleAnswer = (i) => {
    setOpenMap((prev) => ({
      ...prev,
      [i]: !prev[i], // prends index d'avant car tableau commence par i 0 et les question par id 1 
    }));
  };

  // Retourne la classe CSS correspondant à la catégorie de question.
  const getBadge = (cat) => {
    if (cat === "VI" || cat === "VE") return "ve";

    if (cat === "QSER") return "qser";

    return "secours";
  };

  // Choisit les 3 premières questions ou uniquement celle sélectionnée.
  const visibleQuestions =
    settings.cards === 3 ? current.slice(0, 3) : [current[index]];

  // Définit les informations SEO de la page.
  useDocumentMeta({
    title: "Laboratoire | ECSR Rafa Auto Conduite",
    description:
      "Entraînez-vous avec toutes les séries de questions du permis B. Suivez votre progression et révisez efficacement grâce à notre quiz complet.",
    canonical: "https://ecsr-rafa.com/laboratoire",
  });

  return (
    <div className="exam-page">
      <div className="exam-header">
        <h1>Laboratoire</h1>
      </div>

      {/* Permet de saisir une série et d'accéder aux paramètres. */}
      <div className="serie-header">
        <div className="serie-title">
          <span>Série</span>

          <input
            type="number"
            min={series[0]}
            max={series[series.length - 1]} // prends index d'avant car tableau commence par i 0 et les question par id 1 
            value={serieInput}
            onChange={(e) => {
              const value = e.target.value;

              setSerieInput(value);

              if (value === "") return;

              const number = Number(value);

              // Change de série uniquement si le numéro existe.
              if (grouped[number]) {
                setSerie(number);
                setIndex(0);
                setOpenMap({});
              }
            }}
          />
        </div>

        <button className="settings-btn" onClick={() => setSettingsOpen(true)}>
          ⚙
        </button>
      </div>

      {/* Permet de sélectionner une série ou d'en choisir une au hasard. */}
      <div className="serie-header">
        <div className="series-select">
          <select value={serie} onChange={(e) => changeSerie(e.target.value)}>
            {series.map((s) => (
              <option key={s} value={s}>
                Série {s}
              </option>
            ))}
          </select>
        </div>

        <button
          className="random-btn"
          onClick={randomSerie}
          title="Série aléatoire"
        >
          🔀
        </button>
      </div>

      {/* Affiche les questions sous forme de cartes. */}
      <div
        className={`questions ${settings.cards === 3 ? "grid-3" : "grid-1"}`}
      >
        {visibleQuestions.map((question, i) => (
          <div
            key={i}
            className={`question-card ${settings.compactMode ? "compact" : ""}`}
          >
            <span className={`badge ${getBadge(question.categorie)}`}>
              {question.categorie}
            </span>

            <h3>{question.question}</h3>

            {/* Affiche le bouton uniquement si les réponses ne sont pas automatiques. */}
            {!settings.openByDefault && (
              <button className="answer-btn" onClick={() => toggleAnswer(i)}>
                {openMap[i] ? "Masquer la réponse" : "Voir la réponse"}
              </button>
            )}

            {/* Affiche la réponse automatiquement ou après un clic. */}
            {(settings.openByDefault || openMap[i]) && (
              <div className="answer">{question.reponse}</div>
            )}
          </div>
        ))}
      </div>

      {/* Permet de choisir une catégorie en mode une seule carte. */}
      {settings.cards !== 3 && (
        <div className="question-nav">
          <button
            className={`qbtn q-blue ${index === 0 ? "active" : ""}`}
            onClick={() => {
              setIndex(0);
              setOpenMap({});
            }}
          >
            VE / VI
          </button>

          <button
            className={`qbtn q-purple ${index === 1 ? "active" : ""}`}
            onClick={() => {
              setIndex(1);
              setOpenMap({});
            }}
          >
            QSER
          </button>

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

      {/* Fenêtre permettant de personnaliser l'affichage. */}
      {settingsOpen && (
        <div
          className="settings-overlay"
          onClick={() => setSettingsOpen(false)}
        >
          <div className="settings-panel" onClick={(e) => e.stopPropagation()}>
            <div className="settings-header">
              <h3>Paramètres</h3>

              <button
                className="close-settings"
                onClick={() => setSettingsOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Modifie l'affichage automatique des réponses. */}
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

            {/* Permet de passer entre le mode une carte et trois cartes. */}
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

            {/* Active ou désactive la présentation compacte. */}
            <label>
              Interface compacte
              <input
                type="checkbox"
                checked={settings.compactMode}
                onChange={() =>
                  setSettings((prev) => ({
                    ...prev,
                    compactMode: !prev.compactMode, //inverse du mode precedant
                  }))
                }
              />
            </label>
          </div>
        </div>
      )}

      {/* Permet de passer à la série précédente ou suivante. */}
      <div className="multiChoice-navigation">
        <button
          className="nav-btn prev"
          disabled={serie <= series[0]}
          onClick={() => changeSerie(serie - 1)}
        >
          ← Série précédente
        </button>

        <button
          className="nav-btn next"
          disabled={serie >= series[series.length - 1]}
          onClick={() => changeSerie(serie + 1)}
        >
          Série suivante →
        </button>
      </div>
    </div>
  );
}