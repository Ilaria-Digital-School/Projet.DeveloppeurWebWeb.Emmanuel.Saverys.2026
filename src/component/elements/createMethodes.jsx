import React from 'react';
import PropTypes from 'prop-types';
import { X } from 'lucide-react';

//last -v 

const CreateMethodes = ({ type, content, onClose }) => {
  return (
    <div className="methode-container">
      <div className="methode-card">
        <div className="methode-header">
          <h2>{type}</h2>
          {onClose && <X size={24} className="close-icon" onClick={onClose} />}
        </div>
        <div className="methode-content">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

CreateMethodes.propTypes = { // Définit les types de propriétés attendues par le composant.
  type: PropTypes.string.isRequired, 
  content: PropTypes.string.isRequired,
  onClose: PropTypes.func, 
};

export default CreateMethodes;
