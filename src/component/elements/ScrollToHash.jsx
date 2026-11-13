import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  // Récupère le fragment (#...) présent dans l'URL grâce à React Router.
  const { hash } = useLocation();

  useEffect(() => {
    // Vérifie si l'URL contient un identifiant de section à atteindre.
    if (!hash) return;

    // Supprime le caractère # pour récupérer uniquement l'identifiant HTML.
    const id = hash.replace("#", "");

    // Attend 100 ms pour laisser le temps à la page de rendre les éléments.
    setTimeout(() => {
      // Recherche dans le DOM l'élément dont l'id correspond au fragment de l'URL.
      const element = document.getElementById(id);

      if (element) {
        // Fait défiler la page jusqu'à l'élément avec un défilement fluide.
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);

    // Relance cet effet lorsque le fragment de l'URL change.
  }, [hash]);

  // Ce composant ne génère aucun élément HTML : il gère uniquement le défilement.
  return null;
};

export default ScrollToHash;