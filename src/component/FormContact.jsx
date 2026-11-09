import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone } from "lucide-react";

const CreateFormContact = () => {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    contactPar: "email",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setSuccessMsg("");
  };

 
  const sendWithMailto = () => {
    const subject = encodeURIComponent("Formulaire de contact");
    const body = encodeURIComponent(
      `Prénom: ${formData.prenom}
Nom: ${formData.nom}
Email: ${formData.email}
Téléphone: ${formData.telephone}
Préférence de contact: ${formData.contactPar}

Message :
${formData.message}`,
    );

    window.location.href = `mailto:ecsr.rafa@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.prenom.trim()) newErrors.prenom = "Prénom requis";
    if (!formData.nom.trim()) newErrors.nom = "Nom requis";
    if (!formData.email.trim()) newErrors.email = "Email requis";
    else if (!validateEmail(formData.email)) newErrors.email = "Email invalide";
    if (!formData.message.trim()) newErrors.message = "Message requis";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formData,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        )
        .then(() => {
          setSuccessMsg("Formulaire envoyé avec succès ✅");
          setFormData({
            prenom: "",
            nom: "",
            email: "",
            telephone: "",
            contactPar: "email",
            message: "",
          });
        })
        .catch((error) => {
         // console.error(error);

          if (error.status === 429) {
            setSuccessMsg(
              "Le service d’email a atteint sa limite. Votre messagerie va s’ouvrir pour envoyer le message.",
            );
          } else {
            setSuccessMsg(
              "Erreur d’envoi. Votre messagerie va s’ouvrir pour envoyer le message.",
            );
          }

      
          sendWithMailto();
        });
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Nous contacter :</h2>
      <div className="contact-info-header">
        <p>
          <Phone
            size={20}
            style={{ verticalAlign: "middle", marginRight: "6px" }}
          />
          <a style={{ color: "#333" }} href="tel:+33546740127">
            05 46 74 01 27
          </a>{" "}
          &nbsp;|&nbsp;
          <Mail
            size={20}
            style={{ verticalAlign: "middle", marginRight: "6px" }}
          />
          <a style={{ color: "#333" }} href="mailto:secretariat.rafa@gmail.com">
            ecsr.rafa@gmail.com
          </a>
        </p>
      </div>
      <h4 style={{ marginBottom: "30px" }}>
        Vous êtes au bon endroit pour nous envoyer vos questions ou demandes !
      </h4>

      <form onSubmit={handleSubmit}>
        <div className="input-row">
          <input
            type="text"
            autoComplete="given-name"
            name="prenom"
            placeholder="Prénom"
            value={formData.prenom}
            onChange={handleChange}
            className={errors.prenom ? "error" : ""}
          />
          <input
            type="text"
            name="nom"
            autoComplete="family-name"
            placeholder="Nom"
            value={formData.nom}
            onChange={handleChange}
            className={errors.nom ? "error" : ""}
          />
        </div>
        {errors.prenom && <span className="error-msg">{errors.prenom}</span>}
        {errors.nom && <span className="error-msg">{errors.nom}</span>}

        <input
          type="text"
          name="email"
          autoComplete="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "error" : ""}
        />
        {errors.email && <span className="error-msg">{errors.email}</span>}

        <input
          type="text"
          name="telephone"
          autoComplete="tel"
          placeholder="Téléphone"
          value={formData.telephone}
          onChange={handleChange}
        />

        <label
          htmlFor="contactPar"
          style={{
            display: "block",
            marginBottom: "0.5rem",
            fontWeight: "500",
          }}
        >
          Préférez-vous être contacté par téléphone ou email ?
        </label>
        <select
          id="contactPar"
          name="contactPar"
          value={formData.contactPar}
          onChange={handleChange}
          style={{
            marginTop: "-15px",
            padding: "0.5rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            minWidth: "200px",
          }}
        >
          <option value="email">Email</option>
          <option value="telephone">Téléphone</option>
        </select>

        <textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? "error" : ""}
        />
        {errors.message && <span className="error-msg">{errors.message}</span>}

        <button type="submit">Envoyer</button>

        {successMsg && <p className="success-msg">{successMsg}</p>}
      </form>
    </div>
  );
};

export default CreateFormContact;
