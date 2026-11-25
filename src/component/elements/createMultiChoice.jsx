
import React from "react";
import PdfReg from "/PDF/questions-verifications.pdf";
import useDocumentMeta from "../useDocumentMeta";

const CreateMultiChoice = () => {
  useDocumentMeta({
    title: "Méthodes d'apprentissage | ECSR Rafa Auto Conduite",
    description:
      "Découvrez nos différentes méthodes d'apprentissage des questions du permis B : laboratoire, quiz académique, quiz synthèse et PDF officiel.",
    canonical: "https://ecsr-rafa.com/quiz-permis-page",
  });

  return (
    <main className="multiChoice-page">

      {/* EN-TÊTE */}
      <header className="multiChoice-hero">
        <h1>Choisissez votre méthode d’apprentissage</h1>

        <p>
          Nous proposons 3 approches différentes pour préparer efficacement
          vos questions de permis. Un laboratoire et deux formats quiz adaptés
          à différents profils d’apprentissage.
          <strong> Totalement gratuit.</strong>
        </p>

        <a
          href={PdfReg}
          target="_blank"
          rel="noopener noreferrer"
          className="multiChoice-btn"
          style={{ marginTop: "30px" }}
        >
          Consulter le PDF officiel
        </a>
      </header>

      <div className="multiChoice-container">

        {/* LABORATOIRE */}
        <section className="multiChoice-card multiChoice-card--primary">
          <h2>Laboratoire</h2>

          <p>
            Un espace de travail intégré au site, conçu pour s'entraîner
            aux questions du permis de manière progressive.
            Les questions sont générées et organisées en séries pour
            faciliter la révision et le suivi des progrès.
            <br />
            <strong>100 séries · 3 questions par série</strong>
          </p>

          <a
            href="/laboratoire"
            target="_blank"
            rel="noopener noreferrer"
            className="multiChoice-btn secondary"
          >
            Accéder au laboratoire
          </a>
        </section>

        {/* QUIZ */}
        <div className="multiChoice-bottom">

          {/* QUIZ ACADÉMIQUE */}
          <section className="multiChoice-card multiChoice-card--quiz">
            <h3>Quiz Méthode Académique</h3>

            <div className="card-content">
              <p>100 séries · 3 questions par série</p>
              <p>300 questions et 300 réponses exactes</p>
              <p>Formulation officielle identique</p>
              <p>Apprentissage précis et académique</p>
            </div>

            <a
              href="/quiz-academique"
              className="multiChoice-btn secondary"
            >
              Accéder au Quiz Académique
            </a>
          </section>

          {/* QUIZ SYNTHÈSE */}
          <section className="multiChoice-card multiChoice-card--quiz">
            <h3>Quiz Méthode Synthèse</h3>

            <div className="card-content">
              <p>158 questions optimisées</p>
              <p>142 doublons ou questions similaires supprimés</p>
              <p>Notions identiques couvertes</p>
              <p>Apprentissage rapide et efficace</p>
            </div>

            <a
              href="/quiz-synthese"
              className="multiChoice-btn secondary"
            >
              Accéder au Quiz Synthèse
            </a>
          </section>

        </div>
      </div>
    </main>
  );
};

export default CreateMultiChoice;
