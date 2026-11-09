import React from "react";
import useDocumentMeta from "../component/useDocumentMeta";
import { FaWheelchair } from "react-icons/fa";

const Handicap = () => {
  useDocumentMeta({
    title: "Accessibilité Handicap | ECSR Rafa Auto Conduite",
    description:
      "Informations pour les personnes en situation de handicap souhaitant passer le permis de conduire avec ECSR Rafa Auto Conduite à Saintes.",
    canonical: "https://ecsr-rafa.com/handicap",
  });

  return (
    <div className="cookies-page">
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <FaWheelchair size={28} />
        Personne en situation de handicap
      </h1>
      <p>
        Vous avez un handicap et vous souhaitez passer le permis de conduire ?  <br />
        Notre auto-école peut vous accompagner pour obtenir votre sésame. Nous mettons à votre disposition ce qui suit :
      </p>
      <strong>
        Accessibilité fauteuil roulant, porte d’entrée et sortie de secours:
      </strong>
      <br />
      Sanitaires adaptés PMR.
      <br />
      Toutes les portes aux normes PMR.
      <br />
      Signalétique adaptée PMR.
      <br />
      Bureaux adaptés PMR.
      <br />
      <br />
      <strong>Moyens pédagogiques :</strong>
      <br />
      Accessibilité salle de code.
      <br />
      Code en ligne.
      <br />
      <br />
      <strong>Moyens techniques :</strong>
      <br />
      Véhicule muni d’une boîte de vitesse à changement de rapport automatique. <br />
      Ce véhicule peut être utilisé par toute personne souhaitant un apprentissage rapide et simplifié.
      <br />
      <br />
       <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          fontSize: "24px"
        }}
      >
         Inscription à l'examen du permis de conduire :
      </h1>
      <h2>• Si vous êtes sourd ou malentendant</h2>
      <p>
        Des sessions spécialisées sont prévues au moins 2 fois par an pour
        passer l’épreuve théorique générale (code) du permis de conduire.
      </p>
      <ul>
        <li>Un interprète en langue des signes peut vous assister.</li>
        <li>
          Vous pouvez aussi bénéficier d’un dispositif de communication adapté
          de votre choix.
        </li>
        <li>L’épreuve théorique (code) dure 1h30.</li>
        <li>
          Un temps supplémentaire peut être accordé lors de l’épreuve pratique
          en cas de difficultés pour communiquer.
        </li>
      </ul>
      <h2>• Si vous avez un handicap physique (mobilité réduite)</h2>
      <ul>
        <li>
          Un temps supplémentaire peut être accordé lors de l’épreuve pratique
          en cas de difficultés de mobilité.
        </li>
        <li>
          Pour l’épreuve pratique du permis B ou B1, l’inspecteur peut vous
          proposer de commencer l’examen par les questions et les vérifications
          techniques portant sur l’extérieur du véhicule.
        </li>
        <li>Vous pouvez être assisté par un expert ou un accompagnateur.</li>
      </ul>
      <p>
        Un véhicule de catégorie B à double commande adapté aux personnes
        handicapées doit remplir les conditions suivantes :
      </p>
      <ul>
        <li>
          Avoir été mis en circulation depuis 10 ans maximum, sauf exception
        </li>
        <li>
          Avoir des équipements spécifiques : double-commande de freinage,
          rétroviseurs supplémentaires à l’extérieur et à l’intérieur si le
          véhicule le permet
        </li>
        <li>double-commande de direction (volant)</li>
      </ul>
      <h2>• Si vous êtes dysphasique, dyslexique, dyspraxique</h2>
      <p>
        Vous pouvez passer le code dans des séances spécifiques à condition de
        fournir l’un des 3 justificatifs suivants :
      </p>
      <ul>
        <li>
          Reconnaissance de qualité de travailleur handicapé (RQTH) ou
          reconnaissance de handicap obtenue auprès de la maison départementale
          des personnes handicapées (MDPH) et un diagnostic de dyslexie et/ou de
          dysphasie et/ou de dyspraxie
        </li>
        <li>
          Reconnaissance d’aménagements aux épreuves nationales de l’éducation
          nationale pour troubles de l’apprentissage du langage écrit, du
          langage oral et/ou écrit et/ou de l’acquisition de la coordination
        </li>
        <li>
          Certificat médical délivré depuis moins de 6 mois attestant d’un
          trouble spécifique du langage et/ou de la lecture et/ou de
          l’acquisition de la coordination et nécessitant un aménagement des
          conditions de passage de l’épreuve théorique générale
        </li>
      </ul>
      <p>
        Un temps supplémentaire peut être accordé lors de l’épreuve pratique en
        cas de difficultés pour communiquer.
      </p>
      <p>
        En fonction de l’handicap, nous vous orienterons vers l’auto école qui
        saura vous accompagner dans votre formation.
      </p>
      <p>
        Nous disposons d'un véhicule en boite à changement de rapport
        automatique en cas de besoin.
      </p>
      <p>
        <a
          href="https://www.automobile.ceremh.org/index.php?espace=2&amp;ppPage=8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Se renseigner ou passer le permis avec mon handicap ici !
        </a>
      </p>
    </div>
  );
};

export default Handicap;
