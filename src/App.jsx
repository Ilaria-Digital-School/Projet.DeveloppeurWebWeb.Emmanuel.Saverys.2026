import "./App.css";
import "./styles/style.css";
import Routes from "../src/Routes/Routes";
import Loader from "./component/loader";
import { useState, useEffect } from "react";

function App() {
  // État du chargement de l'application.
  const [loading, setLoading] = useState(true);

  // État du consentement aux cookies.
  const [cookieAccepted, setCookieAccepted] = useState(false);

  //Permet d'exécuter une action après que React a affiché le composant.
  useEffect(() => {
    // Affiche le Loader pendant 2 secondes.
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Vérifie le consentement enregistré dans le localStorage.
    const checkConsent = () => {
      setCookieAccepted(localStorage.getItem("cookieConsent") === "accepted");
    };

    checkConsent();

    // Écoute les changements de consentement.
    window.addEventListener(
  "cookieConsentChanged",
  checkConsent
);

    return () =>
  window.removeEventListener(
    "cookieConsentChanged",
    checkConsent
  );
  }, []);

                
  return <div>{loading ? <Loader /> : <Routes />}</div>;
}

export default App;