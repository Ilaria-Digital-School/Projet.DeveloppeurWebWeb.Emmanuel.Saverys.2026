import { useState, useEffect } from "react";

const CreateBgTitle = ({ slides = [] }) => {
  const [current, setCurrent] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  const goToSlide = (index) => {
    // Change de diapositive et désactive le défilement automatique après une sélection manuelle.
    setCurrent(index);
    setAutoSlide(false);
  };

  useEffect(() => {
    // Lance le défilement automatique uniquement si plusieurs diapositives sont disponibles.
    if (!autoSlide || slides.length <= 1) return;

    const interval = setInterval(() => {
      // Passe à la diapositive suivante et revient à la première après la dernière.
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [autoSlide, slides.length]);

  if (!slides.length) return null;

  return (
    <section className="bg-title">
      <div
        className="slides-wrapper"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="bg-slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay">
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <div className="slider-nav">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default CreateBgTitle;