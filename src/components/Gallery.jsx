import gallery02 from "../assets/technology/e450-technology-01.webp";
import gallery03 from "../assets/gallery/gallery-03.webp";
import gallery04 from "../assets/gallery/gallery-04.webp";
import gallery05 from "../assets/exterior/e450-exterior-03.webp";
import gallery06 from "../assets/exterior/e450-side.jpg";
import { useEffect, useState } from "react";

function Gallery({ id }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    { src: gallery05, alt: "2027 Mercedes-Benz E 450 gallery image 4" },
    { src: gallery02, alt: "2027 Mercedes-Benz E 450 gallery image 1" },
    { src: gallery03, alt: "2027 Mercedes-Benz E 450 gallery image 2" },
    { src: gallery04, alt: "2027 Mercedes-Benz E 450 gallery image 3" },
    { src: gallery06, alt: "2027 Mercedes-Benz E 450 gallery image 5" },
  ];

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  return (
    <section id={id} className="gallery">
      <h2 className="gallery-heading">Gallery</h2>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <button
            type="button"
            className={`gallery-item gallery-item-${index}`}
            key={image.src}
            onClick={() => setActiveIndex(index)}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
            <span className="gallery-item-number">
              {String(index + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={close}
            aria-label="Close gallery image"
          >
            ×
          </button>

          <button
            type="button"
            className="gallery-lightbox-nav gallery-lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <img
            key={activeIndex}
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            className="gallery-lightbox-nav gallery-lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            ›
          </button>

          <p className="gallery-lightbox-counter">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </p>
        </div>
      )}
    </section>
  );
}

export default Gallery;