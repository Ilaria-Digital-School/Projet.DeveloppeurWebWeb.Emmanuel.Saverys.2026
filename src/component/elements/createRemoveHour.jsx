import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const CreateFormAnnulation = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    date: "",
    heure: "",
    nbHeures: 1,
    motif: "",
  });

  const [formMsg, setFormMsg] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFormMsg("");
  };

  const sendWithMailto = () => {
    const subject = encodeURIComponent("Demande d'annulation d'heure");
    const body = encodeURIComponent(
      `Nom: ${formData.nom}
Prénom: ${formData.prenom}
Date: ${formData.date}
Heure: ${formData.heure}
Nombre d'heures: ${formData.nbHeures}
Motif: ${formData.motif || "Aucun"}`
    );

    window.location.href = `mailto:ecsr.rafa@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formData,
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsError(false);
        setFormMsg("Votre demande d'annulation a été envoyée ✅");
        setFormData({
          nom: "",
          prenom: "",
          date: "",
          heure: "",
          nbHeures: 1,
          motif: "",
        });
      })
      .catch(() => {
        setIsError(true);
        setFormMsg(
          "Le service d’envoi est momentanément indisponible. Votre messagerie va s’ouvrir."
        );
        sendWithMailto();
      });
  };

  return (
    <div className="annulation-card" id="form-annulation">
      <h2>Annulation d'heure de conduite</h2>

      <form onSubmit={handleSubmit} className="form-annulation">
        
        <div className="field-row">
          <div className="field-container">
            <label htmlFor="nom">Nom</label>
            <input
              id="nom"
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field-container">
            <label htmlFor="prenom">Prénom</label>
            <input
              id="prenom"
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="field-column">
          <div className="field-container">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field-container">
            <label htmlFor="heure">Heure</label>
            <input
              id="heure"
              type="time"
              name="heure"
              value={formData.heure}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="field-container">
          <label htmlFor="nbHeures">Nombre d'heures</label>
          <input
            id="nbHeures"
            type="number"
            name="nbHeures"
            min="1"
            value={formData.nbHeures}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field-container">
          <label htmlFor="motif">Motif (optionnel)</label>
          <textarea
            id="motif"
            name="motif"
            value={formData.motif}
            onChange={handleChange}
            rows="3"
          />
        </div>

        <button type="submit" className="btn-submit">
          Envoyer
        </button>

        {formMsg && (
          <p className={`form-msg ${isError ? "error" : "success"}`}>
            {formMsg}
          </p>
        )}
      </form>
    </div>
  );
};

export default CreateFormAnnulation;