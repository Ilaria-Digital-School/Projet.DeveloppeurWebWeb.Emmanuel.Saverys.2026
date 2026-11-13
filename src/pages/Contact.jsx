import React from "react";
import CreateFormContact from "../component/FormContact";
import CreateQuestion from "../component/elements/createQuestion";
import CreateTopPageInfos from "../component/elements/createTopPageInfos";
import ReglementInterieur from "/PDF/reglement intérieur.pdf";
import PostPermis from "/PDF/Formation post-permis.pdf";
import AAC from "/PDF/AAC.pdf";
import LITIGE from "/PDF/REclamations ET LITIGE.pdf";
import CS from "/PDF/J3DP00_DEPLIANT_CONDUITE_SUPERVISEE-web.pdf";
import CreateRemoveHour from "../component/elements/createRemoveHour";
import useDocumentMeta from "../component/useDocumentMeta";
import CoursTheorique from "/PDF/coursTheorique.pdf";

const Contact = () => {
  useDocumentMeta({
    title: "FAQ & Contact | ECSR Rafa Auto Conduite",
    description:
      "Consultez notre FAQ et contactez ECSR Rafa Auto Conduite à Saintes pour toutes vos questions, demandes d'inscription ou renseignements sur le permis B et le code de la route.",
    canonical: "https://ecsr-rafa.com/contact",
  });
  return (
    <div>
      <CreateTopPageInfos
        title="Page Contact"
        subtitle="Des questions? Une demande d'inscription? Contactez nous par mail ou par téléphone, ou à l'aide du formulaire ci-dessous. Nous vous répondrons dans les plus brefs délais. Vous pouvez également vous renseigner grâce aux questions pré-repondues !"
      />

      <strong className="questionPreRepondu-title">
        Question pré-répondue ci-dessous :
      </strong>
      <input
        type="text"
        className="faq-search"
        placeholder="Rechercher un mot clef (ex : inscription, CPF, permis...)"
        onChange={(e) => {
          // Supprime les différences de majuscules et d'accents pour faciliter la recherche.
          const normalize = (str) =>
            str
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "");

          // Récupère et normalise le texte saisi par l'utilisateur.
          const value = normalize(e.target.value);

          // Récupère toutes les questions et les titres des catégories de la FAQ.
          const items = document.querySelectorAll(".question-card");
          const categories = document.querySelectorAll(".faq-category-title");

          // Affiche uniquement les questions contenant le texte recherché.
          items.forEach((item) => {
            const text = normalize(item.innerText);
            item.style.display = text.includes(value) ? "" : "none";
          });

          // Masque les catégories pendant la recherche et les réaffiche si le champ est vide.
          categories.forEach((category) => {
            category.style.display = value.length > 0 ? "none" : "";
          });
        }}
      />
      <strong className="faq-category-title">
        Inscriptions et documents :
      </strong>
      <CreateQuestion
        id="inscription"
        question="Quelle est la procédure d'inscription ?"
        defaultOpen={window.location.hash === "#inscription"}
        answer={
          <>
            POUR S'INSCRIRE IL FAUT FOURNIR :
            <br />
            <br />
            1 - Photocopie recto-verso de la pièce d’identité en cours de
            validité (sur le même côté de la feuille) et celle de votre
            responsable légal si vous êtes mineur(e).
            <br />
            <br />
            2 - Si le candidat est un résident étranger hors Union Européenne :
            un titre de séjour en cours de validité.
            <br />
            <br />
            3 - Si le candidat est déjà titulaire d’une catégorie de permis :
            une copie du permis de conduire.
            <br />
            <br />
            4 - Un justificatif de domicile de moins de 6 mois (facture eau /
            téléphone / électricité / gaz, attestation titulaire de contrat EDF,
            dernier avis d’imposition).
            <br />
            <br />
            5 - Attestation d'hébergement à remplir à l'auto-école si le
            justificatif de domicile n'est pas au nom du candidat, ainsi que la
            photocopie recto-verso de la pièce d'identité de l'hébergeant (datée
            et signée).
            <br />
            <br />
            6 - L’ASSR2 ou l’ASR.
            <br />
            <br />
            7 - L’attestation de participation à la JDC si vous avez entre 17
            ans et 25 ans.
            <br />
            <br />
            8 - Une « e-photo » spéciale permis de conduire agréée ANTS avec
            signature numérique (obligatoire).
            <br />
            <br />
            9 - Un acompte de 300 euros ou le règlement de la formation.
            <br />
            <br />
            <strong>
              Vous pouvez venir nous voir pour la procédure d'inscription .
              <br />
              <a
                href="https://www.google.com/maps/place/ECSR+-+%C3%89cole+de+Conduite+et+de+S%C3%A9curit%C3%A9+Routi%C3%A8re+RAFA/@45.7412712,-0.6620413,18z/data=!4m15!1m8!3m7!1s0x4801032f6d7e081f:0x30ed302a45636b62!2s34+Rue+des+Foug%C3%A8res,+17100+Saintes!3b1!8m2!3d45.741388!4d-0.662283!16s%2Fg%2F11nnl0j1nl!3m5!1s0x480103f11b5b3261:0xdaf1d38c5441129f!8m2!3d45.7412407!4d-0.6625389!16s%2Fg%2F11t9lm_fbf?entry=ttu&g_ep=EgoyMDI2MDIxMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cliquez ici pour nous trouver !
              </a>
            </strong>
          </>
        }
      />
      <CreateQuestion
        question="Quels documents sont nécessaires pour l’inscription ?"
        answer={
          <>
            1 - Photocopie recto-verso de la pièce d’identité en cours de
            validité (sur le même côté de la feuille) et celle de votre
            responsable légal si vous êtes mineur(e).
            <br />
            <br />
            2 - Si le candidat est un résident étranger hors Union Européenne :
            un titre de séjour en cours de validité.
            <br />
            <br />
            3 - Si le candidat est déjà titulaire d’une catégorie de permis :
            une copie du permis de conduire.
            <br />
            <br />
            4 - Un justificatif de domicile de moins de 6 mois (facture eau /
            téléphone / électricité / gaz, attestation titulaire de contrat EDF,
            dernier avis d’imposition).
            <br />
            <br />
            5 - Attestation d'hébergement à remplir à l'auto-école si le
            justificatif de domicile n'est pas au nom du candidat, ainsi que la
            photocopie recto-verso de la pièce d'identité de l'hébergeant (datée
            et signée).
            <br />
            <br />
            6 - L’ASSR2 ou l’ASR.
            <br />
            <br />
            7 - L’attestation de participation à la JDC si vous avez entre 17
            ans et 25 ans.
            <br />
            <br />
            8 - Une « e-photo » spéciale permis de conduire agréée ANTS avec
            signature numérique (obligatoire).
            <br />
            <br />
            9 - Un acompte de 300 euros ou le règlement de la formation.
            <br />
          </>
        }
      />
      <CreateQuestion
        question="Y a-t-il des frais d’inscription ou des frais de dossier ?"
        answer={
          <>
            Non. Notre auto-école ne facture{" "}
            <strong>aucun frais d'inscription</strong> ni{" "}
            <strong>aucun frais de dossier</strong>.
            <br />
            L’inscription, la constitution du dossier administratif et les
            démarches sont réalisées <strong>totalement gratuitement</strong>.
            <br />
            Vous ne payez que votre formation, sans frais cachés.
            <br />
            <br />
            <strong>
              Profitez-en dès maintenant pour vous inscrire et démarrer votre
              formation en toute sérénité !
            </strong>
          </>
        }
      />
      <strong className="faq-category-title">Notre Auto-école :</strong>
      <CreateQuestion
        id="engagements"
        defaultOpen={window.location.hash === "#engagements"}
        question="Une remarque, une réclamation, une recommandation ?"
        answer={
          <>
            <strong>Votre équipe ECSR RAFA vous écoute.</strong>
            <br />
            <br />
            Vous pouvez :
            <br />• Nous adresser un mail : <strong>ecsr.rafa@gmail.com</strong>
            <br />
            • Déposer votre demande dans le cahier de doléances à votre
            disposition au bureau.
            <br />
            <br />
            <strong>Ensuite ?</strong>
            <br />
            <br />
            <strong>Notre engagement :</strong>
            <br />
            ● Une réponse rapide et efficace
            <br />
            ● Chaque remarque est étudiée avec soin.
            <br />● Nous nous engageons à vous apporter une réponse dans un
            délai maximum de <strong>7 jours ouvrés</strong>.
            <br />
            ● Si une action est nécessaire, nous vous tiendrons informé(e) des
            mesures prises.
            <br />
            <br />
            L’auto école a également souscrit, en plus d’une garantie
            financière, un contrat de médiation dont les coordonnées du
            médiateur peuvent vous être transmises sur simple demande.
            <br />
            <br />
            <strong>NB:</strong> Veillez à bien préciser vos coordonnées pour
            que nous puissions vous contacter rapidement.
            <br />
            <br />
            <hr />
            <br />
            <strong>Déclaration sur l'honneur :</strong>
            <br />
            <br />
            Je, soussigné, <strong>Rabah BOURATOUA</strong>, représentant légal
            de l’auto-école <strong>ECSR RAFA</strong> située au 34 rue des
            fougères, 17100 saintes, déclare sur l'honneur que notre auto école
            met en place un processus rigoureux pour traiter les remarques et
            doléances qui nous sont adressées par mail ou consignées dans le
            cahier de doléances, dans un délai de <strong>7 jours </strong>
            maximum.
            <br />
            <br />
            Dans cette optique, nous nous engageons à :
            <br />
            <br />
            ● Examiner quotidiennement les messages reçus par mail ainsi que les
            nouvelles inscriptions dans le cahier de doléances.
            <br />
            ● Étudier chaque remarque avec attention afin d’en comprendre le
            contenu et de déterminer les actions nécessaires.
            <br />
            ● Formuler une réponse appropriée dans un délai maximum de 7 jours à
            compter de la réception de la remarque.
            <br />
            ● Mettre en œuvre les solutions ou mesures correctives nécessaires.
            <br />
            ● Informer la personne concernée des mesures prises, si applicables.
            <br />
            <br />
            Ce processus vise à garantir la satisfaction de nos interlocuteurs
            et à maintenir une relation de transparence et de confiance. En foi
            de quoi, je signe la présente déclaration.
            <br />
            <br />
            Fait à <strong>Saintes</strong> le <strong>01/02/26</strong>
            <br />
            <br />
            <strong>Le gérant :</strong> Rabah BOURATOUA
            <br />
            <a
              href={LITIGE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Résolution des problèmes/litiges.pdf
            </a>
          </>
        }
      />

      <CreateQuestion
        question="Pourquoi nous choisir ?"
        answer={
          <>
            <strong>✓ Un Enseignement De Qualité</strong>
            <br />
            Vos leçons sont 100% personnalisées grâce à l'expertise du
            formateur. Passez votre permis en toute tranquillité, et prenez
            confiance au volant en toute sécurité !
            <br />
            <br />
            <strong>✓ Des Prix Attractifs</strong>
            <br />
            Passez votre permis sans casser la tirelire. Profitez du confort et
            de la fiabilité d'une auto-école traditionnelle tout en économisant
            15% sur la moyenne tarifaire nationale !
            <br />
            <br />
            <strong>✓ Formations et Forfaits Variés</strong>
            <br />
            Nous sommes là pour vous aider à choisir la formule dont vous avez
            besoin (permis, formation sécurité routière…)
          </>
        }
      />

      <CreateQuestion
        question="Quelles sont nos horaires d'ouverture ?"
        answer={
          <>
            <strong>Horaires de Conduite :</strong>
            <br />
            Du lundi au samedi : 8h - 12h et 14h - 19h
            <br />
            <br />
            <strong>Horaires de Code :</strong>
            <br />
            Du mardi au samedi : 13h - 14h
            <br />
            Lundi : 17h - 19h
            <br />
            <br />
            <strong>Horaires d'Accueil :</strong>
            <br />
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
      <CreateQuestion
        question="À propos de notre auto-école ?"
        answer="Gérée par Rabah, un formateur expérimenté , notre Auto-École a pour mission de vous guider dans l'obtention de votre Permis B en toute bienveillance et en respectant votre budget."
      />

      <CreateQuestion
        question="Quelles sont les règles du règlement intérieur de l’auto-école ?"
        answer={
          <>
            RÈGLEMENT INTÉRIEUR :
            <br />
            <br />
            Ce règlement a pour objet de définir les règles relatives à
            l’hygiène, à la sécurité ainsi qu’à la discipline nécessaire au bon
            fonctionnement de l’établissement. Il est applicable par l’ensemble
            des élèves.
            <br />
            <br />
            <strong>Article 1 :</strong> L’auto-école ECSR RAFA applique les
            règles d’enseignement selon les lois en vigueur, notamment par
            l’arrêté ministériel relatif au référentiel pour l’éducation à une
            motricité citoyenne (REMC) en vigueur depuis le 01/07/2014.
            <br />
            <br />
            <strong>Article 2 :</strong> Tout élève inscrit dans l’établissement
            se doit de respecter les conditions de fonctionnement de
            l’auto-école sans restriction, à savoir :
            <br />• Respect envers le personnel de l’établissement.
            <br />• Respect du matériel (ne pas mettre les pieds sur les
            chaises, ne pas se balancer dessus, ne pas écrire sur les murs,
            chaises, etc…).
            <br />• Respect des locaux (propreté, dégradation).
            <br />• Les élèves doivent avoir une hygiène, une tenue et un
            comportement correct et adapté à l’apprentissage de la conduite (pas
            de chaussures ne tenant pas le pied ou à talons hauts).
            <br />• Les élèves sont tenus de ne pas fumer, de ne pas vapoter à
            l’intérieur de l’établissement, ni dans les véhicules écoles, ni de
            consommer ou d’avoir consommé toute boisson ou produit pouvant nuire
            à la conduite d’un véhicule (alcool, drogue, médicaments…).
            <br />• Interdiction de manger et de boire dans la salle de code et
            dans les véhicules.
            <br />• Interdiction d’utiliser le matériel vidéo sans y avoir été
            invité.
            <br />• Respect des autres élèves en pratique et en théorie.
            <br />• Respect des horaires de code afin de ne pas perturber le bon
            déroulement de la leçon en cours. En cas de retard supérieur à 5
            minutes, et afin de ne pas perturber le bon déroulement de la
            séance, il sera possible de faire un test papier.
            <br />• Respect des horaires de leçons de conduite. Au-delà de 15
            minutes de retard, la leçon sera annulée, non reportée et non
            remboursée.
            <br />• Il est interdit d’utiliser des appareils sonores (MP3,
            téléphone portable, etc.) pendant les cours théoriques et pratiques,
            pour tout usage autre que celui de l'enseignement.
            <br />• Il est demandé aux élèves de ne pas parler pendant les
            cours.
            <br />
            <br />
            <strong>Article 3 :</strong> Tout élève dont le comportement, ou
            autre, laisserait penser qu’il ait consommé de l’alcool ou des
            stupéfiants sera soumis avant toute leçon de code ou de conduite à
            un dépistage immédiat réalisé par le représentant de l’auto-école.
            En cas de test positif, ou de refus de se soumettre au dépistage, la
            leçon sera annulée et facturée. L’élève sera immédiatement convoqué
            auprès de la direction pour s’expliquer et voir ensemble les suites
            à donner sur l’incident.
            <br />
            <br />
            <strong>Article 4 :</strong> Toute personne n’ayant pas constitué le
            dossier d’inscription et réglé le 1er versement n’aura pas accès à
            la salle de code.
            <br />
            <br />
            <strong>Article 5 :</strong> Lors des séances de code, il est
            demandé à l’élève de rester jusqu’à la fin des corrections, même si
            celles-ci débordent un peu sur les horaires, lorsque l’enseignant
            répond aux questions posées. L’important étant d’écouter et de
            comprendre les réponses afin d’avoir un maximum de possibilité de
            réussir l’examen théorique.
            <br />
            <br />
            <strong>Article 6 :</strong> Toute leçon de conduite non décommandée
            48 h ouvrables à l’avance sans motif valable sera facturée. Aucune
            leçon ne pourra être décommandée à l’aide du répondeur ou sms, les
            annulations devront impérativement être faites pendant les heures
            d’ouverture du bureau.
            <br />
            <br />
            <strong>Article 7 :</strong> Les téléphones portables doivent être
            utilisés de manière pédagogique et non personnel en leçon de
            conduite et pendant les heures de code.
            <br />
            <br />
            <strong>Article 8 :</strong> Il est demandé aux élèves de penser à
            lire les informations mises à leur disposition sur la porte de
            l’établissement (annulation des séances, fermeture du bureau…).
            <br />
            <br />
            <strong>Article 9 :</strong> Le livret d’apprentissage sera remis à
            l’élève dans les plus brefs délais via un lien pour une application
            à télécharger. Il est demandé au candidat de l'installer sur le
            téléphone et de le paramétrer.
            <br />
            <br />
            <strong>Article 10 :</strong> En général, une leçon de conduite se
            décompose comme ceci : 5 minutes sont requises pour l’installation
            au poste de conduite et pour déterminer l’objectif de travail, 45 à
            50 minutes de conduite effective, 5 à 10 minutes pour faire le bilan
            de la leçon (pause wc éventuellement…). Ce déroulement peut varier
            en fonction d’éléments extérieurs (bouchon routier…) et/ou des choix
            pédagogiques de l’enseignant de la conduite.
            <br />
            <br />
            <strong>Article 11 :</strong> Aucune présentation à l’examen
            pratique ne sera faite si le solde du compte n’est pas réglé.
            <br />
            <br />
            <strong>Article 12 :</strong> L’inscription d’un candidat à l’examen
            théorique ou pratique devra respecter les points suivants :
            Programme de formation terminé ; Avis favorable du moniteur chargé
            de la formation ; Compte soldé. La décision d’inscrire ou pas un
            élève à l’examen relève du seul fait de l’établissement. Cette
            décision s’établit en fonction du niveau de l’élève, de sa situation
            financière auprès de l’auto-école et l’avis de l’enseignant.
            <br />
            <br />
            <strong>Article 13 :</strong> Tout manquement à l’une des
            dispositions du présent règlement pourra, en fonction de sa nature
            et de sa gravité, faire l’objet des sanctions ci-dessous désignées
            par ordre d’importance : Avertissement oral ; Avertissement écrit ;
            Suspension provisoire ; Exclusion définitive de l’établissement.
            <br />
            <br />
            <strong>Article 14 :</strong> Le responsable de l’établissement peut
            décider d’exclure un élève à tout moment du cursus de formation pour
            un des motifs suivants : Attitude empêchant la réalisation du
            travail de formation ; Évaluation par le responsable pédagogique de
            l’inaptitude de l’élève pour la formation concernée ; Non-respect du
            présent règlement intérieur ; Non-paiement.
            <br />
            <br />
            <strong>Article 15 :</strong> Aucun remboursement ne sera effectué
            un an après la date d'inscription.
            <br />
            <br />
            <strong>Voir le PDF complet du règlement :</strong>
            <br />
            <a
              href={ReglementInterieur}
              target="_blank"
              rel="noopener noreferrer"
            >
              Cliquer ici pour ouvrir le PDF
            </a>
          </>
        }
      />
      <strong className="faq-category-title">Cours et formations :</strong>
      <CreateQuestion
        id="services"
        defaultOpen={window.location.hash === "#services"}
        question="Quelles formules de conduite proposons-nous ?"
        answer={
          <>
            <strong>Q1 : Qu’est-ce que la conduite traditionnelle ?</strong>
            <br />
            R : La conduite traditionnelle correspond à la formation classique
            avec l’auto-école. L’élève suit des cours de conduite avec un
            moniteur diplômé, jusqu’à être prêt pour passer l’examen du permis
            de conduire.
            <br />
            <br />
            <strong>Q2 : Qu’est-ce que la conduite accompagnée (AAC) ?</strong>
            <br />
            R : La conduite accompagnée, ou AAC, permet à un élève de 15 ans
            minimum de commencer à conduire avec un proche (parent ou tuteur)
            après avoir suivi la phase initiale en auto-école. Cela permet de
            gagner de l’expérience avant l’examen final à partir de 17 ans. Elle
            comprend :<br />
            - Une formation initiale avec un moniteur.
            <br />
            - Une période de conduite accompagnée d’une durée minimale de 1 an.
            <br />
            - Un minimum de 3 000 km à parcourir avec l’accompagnateur.
            <br />
            - Des bilans réguliers pour suivre les progrès de l’élève.
            <br />
            <a href={AAC} target="_blank" rel="noopener noreferrer">
              Voir les Avantages de la conduite accompagnée ici !
            </a>
            <br />
            <br />
            <strong>Q3 : Qu’est-ce que la conduite supervisée ?</strong>
            <br />
            R : Ouvert à tous les candidats voulant gagner en expérience avant
            l'examen ou après un échec à l'examen.
            <br />
            <br />
            Prérequis :
            <br />
            - Avoir effectué au minimum le nombre d'heures obligatoires (13h
            boîte auto - 20h boîte manuelle)
            <br />
            + Rendez-vous préalable avec l'accompagnant.
            <br />
            + Avoir au moins 18 ans.
            <br />
            <br />
            - Objectif : Renforcer l'expérience avant l'examen
            <br />
            <a href={CS} target="_blank" rel="noopener noreferrer">
              Voir les Avantages de la conduite supervisée ici !
            </a>
            <br />
            <br />
            <strong>Q4 : Quelle formule choisir ?</strong>
            <br />
            R : Le choix dépend de votre âge, de votre expérience et de vos
            objectifs :<br />- <strong>Traditionnelle :</strong> pour ceux qui
            veulent apprendre directement avec un moniteur et passer le permis
            rapidement.
            <br />- <strong>Conduite accompagnée :</strong> idéale pour les
            jeunes de 15 ans qui veulent accumuler de l’expérience avant le
            permis.
            <br />- <strong>Conduite supervisée :</strong> pratique pour ceux
            qui veulent continuer à progresser avec un proche après quelques
            heures en auto-école.
            <br />
            <br />
            <strong>Q5 : Y a-t-il un âge minimum pour chaque formule ?</strong>
            <br />
            - Conduite traditionnelle : Avoir 16 ans minimum lors de
            l'inscription, passage de l'examen à 17 ans.
            <br />
            - Conduite accompagnée : Pour les candidats âgés de 15 et plus
            voulant s'entrainer avant l'examen.
            <br />
            - Conduite supervisée : pour tous ceux qui veulent gagner de
            l’expérience, après la phase initiale ou après un échec au permis.
            <br />
            <br />
          </>
        }
      />

      <CreateQuestion
        question="Quel service proposons-nous ?"
        answer="Conduite accompagnée, Conduite traditionnelle, Conduite supervisée, Stage de code, Accès aux Entraînements du Code sur Internet et en présentiel  . Choisir ECSR RAFA c'est privilégier pour votre permis B un enseignement de qualité grâce à l'expertise et la bienveillance de nos enseignants, tout en respectant votre budget !"
      />
      <CreateQuestion
        question="Cours théoriques et post permis ..."
        answer={
          <>
            {" "}
            <a href={CoursTheorique} target="_blank" rel="noopener noreferrer">
              clique ici pour voir les thématiques traitées en cours théoriques
              !
            </a>{" "}
          </>
        }
      />
      <CreateQuestion
        question="Peut-on suivre des leçons de conduite avec une voiture automatique ou manuelle ?"
        answer={
          <>
            Oui, notre auto-école propose des leçons de conduite sur les deux
            types de véhicules : <strong>voiture manuelle</strong> et{" "}
            <strong>voiture automatique</strong>.<br />
            <br />
            Vous pouvez choisir le type de voiture qui correspond à vos besoins
            et à vos préférences. Les leçons sont adaptées à chaque type de
            véhicule afin de vous préparer efficacement à l’examen du permis.
          </>
        }
      />
      <CreateQuestion
        question="Peut-on combiner cours de code et cours de conduite en même temps ?"
        answer={
          <>
            Oui, il est possible d'apprendre le code de la route en même temps
            que des leçons de conduite.
            <br />
            Vous pouvez commencer vos heures de conduite même si vous n'avez pas
            encore passé ou réussi l'examen du code.
            <br />
            <br /> Il faut simplement disposer d'un numéro NEPH actif pour
            débuter la conduite.
            <br />
            Pour vous inscrire à l'examen pratique, la réussite à l'épreuve du
            code est <strong>obligatoire.</strong>
            <br />
            <br />
          </>
        }
      />

      <strong className="faq-category-title">Examens :</strong>
      <CreateQuestion
        question="Comment se déroule l’examen pratique du permis ?"
        answer={
          <>
            L’examen pratique du permis de conduire se déroule généralement de
            la manière suivante : <br />
            <br />
            - Vous devez vous présenter 30 minutes avant le début de l’épreuve.
            <br />
            - L’examen est dirigé par un inspecteur du permis de conduire,
            représentant de l'État.
            <br />
            - Vous êtes accompagné(e) d’un représentant de votre auto-école, qui
            ne participe pas à l’évaluation.
            <br />
            <br />
            <strong>Documents à présenter :</strong>
            <br />
            - Titre d’identité en cours de validité (carte d’identité,
            passeport, ou titre de séjour)
            <br />
            - Permis si vous avez déjà une autre catégorie
            <br />
            - Attestation AAC si applicable
            <br />
            <br />
            <strong>Déroulement :</strong>
            <br />
            - Vérifiez avant de démarrer que tous les contrôles de sécurité sont
            effectués : rétroviseurs réglés, siège et ceinture y compris le port
            obligatoire de la ceinture de tous les passagers et le verrouillage
            des portes ...
            <br />
            <br />
            - Vous emprunterez ensuite le parcours prédéfini par l’examinateur,
            qui peut comprendre des voies urbaines, routières et/ou
            autoroutières, et vous devrez suivre un itinéraire de manière
            autonome durant 5 minutes tout en respectant la signalisation et en
            adaptant votre conduite à chaque environnement
            <br />
            - L’inspecteur observe votre attitude générale, votre maîtrise du
            véhicule et votre respect des règles de sécurité.
            <br />
            <br />- Pendant le parcours, vous devrez réaliser au moins une
            manœuvre, répondre à 3 questions sur le véhicule, une de chaque :
            véhicule intérieur/extérieur, premier secours et Questions de
            Sécurité Routière (disponibles{" "}
            <a
              href="/quiz-permis-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              ici
            </a>{" "}
            ou dans l'onglet PDF), puis revenir au centre d’examen.
            <br />
            <br />
            <strong>Points bonus à l’examen pratique :</strong>
            <br />
            <ul>
              <li>
                Écoconduite : conduire en anticipant, limiter freinages et
                accélérations, réduire consommation et émissions.
              </li>
              <li>
                Courtoisie : faire preuve de respect et de prévenance envers les
                autres usagers, céder le passage et signaler vos intentions par
                des gestes appropriés.
              </li>
            </ul>
            <br />
            <strong>Durée :</strong>
            <br />
            L’examen dure généralement entre 25 et 35 minutes.
            <br />
            <br />
            <strong>Conseil :</strong>
            <br />
            Restez calme, attentif aux instructions et conduisez de manière sûre
            et responsable. Votre objectif est de montrer que vous pouvez
            conduire en toute sécurité dans différentes situations de
            circulation.
            <br />
            <br />{" "}
            <strong>
              Avec l'inspecteur, aucune agression (physique et/ou verbale) ne
              sera tolérée :
            </strong>
            <br />
            Pour rappel, en cas d'agression d'un inspecteur du permis de
            conduire et de la sécurité routière, les sanctions encourues peuvent
            aller jusqu'à 10 ans d'emprisonnement et 150 000 euros d'amende.
          </>
        }
      />
      <CreateQuestion
        question="Que se passe-t-il en cas d’échec à l’examen ?"
        answer={
          <>
            Si vous échouez à l’examen du permis de conduire, vous recevrez un
            délai légal avant de pouvoir le repasser. Cela vous laisse le temps
            de travailler sur les points à améliorer et de vous préparer
            efficacement.
            <br />
            <br />
            L’auto-école vous accompagne pour identifier les compétences à
            renforcer et vous proposer des leçons complémentaires si nécessaire.
            <br />
            <br />
            Conseil : prenez ce temps pour vous entraîner avec confiance, restez
            concentré(e) sur vos progrès, et abordez le prochain examen avec
            détermination et sérénité. Chaque nouvelle tentative est une chance
            d’améliorer vos compétences et de réussir.
          </>
        }
      />
      <CreateQuestion
        question="Au bout de combien d’heures puis-je passer l'examen du permis ?"
        answer={
          <>
            En France, la réglementation fixe un minimum légal d'heure de
            conduite pour se présenter à l’examen pratique du permis B :
            <br />- <strong>20 heures</strong> de conduite en boîte manuelle
            <br />- <strong>13 heures</strong> de conduite en boîte automatique
          </>
        }
      />
      <CreateQuestion
        question="Peut-on annuler l’examen de conduite ?"
        answer={
          <>
            Oui, vous pouvez demander l’annulation de votre examen de conduite
            via l'auto-école.
            <br />
            Si l’annulation est effectuée plus de 6 jours avant la date prévue,
            vous pourrez être inscrit(e) sur un autre créneau disponible sans
            délai supplémentaire.
            <br />
            <br />
            Si l’annulation intervient à 6 jours ou moins de la date prévue, un
            délai de présentation de 30 jours à partir de la date de réservation
            annulée sera appliqué.
          </>
        }
      />
      <CreateQuestion
        question="Comment consulter le résultat de mon examen du permis de conduire ?"
        answer={
          <>
            Le résultat de votre examen est disponible sur votre espace
            personnel le lendemin de l'examen, mais il est possible que vous ne
            soyez pas encore inscrit(e) le jour même des résultats. Ne paniquez
            pas si vous n'arrivez pas à vous connecter immédiatement.
            <br />
            <br />
            - Si vous n’êtes pas inscrit(e) : vous devez vous inscrire
            vous-même. Pour cela, il vous suffit de fournir votre numéro NEPH et
            votre email pour créer votre compte. Cela prend seulement quelques
            minutes.
            <br />
            <br />
            - Si vous avez déjà créé un compte mais que vous n’arrivez pas à y
            accéder, utilisez la fonction « mot de passe oublié » pour récupérer
            l’accès.
            <br />
            <br />
            Vous pouvez consulter votre résultat via le lien officiel ou vous
            inscrire au préalable :<br />
            <a
              href="https://www.securite-routiere.gouv.fr/resultats-du-permis-de-conduire"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Accéder à mon résultat
            </a>
          </>
        }
      />
      <strong className="faq-category-title">Renseignements :</strong>

      <CreateQuestion
        id="stage-post-permis"
        question="Stage post-permis pour réduire la période probatoire ?"
        defaultOpen={window.location.hash === "#stage-post-permis"}
        answer={
          <>
            Depuis le 1er janvier 2019, un décret permet aux jeunes conducteurs
            de réaliser une formation pour réduire la période probatoire :
            <br />
            <br />
            • De 3 ans à 2 ans pour un permis B formation traditionnelle ou
            supervisée
            <br />
            • De 2 ans à 1 an et demi pour un permis en conduite accompagnée
            <br />
            <br />
            Pourquoi cette mesure ?
            <br />
            C’est un moyen pour la sécurité routière de réduire les risques
            d’accidents en sensibilisant sur le comportement au volant. Il
            existe en effet un pic d’accident dans les 6 premiers mois après
            l’obtention du permis.
            <br />
            <br />
            Conditions pour passer cette formation :
            <br />
            • Être titulaire d’un premier permis (A1, A2, B1 ou B) entre le 6ème
            et le 12ème mois suivant son obtention
            <br />
            • Ne pas avoir commis d’infraction avec retrait de points
            <br />
            <br />
            Déroulement du stage :
            <br />
            La formation se déroule sur 7 heures, en une seule journée, de
            manière collective dans une auto-école labellisée qualité, afin de
            permettre des échanges entre conducteurs d’une même génération.
            <br />
            <br />
            Thématiques abordées :
            <br />
            • Mieux comprendre et gérer les situations de conduite complexes
            <br />• Assurer des déplacements plus sûrs et citoyens par des
            moyens de mobilité responsables
            <br />
            <a href={PostPermis} target="_blank" rel="noopener noreferrer">
              Cliquer ici pour ouvrir le PDF
            </a>
          </>
        }
      />
      <CreateQuestion
        question="Quels sont les modes de paiement acceptés ?"
        answer="Nous acceptons les virements bancaires, les chèques et les paiements en espèces. Les cartes bancaires ne sont pas acceptées."
      />
      <CreateQuestion
        question="Comment suivre sa progression ?"
        answer={
          <>
            Suivez facilement l’avancée de vos compétences grâce à Kopilote.
            Nous vous envoyons un code personnel Kopilote au début de votre
            formation qui vous permet de consulter votre livret de conduite, vos
            résultats et votre progression dans votre espace personnel.
            <br />
            <br />
            <a
              href="https://share.google/vInodXSTQWkVWUcKc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Accéder à mon Kopilote
            </a>
          </>
        }
      />
      <CreateQuestion
        question="Que faire si je dois reporter ou annuler une leçon ?"
        answer={
          <>
            Si vous devez reporter ou annuler une leçon, merci de nous prévenir
            au moins 48 heures à l’avance.
            <br />
            Dans ce cas, aucun frais ne sera appliqué et nous pourrons
            reprogrammer la séance facilement.
            <br />
            <br />
            Si l’annulation ou le report intervient moins de 48 heures avant le
            rendez-vous, la leçon sera considérée comme effectuée et devra être
            facturée, sauf cas exceptionnel (en cas de maladie, un justificatif
            devra être joint sous 48h).
            <br />
            Cette politique nous permet d’organiser au mieux le planning des
            moniteurs et de garantir des places pour tous les élèves.
            <br />
            <br />
            <a href="#form-annulation"> Click ici pour annuler une leçon </a>
          </>
        }
      />

      <CreateQuestion
        question="Je peux passer le permis avec mon handicap ?"
        answer={
          <>
            <strong>
              Vous avez un handicap et vous souhaitez passer le permis de
              conduire ?
            </strong>
            <br />
            <br />
            <strong>
              Accessibilité fauteuil roulant, porte d’entrée et sortie de
              secours:
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
            Véhicule muni d’une boîte de vitesse à changement de rapport
            automatique.
            <br />
            <br />
            <strong>Si vous êtes sourd ou malentendant</strong>
            <br />
            Des sessions spécialisées sont prévues au moins 2 fois par an pour
            passer l’épreuve théorique générale (code) du permis de conduire.
            <br />
            Un interprète en langue des signes peut vous assister.
            <br />
            Vous pouvez aussi bénéficier d’un dispositif de communication adapté
            de votre choix.
            <br />
            L’épreuve théorique (code) dure 1h30.
            <br />
            Un temps supplémentaire peut être accordé lors de l’épreuve pratique
            en cas de difficultés pour communiquer.
            <br />
            <br />
            <strong>
              Si vous avez un handicap physique (mobilité réduite)
            </strong>
            <br />
            Un temps supplémentaire peut être accordé lors de l’épreuve pratique
            en cas de difficultés de mobilité.
            <br />
            Pour l’épreuve pratique du permis B ou B1, l’inspecteur peut vous
            proposer de commencer l’examen par les questions et les
            vérifications techniques
            <br />
            portant sur l’extérieur du véhicule. Vous pouvez être assisté par un
            expert ou un accompagnateur.
            <br />
            Un véhicule de catégorie B à double commande adapté aux personnes
            handicapées doit remplir les conditions suivantes :
            <br />
            - Avoir été mis en circulation depuis 10 ans maximum, sauf exception
            <br />
            - Avoir des équipements spécifiques : double-commande de freinage,
            rétroviseurs supplémentaires à l’extérieur et à l’intérieur si le
            véhicule le permet,
            <br />
            double-commande de direction (volant)
            <br />
            <br />
            <strong>Si vous êtes dysphasique, dyslexique, dyspraxique</strong>
            <br />
            Vous pouvez passer le code dans des séances spécifiques à condition
            de fournir l’un des 3 justificatifs suivants :
            <br />
            Reconnaissance de qualité de travailleur handicapé (RQTH) ou
            reconnaissance de handicap obtenue auprès de la maison
            départementale des
            <br />
            personnes handicapées (MDPH) et un diagnostic de dyslexie et/ou de
            dysphasie et/ou de dyspraxie
            <br />
            Reconnaissance d’aménagements aux épreuves nationales de l’éducation
            nationale pour troubles de l’apprentissage du langage écrit, du
            langage oral
            <br />
            et/ou écrit et/ou de l’acquisition de la coordination
            <br />
            Certificat médical délivré depuis moins de 6 mois attestant d’un
            trouble spécifique du langage et/ou de la lecture et/ou de
            l’acquisition de la
            <br />
            coordination et nécessitant un aménagement des conditions de passage
            de l’épreuve théorique générale
            <br />
            Un temps supplémentaire peut être accordé lors de l’épreuve pratique
            en cas de difficultés pour communiquer.
            <br />
            <br />
            En fonction de l’handicap, nous vous orienterons vers l’auto école
            qui saura vous accompagner dans votre formation.
            <br />
            Nous disposons d'un véhicule en boite à changement de rapport
            automatique en cas de besoin.
            <br />
            <br />
            <a
              href="https://www.automobile.ceremh.org/index.php?espace=2&amp;ppPage=8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Se renseigner ou passer le permis avec mon handicap ici !
            </a>
          </>
        }
      />
      <CreateQuestion
        question="Comment fonctionne le permis à 1 € par jour et qui peut en bénéficier ?"
        answer={
          <>
            <strong>Définition du permis à 1 € par jour</strong>
            <br />
            L’opération « permis à un euro par jour » facilite le financement
            d’une formation à la conduite de véhicules de la catégorie
            automobile (permis B – véhicules légers) et moto (permis A).
            <br />
            <br />
            <strong>Le permis à 1 € par jour, qu’est-ce que c’est ?</strong>
            <br />
            Il s’agit d’un prêt dont les intérêts sont payés par l’État.
            <br />
            <br />
            Le « permis à un euro par jour » a été mis en place par l'État, en
            partenariat avec les établissements prêteurs et les écoles de
            conduite, pour aider les jeunes de 15 à 25 ans révolus à bénéficier
            d'une facilité de paiement de leur formation au permis de conduire.
            <br />
            Le coût total de la formation au permis ne change pas mais
            l'établissement financier avance l'argent et l'État paie les
            intérêts.
            <br />
            <br />
            <strong>Attention :</strong>
            <br />
            Un crédit vous engage et doit être remboursé. Vérifiez vos capacités
            de remboursement avant de vous engager. <br /> <br />
            <a
              href="https://www.securite-routiere.gouv.fr/passer-son-permis-de-conduire/financement-du-permis-de-
conduire/permis-1-eu-par-jour/definition-du-permis-1-eu-par-jour"
              target="_blank"
              rel="noopener noreferrer"
            >
              Se renseigner comment en bénéficier ici !
            </a>
          </>
        }
      />
      <CreateQuestion
        question="Qu’est-ce que le CPF ?"
        answer={
          <>
            Le CPF (Compte Personnel de Formation) est un compte qui permet à
            toute personne active d’accumuler des droits à la formation tout au
            long de sa vie professionnelle. Ces droits peuvent être utilisés
            pour financer des formations, y compris le permis de conduire.
            <br />
            <br />
            <strong>
              Q2 : Puis-je utiliser mon CPF pour le permis de conduire ?
            </strong>
            <br />
            R : Oui ! <br /> Vous pouvez utiliser votre CPF pour financer le
            permis B (voiture) ou d’autres catégories selon les formations
            proposées par votre auto-école. C’est un moyen pratique de réduire
            ou même couvrir entièrement le coût de votre permis.
            <br />
            <br />
            <strong>Q3 : Comment savoir combien j’ai sur mon CPF ?</strong>
            <br />R : Vous pouvez consulter votre solde directement sur le site
            officiel{" "}
            <a
              href="https://www.moncompteformation.gouv.fr/espace-public/de-nouvelles-regles-pour-mobiliser-votre-cpf"
              target="_blank"
              rel="noopener noreferrer"
            >
              moncompteformation.gouv.fr
            </a>{" "}
            en créant votre compte avec votre numéro de sécurité sociale.
            <br />
            <br />
            <strong>
              Q4 : Comment utiliser mon CPF pour financer mon permis ?
            </strong>
            <br />
            R :<br />
            1. Consultez votre solde CPF.
            <br />
            2. Recherchez la formation “Permis de conduire B” ou la catégorie
            correspondante sur le site CPF.
            <br />
            3. Sélectionnez notre auto-école comme organisme de formation.
            <br />
            4. Suivez les instructions pour réserver et payer avec votre CPF.
            <br />
            <br />
            <strong>
              Q5 : Est-ce que tout le permis peut être financé par le CPF ?
            </strong>
            <br />
            R : Cela dépend de votre solde CPF et du coût du permis. Dans
            certains cas, vous pouvez couvrir la totalité ou seulement une
            partie des frais. Vous pouvez compléter avec vos moyens personnels
            si nécessaire.
            <br />
          </>
        }
      />
      <CreateFormContact />
      <CreateRemoveHour />
    </div>
  );
};

export default Contact;
