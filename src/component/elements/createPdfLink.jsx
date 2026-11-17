import React from "react";
import { FaFilePdf } from "react-icons/fa"; 

const CreatePdfLink = ({ pdfUrl, title }) => {
  return (
    <a
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="pdf-link-card"
    >
      <div className="pdf-icon">
        <FaFilePdf />
      </div>
      <div className="pdf-title">{title || "Voir le PDF"}</div>
    </a>
  );
};

export default CreatePdfLink;
