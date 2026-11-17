import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const CreateService = ({ title, subtitle, points, price }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const faqId = "services";

  const handleClick = () => {
    // Vérifie si l'utilisateur se trouve déjà sur la page contact.
    if (location.pathname === '/contact') {
      window.location.hash = faqId; // Ajoute l'identifiant de la FAQ dans l'URL.

      const element = document.getElementById(faqId); // Récupère l'élément correspondant à cet identifiant.
      if (element) element.scrollIntoView({ behavior: 'smooth' }); // Défile automatiquement jusqu'à l'élément avec une animation fluide.

    } else {
      navigate(`/contact#${faqId}`); // Redirige vers la page contact en ajoutant l'identifiant de la FAQ dans l'URL.

      setTimeout(() => {
        const element = document.getElementById(faqId); // Récupère l'élément après le chargement de la page.
        if (element) element.scrollIntoView({ behavior: 'smooth' }); // Défile jusqu'à la FAQ avec une animation fluide.
      }, 50); // Attend 50 ms pour laisser le temps à React d'afficher la page et son contenu.
    }
  };

  return (
    <div
      className="service-card"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <h3 className="service-title">{title}</h3>
      <p className="service-subtitle">{subtitle}</p>

      <ul className="service-points">
        {points.map((point, index) => (
          <li key={index}>• {point}</li>
        ))}
      </ul>

      <div className="service-price">{price}</div>
    </div>
  );
};

export default CreateService;
