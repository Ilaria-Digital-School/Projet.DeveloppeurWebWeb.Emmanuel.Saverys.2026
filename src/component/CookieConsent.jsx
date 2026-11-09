import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const CookieConsent = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const excludedPaths = ["/quiz-synthese", "/quiz-academique"];

    const currentPath = location.pathname.replace(/\/$/, "").toLowerCase();

    // Pas de bandeau sur les quiz
    if (excludedPaths.includes(currentPath)) {
      setShow(false);
      return;
    }

    const consent = localStorage.getItem("cookieConsent");

    // Affiche seulement si jamais accepté
    setShow(consent !== "accepted");
  }, [location.pathname]);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");

    window.dispatchEvent(new Event("cookieConsentChanged"));

    setShow(false);
  };

  const rejectCookies = () => {
    // Aucun stockage du refus
    // Le bandeau reviendra au prochain refresh
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-popup">
      <p>
        Nous utilisons des cookies afin d'assurer le bon fonctionnement du site,
        améliorer votre expérience et mesurer sa fréquentation avec Google
        Analytics uniquement après votre consentement.{" "}
        <Link to="/politique-cookies" target="_blank" rel="noopener noreferrer">
          En savoir plus
        </Link>
      </p>

      <div className="cookie-actions">
        <button className="accept-btn" onClick={acceptCookies}>
          Accepter
        </button>

        <button className="reject-btn" onClick={rejectCookies}>
          Refuser
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
