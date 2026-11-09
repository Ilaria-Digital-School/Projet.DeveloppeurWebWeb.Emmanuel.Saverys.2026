import "./App.css";
import "./styles/style.css";
import Routes from "../src/Routes/Routes";
import Loader from "./component/loader";
import { useState, useEffect } from "react";
import usePageTracking from "./component/usePageTracking";

function App() {
  const [loading, setLoading] = useState(true);
  const [cookieAccepted, setCookieAccepted] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    const checkConsent = () => {
      setCookieAccepted(localStorage.getItem("cookieConsent") === "accepted");
    };

    checkConsent();
    window.addEventListener(
  "cookieConsentChanged",
  checkConsent
);

    return () =>
  window.removeEventListener(
    "cookieConsentChanged",
    checkConsent
  );
  }, []);


  usePageTracking(cookieAccepted);

  return <div>{loading ? <Loader /> : <Routes />}</div>;
}

export default App;
