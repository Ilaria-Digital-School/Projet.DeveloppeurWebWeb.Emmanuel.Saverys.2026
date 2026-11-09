import React from "react";
import CreatePdfLink from "../component/elements/createPdfLink";
import CreateBgTitle from "../component/elements/createBg-Title";

import ReglementInterieur from "../../public/PDF/reglement intérieur.pdf";
import QuestionsVerificationsPermis from "../../public/PDF/questions-verifications.pdf";
import GuideVoyants from "../../public/PDF/guideVoyants.pdf";
import GestionDesRéclamations from "../../public/PDF/gestion des réclamations.pdf";
import ParcoursDeFormation from "../../public/PDF/PARCOURS DE FORMATION CATÉGORIE B.pdf";
import EvaluationDeDépart from "../../public/PDF/ÉVALUATION DE DEPART.pdf";
import EnjeuxDeLaFormation from "../../public/PDF/Enjeux de la formation.pdf";
import GuideUtilisationQuiz from "../../public/PDF/Guide d’Utilisation des Quiz.pdf";
import VotreAvisNousEstTrèsCher from "../../public/PDF/Questionnaire de satisfaction Elève.pdf";
import FormationPostPermis from "../../public/PDF/Formation post-permis.pdf";
import AAC from "../../public/PDF/AAC.pdf";
import ReclamLitige from "../../public/PDF/REclamations ET LITIGE.pdf";
import Pdp from "../../public/PDF/Procede-de-positionnement-et-devaluation2.pdf";
import CS from "../../public/PDF/J3DP00_DEPLIANT_CONDUITE_SUPERVISEE-web.pdf";
import CA from "../../public/PDF/J3NE01_CA-DEPLIANT-CONDUITE-ACCOMPAGNEE-web.pdf";
import HandicapPdf from "../../public/PDF/Handicap et permis.pdf";
import useDocumentMeta from "../component/useDocumentMeta";
import bgImage from "../assets/pdf-1783009_1280-CfA-P2t0.webp";
import coursTheorique from "../../public/PDF/coursTheorique.pdf";

const PagePDF = () => {
  useDocumentMeta({
    title: "Documents et PDF | ECSR Rafa Auto Conduite",
    description:
      "Téléchargez tous les documents et guides pratiques de l'auto-école ECSR Rafa : règlement intérieur, parcours de formation, guides, questionnaires de permis ...",
    canonical: "https://ecsr-rafa.com/page-pdf",
  });
  const formationPDFs = [
    {
      pdfUrl: CS,
      title: "CONDUITE_SUPERVISEE",
    },
    { pdfUrl: CA, title: "CONDUITE-ACCOMPAGNEE" },
    { pdfUrl: AAC, title: "AAC" },
  ];
  const permisPDFs = [
    {
      pdfUrl: QuestionsVerificationsPermis,
      title: "Questions vérifications permis",
    },
    { pdfUrl: GuideVoyants, title: "Guide des voyants du tableau de bord" },
    { pdfUrl: GuideUtilisationQuiz, title: "Guide d’Utilisation des Quiz" },
  ];
  const documentsAdministratifs = [
    { pdfUrl: ReglementInterieur, title: "Règlement Intérieur" },
    { pdfUrl: GestionDesRéclamations, title: "Gestion des réclamations" },
    { pdfUrl: ReclamLitige, title: "Reclamations et litige" },
    { pdfUrl: EnjeuxDeLaFormation, title: "Enjeux de la formation" },
    { pdfUrl: Pdp, title: "Procede de positionnement" },
    { pdfUrl: coursTheorique, title: "Cours théoriques et post permis" },
  ];
  const parcoursFormation = [
    { pdfUrl: ParcoursDeFormation, title: "Parcours de formation" },
    { pdfUrl: EvaluationDeDépart, title: "Evaluation de départ" },
    { pdfUrl: Pdp, title: "Procede de positionnement" },
  ];
  const informationsEleves = [
    {
      pdfUrl: VotreAvisNousEstTrèsCher,
      title: "Votre avis nous est très cher !",
    },
    { pdfUrl: FormationPostPermis, title: "Formation Post Permis" },
    { pdfUrl: HandicapPdf, title: "Handicap et permis !" },
  ];

  const renderPDFs = (pdfArray) =>
    pdfArray.map((pdf, index) => (
      <CreatePdfLink key={index} pdfUrl={pdf.pdfUrl} title={pdf.title} />
    ));

  return (
    <section>
      <CreateBgTitle
        slides={[
          {
            image: bgImage,
            title: "Documents et PDF",
            text: "Consultez et téléchargez tous nos fichiers officiels et guides pratiques.",
          },
        ]}
      />

      <div className="pdf-category">
        <h2
          style={{
            textAlign: "center",
            margin: "2rem 0 1rem",
            color: "#c92453",
          }}
        >
          Documents Administratifs :
        </h2>
        <div
          className="page-pdf-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            justifyContent: "center",
            padding: "1rem",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {renderPDFs(documentsAdministratifs)}
        </div>
      </div>

      <div className="pdf-category">
        <h2
          style={{
            textAlign: "center",
            margin: "2rem 0 1rem",
            color: "#c92453",
          }}
        >
          Informations Eleves :
        </h2>
        <div
          className="page-pdf-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            justifyContent: "center",
            padding: "1rem",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {renderPDFs(informationsEleves)}
        </div>
      </div>
      <div className="pdf-category">
        <h2
          style={{
            textAlign: "center",
            margin: "2rem 0 1rem",
            color: "#c92453",
          }}
        >
          Type de conduite :
        </h2>
        <div
          className="page-pdf-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            justifyContent: "center",
            padding: "1rem",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {renderPDFs(formationPDFs)}
        </div>
        <h2
          style={{
            textAlign: "center",
            margin: "2rem 0 1rem",
            color: "#c92453",
          }}
        >
          Aide à l'examen du permis :
        </h2>
        <div
          className="page-pdf-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            justifyContent: "center",
            padding: "1rem",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {renderPDFs(permisPDFs)}
        </div>
      </div>
    </section>
  );
};

export default PagePDF;
