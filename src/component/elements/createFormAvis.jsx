import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// Récupère les identifiants EmailJS depuis les variables d'environnement.
export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const CreateFormAvis = () => {
  // Centralise les informations saisies dans le formulaire.
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    avis: "",
    moniteur: "",
    rating: 0,
    autorisation: "", 
  });

  const [formMsg, setFormMsg] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    // Met à jour le champ correspondant grâce à son attribut name.
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormMsg("");
  };

  const handleRating = (value) => {
    // Enregistre la note sélectionnée par l'utilisateur.
    setFormData((prev) => ({ ...prev, rating: value }));
    setFormMsg("");
  };

  const sendWithMailto = () => {
    // Prépare le sujet et le contenu du mail en encodant les caractères spéciaux.
    const subject = encodeURIComponent("Nouvel avis client");
    const body = encodeURIComponent(
`Nom: ${formData.nom}
Prénom: ${formData.prenom}
Moniteur: ${formData.moniteur}
Note: ${formData.rating}/5
Autorisation de publication: ${formData.autorisation}

Avis :
${formData.avis}`
    );

    // Ouvre la messagerie de l'utilisateur avec le message prérempli.
    window.location.href = `mailto:saveryse@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tente d'envoyer les données du formulaire avec EmailJS.
    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formData,
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsError(false);
        setFormMsg("Merci pour votre avis ! ⭐");
        // Réinitialise le formulaire après un envoi réussi.
        setFormData({
          nom: "",
          prenom: "",
          avis: "",
          moniteur: "",
          rating: 0,
          autorisation: "", 
        });
      })
      .catch(() => {
        // En cas d'échec d'EmailJS, propose l'envoi via la messagerie de l'utilisateur.
        setIsError(true);
        setFormMsg(
          "Le service d’envoi est momentanément indisponible. Votre messagerie va s’ouvrir pour envoyer le message."
        );
        sendWithMailto();
      });
  };

  return (
    <div className="form-container">
      <h2>Laisser un avis</h2>

      <form onSubmit={handleSubmit} className="avis-form">
        <div className="name-row">
          <div className="form-group">
            <input
              type="text"
              name="nom"
              value={formData.nom}
              placeholder="Nom"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              placeholder="Prénom"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="moniteur">Moniteur</label>
          <select
            id="moniteur"
            name="moniteur"
            value={formData.moniteur}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionnez un moniteur</option>
            <option value="Rabah">Rabah</option>
            <option value="Ilhem">Ilhem</option>
            <option value="Tous">Tous</option>
          </select>
        </div>

        <div className="form-group">
          <label>Note :</label>
          <div className="stars">
            {[5, 4, 3, 2, 1].map((star) => (
              <span
                key={star}
                className={`star ${formData.rating >= star ? "filled" : ""}`}
                onClick={() => handleRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="avis">Votre avis</label>
          <textarea
            id="avis"
            name="avis"
            value={formData.avis}
            onChange={handleChange}
            placeholder="Écrivez votre avis ici..."
            rows="5"
            required
          />
        </div>

        <div className="form-group">
          <label>
            Autorisez-vous la publication de votre avis sur le site ?
          </label>

          <div className="publication-choice">
            <button
              type="button"
              className={`choice-btn ${
                formData.autorisation === "oui" ? "active" : ""
              }`}
              onClick={() =>
                setFormData((prev) => ({ ...prev, autorisation: "oui" }))
              }
            >
              Oui
            </button>

            <button
              type="button"
              className={`choice-btn ${
                formData.autorisation === "non" ? "active" : ""
              }`}
              onClick={() =>
                setFormData((prev) => ({ ...prev, autorisation: "non" }))
              }
            >
              Non
            </button>
          </div>
        </div>

        <button type="submit" className="btn-submit">
          Envoyer
        </button>

        {formMsg && (
          <p
            style={{
              marginTop: "10px",
              color: isError ? "#c62828" : "#2e7d32",
              fontWeight: "500",
            }}
          >
            {formMsg}
          </p>
        )}
      </form>
    </div>
  );
};

export default CreateFormAvis;