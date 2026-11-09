import { useEffect, useMemo, useState } from "react";
import data from "../data/allQuestions.json";

const DEFAULT_SETTINGS = {
  cards: 3,
  openByDefault: true,
  compactMode: false,
  animations: true,
};

export default function QuestionsExam() {
  const questions = data.questions || data;

  const grouped = useMemo(() => {
    const g = {};

    questions.forEach((q) => {
      if (!g[q.id]) g[q.id] = [];
      g[q.id].push(q);
    });

    return g;
  }, [questions]);
  const randomSerie = () => {
    const random = series[Math.floor(Math.random() * series.length)];
    changeSerie(random);
  };
  const series = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => a - b);

  const saved = JSON.parse(localStorage.getItem("exam") || "{}");

  const [serie, setSerie] = useState(saved.serie || series[0]);

  const [serieInput, setSerieInput] = useState(
    String(saved.serie || series[0]),
  );

  const [index, setIndex] = useState(saved.index || 0);

  const [openMap, setOpenMap] = useState({});

  const [settings, setSettings] = useState(saved.settings || DEFAULT_SETTINGS);

  const [settingsOpen, setSettingsOpen] = useState(false);

  const current = grouped[serie] || [];

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
  const changeSerie = (newSerie) => {
    const value = Number(newSerie);

    setSerie(value);
    setSerieInput(String(value));
    setIndex(0);
    setOpenMap({});
  };

  const toggleAnswer = (i) => {
    setOpenMap((prev) => ({
      ...prev,
      [i]: !prev[i],
    }));
  };

  const getBadge = (cat) => {
    if (cat === "VI" || cat === "VE") return "ve";

    if (cat === "QSER") return "qser";

    return "secours";
  };

  const visibleQuestions =
    settings.cards === 3 ? current.slice(0, 3) : [current[index]];

  return (
    <div className="exam-page">
      <div className="exam-header">
        <h1>Laboratoire</h1>
      </div>

      {/* HEADER SERIE + INPUT + SETTINGS */}
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

              if (value === "") return;

              const number = Number(value);

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
      {/* QUESTIONS */}
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

            {!settings.openByDefault && (
              <button className="answer-btn" onClick={() => toggleAnswer(i)}>
                {openMap[i] ? "Masquer la réponse" : "Voir la réponse"}
              </button>
            )}

            {(settings.openByDefault || openMap[i]) && (
              <div className="answer">{question.reponse}</div>
            )}
          </div>
        ))}
      </div>

      {/* NAV (MODE 1 CARTE UNIQUEMENT) */}
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

      {/* SETTINGS MODAL */}
      {settingsOpen && (
        <div
          className="settings-overlay"
          onClick={() => setSettingsOpen(false)}
        >
          <div className="settings-panel" onClick={(e) => e.stopPropagation()}>
            {/* HEADER SETTINGS */}
            <div className="settings-header">
              <h3>Paramètres</h3>

              <button
                className="close-settings"
                onClick={() => setSettingsOpen(false)}
              >
                ✕
              </button>
            </div>

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
