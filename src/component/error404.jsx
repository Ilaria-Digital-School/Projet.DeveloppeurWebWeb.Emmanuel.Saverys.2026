import React from 'react';
import { Link } from 'react-router-dom';

const error404 = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1>404</h1>
        <p>Oups ! La page que vous recherchez n'existe pas.</p>
        <Link to="/" className="home-btn">Retour à l'accueil</Link>
      </div>
    </div>
  );
};

export default error404;
