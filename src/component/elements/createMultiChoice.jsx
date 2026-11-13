import React from "react";
import PdfReg from "/PDF/questions-verifications.pdf"
import useDocumentMeta from "../useDocumentMeta";

const CreateMultiChoice = () => {
    useDocumentMeta({
    title: "Méthodes d'apprentissage | ECSR Rafa Auto Conduite",
    description: "Découvrez les différentes méthodes d'apprentissage des questions pour le permis B, le PDF officiel et nos deux quiz .",
    canonical: "https://ecsr-rafa.com/quiz-permis-page"
  });
  return (
    <div className="multiChoice-page">

      <div className="multiChoice-hero">
        <h1>Choisissez votre méthode d’apprentissage</h1>
        <p>
          Nous proposons 3 approches différentes pour préparer efficacement
          vos questions de permis. Un laboratoire et deux formats quiz
         <br /> adaptés  à différents profils d’apprentissage <strong> totalement gratuit</strong>.
        </p>
         <a
            href={PdfReg}
            target="_blank"
            rel="noopener noreferrer"
            className="multiChoice-btn"
            style={{marginTop: "30px"}}
          >
            Accéder au PDF Officiel
          </a>
      </div>

      <div className="multiChoice-container">

  <div className="multiChoice-card multiChoice-card--primary">

  <h2>Laboratoire</h2>

  <p>
    Le laboratoire est un espace de travail intégré au site, conçu pour s’entraîner au questions de permis de manière progressive. <br />
    Les questions sont générées et organisées en séries pour faciliter la révision et le suivi des progrès. <br />
    (100 séries — 1 série = 3 questions)
  </p>

  <a
    href="/laboratoire"
    target="_blank"
    rel="noopener noreferrer"
    className="multiChoice-btn secondary"
  >
    Accéder au Labo
  </a>

</div>

        <div className="multiChoice-bottom">

          <div className="multiChoice-card multiChoice-card--quiz">
            <h3>Quiz Méthode Académique (Nouveauté)</h3>

            <div className="card-content">
              <p>
                100 séries — 1 série = 3 questions
              </p>
              <p>
                300 questions et 300 réponses exactes
              </p>
              <p>
                Formulation officielle identique
              </p>
              <p>
                Apprentissage précis et académique
              </p>
            </div>

            <a href="/quiz-academique" className="multiChoice-btn secondary">
              Accéder au Quiz Académique
            </a>
          </div>

          <div className="multiChoice-card multiChoice-card--quiz">
            <h3>Quiz Méthode Synthèse (Nouveauté)</h3>

            <div className="card-content">
              <p>
                158 questions optimisées
              </p>
              <p>
                Suppression de 142 doublons ou très similaires
              </p>
              <p>
                Notions identiques couvertes
              </p>
              <p>
                Apprentissage rapide et efficace
              </p>
            </div>

            <a href="/quiz-synthese" className="multiChoice-btn secondary">
              Accéder au Quiz Synthèse
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreateMultiChoice;
