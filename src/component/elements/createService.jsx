import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const CreateService = ({ title, subtitle, points, price }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const faqId = "services";

  const handleClick = () => {
    if (location.pathname === '/contact') {
      window.location.hash = faqId;
      const element = document.getElementById(faqId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/contact#${faqId}`);
      setTimeout(() => {
        const element = document.getElementById(faqId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 50);
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
