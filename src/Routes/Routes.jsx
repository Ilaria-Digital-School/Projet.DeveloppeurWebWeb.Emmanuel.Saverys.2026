import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../component/Navbar.jsx";
import Accueil from "../pages/Accueil.jsx";
import Avis from "../pages/Avis.jsx";
import Contact from "../pages/Contact.jsx";
import Offres from "../pages/Offres.jsx";
import PagePDF from "../pages/PagePDF.jsx";
import Footer from "../component/Footer.jsx";
import Error404 from "../component/error404.jsx";
import CookieConsent from "../component/CookieConsent.jsx";
import PolitiqueCookies from "../pages/PolitiqueCookies.jsx";
import Handicap from "../pages/Handicap.jsx";
import CreateMultiChoice from "../component/elements/createMultiChoice.jsx";
import ScrollToHash from "../component/elements/ScrollToHash.jsx";
import LabelPage from "../pages/LabelPage.jsx";
import QuestionsExam from "../pages/QuestionsExam.jsx";

function App() {
  const location = useLocation();

const path = location.pathname.replace(/\/$/, "").toLowerCase();

const allowedPaths = ["/quiz-academique", "/quiz-synthese", "/quiz-permis-page", "/label-qualite"];

const isQuestionPermis = allowedPaths.includes(path);
  return (
    <div
      className="app"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <ScrollToHash />
      <Navbar />

      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/*" element={<Error404 />} />
          <Route path="/avis" element={<Avis />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/label-qualite" element={<LabelPage />} />
          <Route path="/services" element={<Offres />} />
          <Route path="/page-pdf" element={<PagePDF />} />
          <Route path="/politique-cookies" element={<PolitiqueCookies />} />
          <Route path="/quiz-permis-page" element={<CreateMultiChoice />} />
          <Route path="/handicap" element={<Handicap />} />
          <Route path="/laboratoire" element={<QuestionsExam />} />
        </Routes>
      </div>

       <Footer isQuestionPermis={isQuestionPermis} />
       <CookieConsent />
    </div>
  );
}

export default App;
