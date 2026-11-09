import React from "react";
import CreateBgTitle from "../component/elements/createBg-Title";
import CreateInfos from "../component/elements/createInfos";
import CreateSideInfos from "../component/elements/createSideInfos";
import bgImage from "../assets/logo-BiWEc0AR.webp";
import carImg from "../assets/facadeVoiture.jpeg";
import litigeSlide from "../assets/litigeSlide.png";
import facadeImg from "../assets/faceVoiture.png";
import quizImg from "../assets/quizAcc.png";
import questionImg from "../assets/question-preRep.png";
import avisImg from "../assets/Avis.png";
import offreImg from "../assets/offreSlide.png";
import engagementImg from "../assets/engagementSlide.png";
import AvantageSlide from "../assets/AvantageSlide.png";
import keyImg from "../assets/key-g174a91332_1920-a9f6f4b8-1920w-Cgmi9X5r.webp";
import CreateLocation from "../component/elements/createLocation";
import pdfLitige from "../../public/PDF/REclamations ET LITIGE.pdf";
import useDocumentMeta from "../component/useDocumentMeta";
import CertifComp from "../component/elements/CertifComp";

const Accueil = () => {
  useDocumentMeta({
    title: "Auto-école Saintes | ECSR Rafa Auto Conduite – Permis B & Code",
    description:
      "Bienvenue chez ECSR Rafa Auto Conduite à Saintes. Formation permis B, code de la route et accompagnement personnalisé.",
    canonical: "https://ecsr-rafa.com/",
  });
  return (
    <div>
      <CreateBgTitle
        slides={[
          {
            image: facadeImg,
            title: "Auto-École Rafa Saintes",
            text: (
              <>
                Une formation de qualité pour réussir votre permis à prix
                réduit. Sans frais d'inscription ni frais de dossier !
              </>
            ),
          },
          {
            image: avisImg,
            title: "Des moniteurs qui font la différence !",
            text: (
              <>
                {" "}
                Progresse sans stress avec nos moniteurs passionnés et une
                méthode d’apprentissage efficace. Découvre pourquoi ECSR Rafa
                est fait pour toi.
              </>
            ),
          },
          {
            image: offreImg,
            title: "Nos offres de formation",
            text: (
              <>
                Découvrez nos formules pour préparer votre permis de conduire,
                que ce soit en boîte manuelle ou automatique : formation
                traditionnelle, conduite supervisée ou conduite accompagnée.
                <br />
                <a
                  href="/services"
                  style={{ color: "#ff64ec", textDecoration: "underline" }}
                >
                  consultez notre page Services
                </a>
                .
              </>
            ),
          },
          {
            image: AvantageSlide,
            title: (
              <>
                Découvre les différents types de conduite{" "}
                <a
                  style={{ color: "#ff64ec", textDecoration: "underline" }}
                  target="_blank"
                  href="/contact#services"
                >
                  ici
                </a>{" "}
                !
              </>
            ),
            text: (
              <>
                Apprends les différences entre la conduite tarditionnelle, la
                conduite accompagnée et la conduite supervisée. Découvre leurs
                avantages pour gagner de l’expérience, conduire plus sereinement
                et augmenter tes chances de réussir le permis.
              </>
            ),
          },
          {
            image: engagementImg,
            title: "Nos engagements",
            text: (
              <>
                Chez ECSR Rafa Auto Conduite, nous mettons en place des
                engagements clairs pour garantir un accompagnement sérieux et
                une écoute attentive de nos élèves. Découvrez les engagements
                que nous prenons concernant le suivi, l’écoute et le traitement
                de vos remarques.
                <br />
                <a
                  href="/contact#engagements"
                  target="_blank"
                  style={{ color: "#ff64ec", textDecoration: "underline" }}
                >
                  Découvrir nos engagements
                </a>
              </>
            ),
          },
          {
            image: questionImg,
            title: (
              <>
                Une question ? La réponse est{" "}
                <a
                  style={{ color: "#ff64ec", textDecoration: "underline" }}
                  target="_blank"
                  href="/contact"
                >
                  ici
                </a>
              </>
            ),
            text: (
              <>
                {" "}
                Consulte notre FAQ pour trouver rapidement des réponses sur
                l’examen du permis, les cours, le fonctionnement de l’auto-école
                et bien plus encore.
              </>
            ),
          },
          {
            image: litigeSlide,
            title: (
              <>
                Réclamations & litiges :{" "}
                <a
                  style={{ color: "#ff64ec", textDecoration: "underline" }}
                  target="_blank"
                  href={pdfLitige}
                >
                  accéder au PDF
                </a>
              </>
            ),
            text: (
              <>
                Accédez à notre tableau de gestion des réclamations et litiges :
                identification du problème, analyse des causes, mise en place de
                solutions correctives et suivi de leur efficacité. En cas de
                besoin, un médiateur peut également être saisi conformément à la
                réglementation en vigueur.
              </>
            ),
          },
          {
            image: quizImg,
            title: (
              <>
                Prépare tes 3 questions du permis{" "}
                <a
                  style={{ color: "#ff64ec", textDecoration: "underline" }}
                  target="_blank"
                  href="/quiz-permis-page"
                >
                  ici
                </a>{" "}
                !
              </>
            ),
            text: (
              <>
                Découvre nos deux quiz pour t’entraîner aux questions du permis{" "}
                . L’un est fidèle au PDF officiel, l’autre optimisé sans
                doublons (158 questions au lieu d’environ 300).
              </>
            ),
          },
        ]}
      />
      <CertifComp />
      <CreateSideInfos
        side="right"
        title="Votre Permis B au prix juste."
        text="Chez ECSR RAFA, profitez du confort, de la sécurité et de la fiabilité d'une auto-école traditionnelle à prix réduit. Nos formateurs expérimentés vous accompagnent pas à pas pour réussir votre code et votre conduite dans les meilleures conditions."
        btnTitle="Je m'inscris"
        btnLink="/contact#inscription"
        imageSrc={keyImg}
      />
      <CreateInfos
        side="left"
        image={bgImage}
        title1="Horaires de Conduite :"
        text1={<>Lundi au Samedi : 8h00 - 12h00 / 14h00 - 19h00</>}
        title2="Horaires de Code :"
        text2={
          <>
            Lundi : 17h00 - 19h00
            <br />
            Mardi au Samedi : 13h00 - 14h00
          </>
        }
        title3="Horaires d'Accueil :"
        text3={
          <>
            Lundi : 17h - 19h
            <br />
            Mardi : 9h - 12h / 14h - 18h
            <br />
            Mercredi : 9h - 14h
            <br />
            Du jeudi au samedi : 9h - 12h / 14h - 18h
          </>
        }
      />
      <CreateSideInfos
        side="right"
        title="NOS SERVICES"
        text="Conduite accompagnée, conduite supervisée, stage de code intensif ou encore formation à la sécurité routière… Choisir ECSR RAFA c'est privilégier pour votre permis B un enseignement de qualité grâce à l'expertise et la bienveillance de nos enseignants, tout en respectant votre budget !"
        btnTitle="Consulter les offres "
        btnLink="/services"
        imageSrc={carImg}
      />

      <CreateLocation
        address="ECSR École de Conduite et de Sécurité Routière RAFA 34 Rue des Fougères 17100 Saintes"
        title="Où nous trouver ?"
        text="Nous vous accueillons au 34 rue des Fougères à Saintes, dans un cadre pensé pour offrir des conditions optimales à la conduite !"
      />
    </div>
  );
};

export default Accueil;
