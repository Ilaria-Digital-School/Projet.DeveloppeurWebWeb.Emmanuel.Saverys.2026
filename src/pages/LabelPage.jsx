import React, { useState, useEffect } from "react";
import useDocumentMeta from "../component/useDocumentMeta";
import LogoLabel from "../assets/logoLabelEcsrRafa.png";
import LabelIcon1 from "../assets/label.jpg";
import LabelIcon2 from "../assets/CPF.jpg";
import LabelIcon3 from "../assets/CPF.jpg";
import LabelIcon4 from "../assets/permisUnEuroLogo.png";
import LabelIcon5 from "../assets/qualiopi.png";

function LabelPage() {
  useDocumentMeta({
    title: "Label Qualité | Auto Conduite ECSR Rafa – Permis B & Code",
    description:
      "Découvrez le Label Qualité de ECSR Rafa Auto Conduite à Saintes. Engagement sur la qualité de la formation permis B et code de la route.",
    canonical: "https://ecsr-rafa.com/label-qualite",
  });

  const tabs = [
    {
      id: "ecole-qualite",
      image: LabelIcon1,
      title: "École de Qualité",
      text: `
<p><strong>ECSR Rafa</strong> est labellisée « École Conduite Qualité », garantissant une formation sérieuse et adaptée à chaque élève.</p>

<p>Nos moniteurs expérimentés vous accompagnent avec rigueur, et nos méthodes pédagogiques flexibles optimisent vos chances de réussite dès le premier passage. Les parcours sont également éligibles au CPF et au dispositif Permis 1€ / Jour pour rendre la qualité accessible.<br />
Pour plus d’informations officielles, consultez : <br /> <a href="https://www.securite-routiere.gouv.fr/passer-son-permis-de-conduire/inscription-et-formation/inscription-dans-une-ecole-de-conduite/les" target="_blank" rel="noopener noreferrer">https://www.securite-routiere.gouv.fr - École Conduite Qualité</a>.</p>
`,
    },
    {
      id: "certification-qualiopi",
      image: LabelIcon5,
      title: "Certification Qualiopi",
      text: `
La certification <strong>Qualiopi</strong> garantit que notre formation respecte les standards officiels de qualité. Elle assure un enseignement rigoureux, transparent et efficace, reconnu par l’État, et vous offre la confiance d’un apprentissage fiable et sérieux. <br />
Pour plus d’informations officielles, consultez : <br /> <a href="https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation" target="_blank" rel="noopener noreferrer"> https://travail-emploi.gouv.fr - Qualiopi</a>.
`,
    },
    {
      id: "cpf",
      image: LabelIcon3,
      title: "CPF",
      text: `
Nos formations sont éligibles au <strong>Compte Personnel de Formation (CPF)</strong>, ce qui permet de financer tout ou partie de votre permis. Le CPF offre un soutien concret pour suivre une formation de qualité sans pression financière, et vous garantit un apprentissage reconnu par l'État.

<br />Pour en savoir plus et consulter le site officiel : <br /> <a href="https://www.securite-routiere.gouv.fr/passer-son-permis-de-conduire/financement-du-permis-de-conduire/permis-et-compte-formation" target="_blank" rel="noopener noreferrer">https://www.securite-routiere.gouv.fr - CPF</a>
`,
    },
    {
      id: "permis-un-euro",
      image: LabelIcon4,
      title: "Permis 1€ / Jour",
      text: `
Le dispositif <strong>Permis 1€ / Jour</strong> permet de financer votre permis progressivement, à 1€ par jour. Il facilite l’accès à la conduite en réduisant le coût initial et offre une solution pratique pour planifier votre formation.

<br />Pour plus d’informations officielles, consultez : <br /> <a href="https://www.securite-routiere.gouv.fr/passer-son-permis-de-conduire/financement-du-permis-de-conduire/permis-1-eu-par-jour/definition-du-permis-1-eu-par-jour" target="_blank" rel="noopener noreferrer">https://www.securite-routiere.gouv.fr - Permis 1€ / Jour</a>.
`,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

useEffect(() => {
  // Récupère l'identifiant de l'onglet indiqué dans l'URL après le #.
  const hash = window.location.hash.replace("#", "");

  if (hash) {
    // Recherche l'onglet correspondant à cet identifiant.
    const foundTab = tabs.find((tab) => tab.id === hash);

    if (foundTab) {
      setActiveTab(foundTab);

      // Fait défiler la page jusqu'à la section des onglets après un court délai.
      setTimeout(() => {
        const element = document.getElementById("tabs-section");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }
}, []);

  return (
    <div className="label-page">
      <main className="label-content">
        <h1 className="label-title">
          ECSR Rafa – Labellisée par la Sécurité Routière :
        </h1>

        <div className="label-section">
          <img src={LogoLabel} alt="Label Qualité" className="label-logo" />
          <div className="label-text">
            <div className="label-block">
              <h3>Formation Certifiée & Fiable :</h3>
              <p>
                ECSR Rafa s’assure que toutes les étapes de votre formation
                respectent les normes officielles et réglementaires. Chaque
                processus est contrôlé pour garantir transparence, sécurité et
                conformité, vous offrant une base solide et fiable pour votre
                futur permis.
              </p>
            </div>
            <div className="label-block">
              <h3>Méthodes Pédagogiques Performantes :</h3>
              <p>
                Chaque élève bénéficie d’un accompagnement unique, où la
                pratique et la théorie s’entrelacent pour progresser rapidement.
                Nos outils interactifs et nos sessions ciblées permettent
                d’intégrer les compétences essentielles à la conduite de façon
                naturelle et efficace.
              </p>
            </div>
          </div>
        </div>

        <div className="service-group" id="tabs-section">
          <div className="label-tabs-section">
            <div className="label-tab-bar">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`label-tab-button ${
                    activeTab.id === tab.id ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveTab(tab);
                    window.history.replaceState(null, "", `#${tab.id}`);
                  }}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Contenu actif */}
            <div className="label-tab-content">
              <div className="label-tab-image">
                <img src={activeTab.image} alt={activeTab.title} />
              </div>
              <div
                className="label-tab-text"
                dangerouslySetInnerHTML={{ __html: activeTab.text }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LabelPage;
