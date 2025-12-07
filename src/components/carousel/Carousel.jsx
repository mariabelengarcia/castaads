import React, { useEffect, useState } from "react";
import "./Carousel.css";
import "../button/primario.css";

export default function Carousel({ images = [], auto = false, interval = 4000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => clearInterval(t);
  }, [auto, interval, images.length]);

  if (!images || images.length === 0) return null;

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }

  function next() {
    setIndex((i) => (i + 1) % images.length);
  }

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            className={`carousel-item ${i === index ? "active" : ""}`}
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button className="carousel-prev boton-primario" onClick={prev} aria-label="Anterior">‹</button>
          <button className="carousel-next boton-primario" onClick={next} aria-label="Siguiente">›</button>
          <div className="carousel-dots">
            {images.map((_, i) => (
              <button key={i} className={`dot ${i === index ? "on" : ""}`} onClick={() => setIndex(i)} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
