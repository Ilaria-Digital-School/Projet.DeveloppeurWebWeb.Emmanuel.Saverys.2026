import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo-BiWEc0AR.webp";
import LogoLabel from "../assets/logoLabelEcsrRafa.png";
import { FaWheelchair } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const activeClass = "active-link";

  return (
    <nav className="navbar">
      
      {/* 🔥 LOGO + TEXTE */}
      <div className="logo">
  <NavLink to="/">
    <img src={Logo} alt="logo" className="logo-main" />
  </NavLink>

  <div className="logo__text">
    <p>Ecsr Rafa</p>

    <span className="separator"></span> 

    <NavLink to="/label-qualite" className="logo__sub">
      <span>Label qualité</span>
      <img src={LogoLabel} alt="label qualité" />
    </NavLink>
  </div>
</div>

      {/* 🔥 NAV */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeMenu}>
          ✕
        </button>

        <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : "")} onClick={closeMenu}>
          Accueil
        </NavLink>

        <NavLink to="/services" className={({ isActive }) => (isActive ? activeClass : "")} onClick={closeMenu}>
          Services
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => (isActive ? activeClass : "")} onClick={closeMenu}>
          FAQ & Contact
        </NavLink>

        <NavLink to="/avis" className={({ isActive }) => (isActive ? activeClass : "")} onClick={closeMenu}>
          Avis
        </NavLink>

        <NavLink to="/page-pdf" className={({ isActive }) => (isActive ? activeClass : "")} onClick={closeMenu}>
          DocPDF
        </NavLink>

        <NavLink to="/quiz-permis-page" className={({ isActive }) => (isActive ? activeClass : "")} onClick={closeMenu}>
          Quiz-Permis
        </NavLink>
      </div>

      {/* 🔥 HANDICAP MOBILE */}
      <div className="handicap-icon-mobile">
        <NavLink to="/handicap">
          <FaWheelchair size={32} />
        </NavLink>
      </div>

      {/* 🔥 HAMBURGER */}
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

    </nav>
  );
}

export default Navbar;