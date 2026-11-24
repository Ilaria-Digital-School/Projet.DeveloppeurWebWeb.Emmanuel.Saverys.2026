
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaWheelchair,
  FaHome,
  FaCar,
  FaQuestionCircle,
  FaStar,
  FaFilePdf,
  FaClipboardCheck,
  FaTimes,
  FaBars,
} from "react-icons/fa";

import Logo from "../assets/logo-BiWEc0AR.webp";
import LogoLabel from "../assets/logoLabelEcsrRafa.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((previous) => !previous);

  // Liens et icônes de navigation
  const navItems = [
    { to: "/", label: "Accueil", icon: <FaHome /> },
    { to: "/services", label: "Services", icon: <FaCar /> },
    { to: "/contact", label: "FAQ & Contact", icon: <FaQuestionCircle /> },
    { to: "/avis", label: "Avis", icon: <FaStar /> },
    { to: "/page-pdf", label: "DocPDF", icon: <FaFilePdf /> },
    {
      to: "/quiz-permis-page",
      label: "Quiz-Permis",
      icon: <FaClipboardCheck />,
    },
  ];

  return (
    <nav className={`navbar ${isOpen ? "menu-open" : ""}`}>
      {/* Logo principal et label qualité */}
      <div className="logo">
        <NavLink to="/" onClick={closeMenu}>
          <img src={Logo} alt="ECSR Rafa" className="logo-main" />
        </NavLink>

        <div className="logo__text">
          <p>Ecsr Rafa</p>
          <span className="separator"></span>

          <NavLink
            to="/label-qualite"
            className="logo__sub"
            onClick={closeMenu}
          >
            <span>Label qualité</span>
            <img src={LogoLabel} alt="Label qualité" />
          </NavLink>
        </div>
      </div>

      {/* Liens de navigation */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={closeMenu}
          >
            <span className="nav-link-icon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>

      {/* Accès à l'espace accessibilité */}
      <div className="handicap-icon-mobile">
        <NavLink
          to="/handicap"
          onClick={closeMenu}
          aria-label="Accessibilité"
        >
          <FaWheelchair />
        </NavLink>
      </div>

      {/* Hamburger toujours accessible lorsque le menu est ouvert */}
      <button
        type="button"
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;
