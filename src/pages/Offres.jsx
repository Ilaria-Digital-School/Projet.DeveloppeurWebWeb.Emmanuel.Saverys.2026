import React, { useState } from "react";
import CreateService from "../component/elements/createService";
import CreateTarif from "../component/elements/createTarif";
import { Link } from "react-router-dom";
import useDocumentMeta from "../component/useDocumentMeta";

// Services manuelle
const servicesManuelle = [
  {
    title: "Formation traditionnelle",
    subtitle: "17 ans et +",
    points: [
      "Code en salle et sur internet",
      "20h de conduite",
      "Évaluation de départ",
      "1er exam de conduite",
    ],
    price: "1200€",
    faqId: "conduite-traditionnelle",
  },
  {
    title: "Conduite Supervisée",
    subtitle:
      "Ouvert à tous les candidats voulant gagner en expérience avant l'examen ou après un échec",
    points: [
      "Code en salle et sur internet",
      "20h de conduite",
      "RDV préalable",
      "Évaluation de départ",
      "1er exam de conduite",
    ],
    price: "1300€",
    faqId: "conduite-supervisee",
  },
  {
    title: "Conduite accompagnée",
    subtitle: "15 ans et + voulant s'entraîner avant l'examen",
    points: [
      "Code en salle et sur internet",
      "20h de conduite",
      "RDV préalable",
      "Évaluation de départ",
      "1er exam de conduite",
      "2 rendez-vous pédagogiques",
    ],
    price: "1350€",
    faqId: "conduite-accompagnee",
  },
];

const servicesAutomatique = [
  {
    title: "Formation traditionnelle",
    subtitle: "17 ans et +",
    points: [
      "Code en salle et sur internet",
      "13h de conduite auto",
      "Évaluation de départ",
      "1er exam de conduite auto",
    ],
    price: "850€",
    faqId: "conduite-traditionnelle-auto",
  },
  {
    title: "Conduite Supervisée",
    subtitle:
      "Pour ceux voulant plus d'expérience en boîte automatique",
    points: [
      "Code en salle et sur internet",
      "13h de conduite auto",
      "RDV préalable",
      "Évaluation de départ",
      "1er exam de conduite auto",
    ],
    price: "950€",
    faqId: "conduite-supervisee-auto",
  },
  {
    title: "Conduite accompagnée",
    subtitle: "15 ans et + voulant s'entraîner en automatique",
    points: [
      "Code en salle et sur internet",
      "13h de conduite auto",
      "RDV préalable",
      "Évaluation de départ",
      "1er exam de conduite auto",
      "2 rendez-vous pédagogiques",
    ],
    price: "1020€",
    faqId: "conduite-accompagnee-auto",
  },
];

const Offres = () => {
  useDocumentMeta({
    title: "Offres et Tarifs | ECSR Rafa Auto Conduite",
    description:
      "Découvrez les offres de formation au permis B chez ECSR Rafa Auto Conduite à Saintes : conduite accompagnée, supervisée, formation traditionnelle et tarifs des heures de code et de conduite.",
    canonical: "https://ecsr-rafa.com/services",
  });

  const [typeVehicule, setTypeVehicule] = useState("manuelle"); 

  const servicesToShow =
    typeVehicule === "manuelle" ? servicesManuelle : servicesAutomatique;

  return (
    <div className="service-container">
      <div className="service-group">
        <h2 className="service-group-title">Permis B</h2>

        <div className="service-toggle">
          <button
            className={typeVehicule === "manuelle" ? "active" : ""}
            onClick={() => setTypeVehicule("manuelle")}
          >
            Manuelle
          </button>
          <button
            className={typeVehicule === "automatique" ? "active" : ""}
            onClick={() => setTypeVehicule("automatique")}
          >
            Automatique
          </button>
        </div>

        <div
          className={`service-group-cards ${
            typeVehicule === "automatique" ? "slide-right" : "slide-left"
          }`}
        >
          {servicesToShow.map((service, index) => (
            <CreateService
              key={index}
              title={service.title}
              subtitle={service.subtitle}
              points={service.points}
              price={service.price}
            />
          ))}
        </div>
      </div>

      <div className="service-actions">
        <Link to="/contact#inscription" className="btn-primary">
          Je m'inscris / Je réserve !
        </Link>

        <Link to="/contact#stage-post-permis" className="btn-secondary">
          Stage post-permis ?
        </Link>
      </div>

      <CreateTarif
        leftTitle="Entraînement au code"
        leftItems={[
          {
            label: "Accès aux Entraînements du Code sur Internet",
            price: "30€",
            note: "Valide 6 mois",
          },
          {
            label: "Prolongation de l’Accès",
            price: "20€",
            note: "Valide 6 mois",
          },
          {
            label: "Stage de Code Intensif",
            price: "180€",
            note: "4 jours consécutifs de 14h à 17h",
          },
          {
            label: "Examen du Code",
            price: "30€",
            note: "Remboursée si l'élève réussit le code du 1er coup !",
          },
        ]}
        rightTitle="Conduite"
        rightItems={[
          {
            label: "Heure de Conduite",
            price: "50€",
          },
          {
            label: "Frais d’Accompagnement Examen Pratique",
            price: "50€",
          },
          {
            label: "Édition du Permis de Conduire Définitif",
            price: "30€",
          },
        ]}
      />
    </div>
  );
};

export default Offres;