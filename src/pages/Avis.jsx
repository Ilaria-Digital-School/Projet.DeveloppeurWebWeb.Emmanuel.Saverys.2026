import React from "react";
import CreateFormAvis from "../component/elements/createFormAvis";
import AvisCard from "../component/elements/createAvis";
import CreateAvisGoogleMap from '../component/elements/createAvisGoogleMap';
import FxLogo from '../assets/com_a-_.png'
import statsImage from '../assets/diagrameStats.png'
import Utilisateur from '../assets/666201.png'
import useDocumentMeta from "../component/useDocumentMeta";
import CreateInfos from "../component/elements/createImportTopInfos"

const Avis = () => {
  useDocumentMeta({
  title: "Avis clients | ECSR Rafa Auto Conduite",
  description: "Découvrez les avis de nos clients satisfaits à l'auto-école ECSR Rafa Auto Conduite à Saintes. Permis B, code de la route et accompagnement personnalisé.",
  canonical: "https://ecsr-rafa.com/avis"
});
  const avisMock = [
    {
      author_name: "tsnm",
      rating: 5,
      text: "Très certainement LA meilleure auto-école de Saintes ! Dès que l’on pousse la porte de l’ECSR Rafa, on se sent immédiatement accueilli, écouté et accompagné avec bienveillance. On sent que toute l’équipe a vraiment à cœur de nous voir progresser… et ça, ça n’a pas de prix ! Les plannings sont parfaitement adaptés aux besoins de chacun, et les dates pour passer le permis arrivent rapidement. Grâce à leur méthode claire, leur patience et surtout leurs encouragements, j’ai pu obtenir mon permis du premier coup ! Un immense merci à Rabah, Ilhem et Fatiha pour leur professionnalisme, leur bonne humeur et leur bienveillance. Vous ne vous contentez pas d’apprendre à conduire… vous donnez confiance, vous motivez et vous transformez cette étape en un vrai souvenir heureux ! Des personnes en or, qui laissent une trace d’eux bien au-delà du permis… Encore merci !",
      time: 2025
    },
    {
    author_name: "Jean Dupont",
    rating: 5,
    text: "Je tiens à remercier ECSR Rafa pour la formation. Grâce à leurs cours de qualité et à l'accompagnement personnalisé j'ai pu obtenir mon permis de conduire avec succès et rapidement et l'équipe est incroyable toujours disponible rapide pour répondre à mes questions, et d'une gentillesse exceptionnelle. Ils sont réellement à l'écoute de leurs élèves ce qui rend l'apprentissage beaucoup plus agréable. Je recommande vivement cette auto-école à tous ceux qui souhaitent passer leur permis dans un cadre serein et professionnel. Merci encore pour tout",
    time: 2025 
  },
  {
    author_name: "matchek haquin",
    rating: 5,
    text: "Très bonne auto-école ! Moniteurs pédagogues, patients et professionnels. J’ai beaucoup appris en confiance et j’ai obtenu mon permis sereinement. Je recommande vivement !",
    time: 2026
  },
  {
    author_name: "Cassandra Trochut",
    rating: 5,
    text: "je viens d’obtenir mon permis de conduire !! Un grand merci à Rabah ainsi que Ilhem, Auto-école sérieuse qui sait mettre ses élèves en toute confiance face à la route. C’est aussi l’auto-école la moins chère que j’ai trouvé sur saintes. Je recommande à 100 % cette auto-école !!",
    time: 2025
  },
  {
    author_name: "Nicolas Mauvais",
    rating: 5,
    text: "Un grand merci à l'équipe du centre. A Raba pour ses precieux conseils et Ilhem pour son apprentissage tout en douceur et gentillesse. J'ai pu, en même pas un mois, avoir le permis. Je recommande vivement cet école et heureux de ne plus avoir à vous revoir ! ;)",
    time: 2025
  },
  {
    author_name: "wajeed Hossain HUJATI",
    rating: 5,
    text: "Très bonne expérience !“Grâce à mon moniteur Rabah.  et au centre de conduite, j’ai appris à conduire avec confiance et sérénité. Merci du fond du cœur !”",
    time: 2025
  }
];


  return (
    <div>
      <section className="avis-section">
       <div className="service-group marginAvis">   
        <h2 className="service-group-title">• Clients satisfaits</h2>
        <div className="avis-grid">
          <AvisCard
            rating={5}
            comment="Je vous conseille à 100% !
«Un grand plaisir d’apprendre cette nouvelle , je vous conseille à 100% d’apprendre à conduire avec Rabah . Il m’a permit de me sentir complètement alaise dans ma conduite avec beaucoup de patience alors que c’était pas facile pour moi . Il ce rend toujours disponible et c’est très agréable. Je recommande les yeux fermés."
            name="Amélie"
            moniteur="Rabah"
            photo={Utilisateur}
          />

          <AvisCard
            rating={5}
            comment="Une monitrice exceptionnelle ! J’ai eu mon permis de conduire très rapidement grâce à son professionnalisme et à sa façon d’expliquer clairement. Elle a toutes les qualités : patiente, motivante, bienveillante, et en plus toujours dans la bonne humeur. Les heures de conduite passent super vite avec elle, Merci encore, excellente expérience, je recommande à tous."
            name="Emmanuel Saverys"
            moniteur="Ilhem"
            photo={Utilisateur}
          />
          <AvisCard
            rating={5}
            comment="Je recommande grandement cette auto-école. Le moniteur est très patient, à l'écoute, il s'adapte en fonction de nos besoins et horaires.
            Il sait comment nous encourager et nous donner confiance.Chaque heure d'apprentissage à la conduite était un vrai plaisir !"
            name="Raphael"
            moniteur="Rabah"
            photo={FxLogo}
          />
        </div>
        </div>
         <div className="service-group">
        <h2 className="service-group-title">• Satisfaction Élève </h2>
          <CreateInfos
        image={statsImage}
        title1="Statistique 2026 :"
      text1={
        <>
          Accueil : 10 <br />
          Information Procédé d'Évaluation : 10 <br />
          Horaires Cours Théorique : 9.44 <br />
          Information sur la proposition de Formation : 9.72
        </>
      }
      title2="Évaluation Pédagogique :"
      text2={
        <>
          Outils Pédagogiques Théorique : 9.44 <br />
          Outils Pédagogiques Pratique : 9.44 <br />
          Équipements : 10 <br />
          Disponibilité de l'Équipe : 10
        </>
      }
      title3="Qualité & Suivi :"
      text3={
        <>
          Qualité de l'Enseignement : 10 <br />
          Qualité de l'Enseignement Reçu : 10 <br />
          Respect de l'Intégralité du Parcours : 10 <br />
          Respect des Cours Théoriques : 9.72 <br />
          Cours Dispensé par un Enseignant : 9.72 <br />
          Progressivité des Parcours en Leçons pratiques : 9.72 <br /> <br />
          <strong>Appréciation Globale : 9.67</strong>
        </>
        }
      /></div>
      </section>
      <CreateAvisGoogleMap avis={avisMock} />
      <CreateFormAvis />
    </div>
  );
};

export default Avis;
