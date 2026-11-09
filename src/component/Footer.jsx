import React from "react";
import { Mail, Phone, Facebook, MessageCircle } from "lucide-react";

const Footer = ({ isQuestionPermis }) => {
  return (
    <footer className={`footer ${isQuestionPermis ? "no-margin" : ""}`}>
      <div className="footer-wrapper">
        <div className="footer-block">
          <h3>ECSR RAFA</h3>
          <p>Créé le 06 mai 2022</p>

          <div>
            <p>
              <Phone
                size={20}
                style={{ verticalAlign: "middle", marginRight: "8px" }}
              />
              <a
                style={{ color: "#ccc", fontSize: "13px" }}
                href="tel:+33546740127"
              >
                05 46 74 01 27
              </a>
            </p>
            <p>
              <Mail
                size={20}
                style={{ verticalAlign: "middle", marginRight: "8px" }}
              />
              <a
                style={{ color: "#ccc", fontSize: "13px" }}
                href="mailto:ecsr.rafa@gmail.com"
              >
                ecsr.rafa@gmail.com
              </a>
            </p>
            <span
              style={{
                display: "block",
                borderTop: "2px solid #ccc",
                margin: "20px 0",
              }}
            ></span>
            <p>
              <MessageCircle
                size={20}
                style={{ verticalAlign: "middle", marginRight: "8px" }}
              />
              <a
                style={{ color: "#ccc", fontSize: "13px" }}
                href="https://wa.me/33767796951"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </p>
            <p>
              <Facebook
                size={20}
                style={{ verticalAlign: "middle", marginRight: "8px" }}
              />
              <a
                style={{ color: "#ccc", fontSize: "13px" }}
                href="https://www.facebook.com/ECSR.RAFA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </p>
          </div>
        </div>

        <div className="footer-block">
          <h4>Localisation</h4>

          <a
            href="https://www.google.com/maps/place/ECSR+-+%C3%89cole+de+Conduite+et+de+S%C3%A9curit%C3%A9+Routi%C3%A8re+RAFA/@45.7412712,-0.6620413,18z/data=!4m15!1m8!3m7!1s0x4801032f6d7e081f:0x30ed302a45636b62!2s34+Rue+des+Foug%C3%A8res,+17100+Saintes!3b1!8m2!3d45.741388!4d-0.662283!16s%2Fg%2F11nnl0j1nl!3m5!1s0x480103f11b5b3261:0xdaf1d38c5441129f!8m2!3d45.7412407!4d-0.6625389!16s%2Fg%2F11t9lm_fbf?entry=ttu&g_ep=EgoyMDI2MDIxMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir sur Google Maps
          </a>
          <p>
            34 rue des Fougères
            <br />
            17100 Saintes
          </p>
        </div>

        {/* INFORMATIONS LÉGALES */}
        <div className="footer-block">
          <h4>Informations légales</h4>
          <p>
            <strong>SIRET :</strong> 913 228 078 00014
          </p>
          <p>
            <strong>Gérant :</strong> Rabah BOURATOUA
          </p>
          <p>
            <strong>Préfecture :</strong> Charente-Maritime
          </p>
        </div>

        {/* HÉBERGEMENT */}
        <div className="footer-block">
          <h4>Hébergement</h4>
          <p>
            Site hébergé par <strong>Netlify</strong>
            <br />
            <p> Hosted : Netlify © 2026 </p>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Auto-École ECSR RAFA — Tous droits
        réservés. <br />
        <a
          href="/politique-cookies"
          style={{
            color: "#c92453",
            textDecoration: "underline",
          }}
        >
          Politique des cookies
        </a>
        <span style={{ margin: "0 8px", color: "#888" }}>•</span>
        <a
          href="/politique-cookies#mentions-legales"
          style={{
            color: "#c92453",
            textDecoration: "underline",
            marginLeft: "10px",
          }}
        >
          Mentions légales
        </a>
        {/* <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#c92453", textDecoration: "underline" }}
        >
          Site développé par  — me contacter
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;
