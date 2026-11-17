import React from "react";
import useDocumentMeta from "../component/useDocumentMeta";

const PolitiqueCookies = () => {
  useDocumentMeta({
    title: "Politique des Cookies | ECSR Rafa Auto Conduite",
    description:
      "Informations sur l'utilisation des cookies, de Google Analytics et la protection des données sur le site ECSR Rafa Auto Conduite à Saintes.",
    canonical: "https://ecsr-rafa.com/politique-cookies",
  });

  return (
    <>
      <div className="cookies-page">
        <h1>Politique des Cookies</h1>

        <p>
          Le site ECSR RAFA utilise des cookies et technologies similaires afin
          d'assurer son bon fonctionnement, améliorer l'expérience utilisateur
          et analyser sa fréquentation.
        </p>

        <h2>Qu'est-ce qu'un cookie ?</h2>

        <p>
          Un cookie est un petit fichier texte enregistré sur votre appareil
          lors de votre navigation sur un site internet. Il permet notamment de
          mémoriser certaines informations relatives à votre navigation et à vos
          préférences.
        </p>

        <h2>Types de données utilisées</h2>

        <ul>
          <li>
            <strong>Technologies strictement nécessaires :</strong>
            <br />
            Certaines informations sont enregistrées localement dans votre
            navigateur via le <strong>localStorage</strong>.
            <br />
            Ce stockage n'est pas un cookie et est utilisé uniquement pour
            assurer certaines fonctionnalités du site, comme la sauvegarde de
            votre progression dans le quiz ou la mémorisation de votre choix de
            consentement.
          </li>

          <li>
            <strong>Cookies de mesure d'audience :</strong>
            <br />
            Le site utilise <strong>Google Analytics</strong>, un service fourni
            par Google permettant d'analyser la fréquentation du site, les pages
            consultées et les interactions des visiteurs.
          </li>
        </ul>

        <h2>Google Analytics</h2>

        <p>
          Google Analytics utilise des cookies afin de collecter des données
          statistiques sur l'utilisation du site. Ces informations permettent à
          ECSR RAFA de comprendre la navigation des utilisateurs et d'améliorer
          les performances ainsi que l'expérience proposée.
        </p>

        <p>
          Les données collectées sont utilisées uniquement à des fins
          statistiques afin d'améliorer le site. ECSR RAFA n'utilise pas ces
          données pour identifier directement les visiteurs.
        </p>

        <p>
          Les cookies de mesure d'audience Google Analytics sont activés
          uniquement après votre acceptation via le bandeau de consentement
          présent sur le site.
        </p>

        <h2>Gestion des cookies</h2>

        <p>
          Vous pouvez accepter ou refuser les cookies de mesure d'audience via
          notre bandeau de consentement affiché lors de votre première visite.
        </p>

        <p>
          Vous pouvez également gérer ou supprimer les cookies directement
          depuis les paramètres de votre navigateur.
        </p>

        <h2>Durée de conservation</h2>

        <p>
          Les données stockées via le <strong>localStorage</strong> sont
          conservées sur votre appareil jusqu'à leur suppression manuelle ou
          jusqu'à la suppression des données du navigateur.
        </p>

        <p>
          Les cookies Google Analytics sont conservés selon les durées définies
          par Google et peuvent être supprimés à tout moment depuis les
          paramètres de votre navigateur.
        </p>

        <section
          id="mentions-legales"
          style={{
            marginTop: "120px",
            scrollMarginTop: "100px",
          }}
        >
          <h1>Mentions légales</h1>

          <h2>Éditeur du site</h2>

          <p>
            Le présent site est édité par{" "}
            <strong>ECSR RAFA École de Conduite et de Sécurité Routière</strong>
            .
          </p>

          <p>
            <strong>Responsable de la publication :</strong> Rabah BOURATOUA
            <br />
            <strong>Adresse :</strong> 34 rue des Fougères, 17100 Saintes
            <br />
            <strong>Téléphone :</strong> 05 46 74 01 27
            <br />
            <strong>E-mail :</strong> ecsr.rafa@gmail.com
            <br />
            <strong>SIRET :</strong> 913 228 078 00014
          </p>

          <h2>Hébergement</h2>

          <p>
            Le site est hébergé par <strong>Netlify, Inc.</strong>
            <br />
            2325 3rd Street, Suite 296
            <br />
            San Francisco, CA 94107
            <br />
            États-Unis
            <br />
            Site web : https://www.netlify.com
          </p>

          <h2>Propriété intellectuelle</h2>

          <p>
            L'ensemble des contenus présents sur ce site (textes, photographies,
            illustrations, logos, icônes, documents, éléments graphiques et leur
            mise en page) est protégé par les dispositions du Code de la
            propriété intellectuelle.
          </p>

          <p>
            Toute reproduction, représentation, diffusion, modification ou
            exploitation totale ou partielle des contenus présents sur ce site,
            sans autorisation préalable écrite d'ECSR RAFA, est interdite.
          </p>

          <h2>Responsabilité</h2>

          <p>
            ECSR RAFA s'efforce d'assurer l'exactitude des informations publiées
            sur ce site. Toutefois, malgré tout le soin apporté à leur rédaction
            et à leur mise à jour, des erreurs ou omissions peuvent subsister.
          </p>

          <p>
            Les informations diffusées sur ce site sont fournies à titre
            indicatif et peuvent être modifiées à tout moment sans préavis.
          </p>

          <h2>Liens externes</h2>

          <p>
            Le site peut contenir des liens vers des sites internet tiers. ECSR
            RAFA ne peut être tenue responsable du contenu, du fonctionnement ou
            de la politique de confidentialité de ces sites externes.
          </p>

          <h2>Protection des données personnelles</h2>

          <p>
            Les informations recueillies via les formulaires du site sont
            utilisées uniquement afin de répondre aux demandes adressées à ECSR
            RAFA. Elles ne sont ni vendues, ni louées, ni cédées à des tiers.
          </p>

          <p>
            Conformément au Règlement Général sur la Protection des Données
            (RGPD) et à la loi Informatique et Libertés, vous disposez d'un
            droit d'accès, de rectification, d'effacement, de limitation,
            d'opposition ainsi que d'un droit à la portabilité concernant vos
            données personnelles.
          </p>

          <p>
            Pour toute demande relative à vos données personnelles, vous pouvez
            contacter ECSR RAFA à l'adresse suivante :
            <br />
            <strong>ecsr.rafa@gmail.com</strong>
          </p>

          <p>
            Vous disposez également du droit d'introduire une réclamation auprès
            de la Commission Nationale de l'Informatique et des Libertés (CNIL).
          </p>

          <h2>Droit applicable</h2>

          <p>
            Les présentes mentions légales sont régies par le droit français. En
            cas de litige, les juridictions françaises seront seules
            compétentes, sauf disposition légale contraire.
          </p>

          <p>
            <strong>Dernière mise à jour :</strong> Août{" "}
            {new Date().getFullYear()}
          </p>
        </section>
      </div>
    </>
  );
};

export default PolitiqueCookies;
