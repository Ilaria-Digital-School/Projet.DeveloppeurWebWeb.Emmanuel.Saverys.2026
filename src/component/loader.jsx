import React, { useEffect, useState } from 'react';

const Loader = () => {
  const [logoSrc, setLogoSrc] = useState(null);

  useEffect(() => {
    import('../assets/logo-BiWEc0AR.webp').then((mod) => {
      const img = new Image();
      img.src = mod.default; 
      img.onload = () => setLogoSrc(mod.default);
    });
  }, []);

  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <img
          src={logoSrc || '/assets/logo-placeholder.webp'}
          alt="Chargement..."
          className="loader-logo"
          width={315}
          height={315}
          style={{ opacity: logoSrc ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
        />
        <div className="loader-glow"></div>
      </div>
    </div>
  );
};

export default Loader;
