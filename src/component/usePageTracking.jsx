import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageTracking = (enabled) => {
  const location = useLocation();

  useEffect(() => {
    if (!enabled) return;

    const sendPageView = () => {
      if (!window.gtag) return;

      window.gtag("event", "page_view", {
        page_path: location.pathname,
        page_location: window.location.href,
      });
    };

    if (!window.gtag) {
      const script = document.createElement("script");

      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-JYZ7GHLSKF";

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];

        window.gtag = function () {
          window.dataLayer.push(arguments);
        };

        window.gtag("js", new Date());

        window.gtag("config", "G-JYZ7GHLSKF", {
          anonymize_ip: true,
        });

        sendPageView();
      };

      document.head.appendChild(script);
    } else {
      sendPageView();
    }
  }, [enabled, location.pathname]);
};

export default usePageTracking;
