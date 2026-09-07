import gallery02 from "../assets/gallery/gallery-02.webp";
import gallery03 from "../assets/gallery/gallery-03.webp";
import gallery04 from "../assets/gallery/gallery-04.webp";
import { useState } from "react";

function Gallery({ id }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    { src: gallery02, alt: "2027 Mercedes-Benz E 450 gallery image 2" },
    { src: gallery03, alt: "2027 Mercedes-Benz E 450 gallery image 3" },
    { src: gallery04, alt: "2027 Mercedes-Benz E 450 gallery image 4" },
  ];

  return (
    <section id={id} className="gallery">
      <h2 className="gallery-heading">Gallery</h2>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <button
            type="button"
            className="gallery-item"
            key={image.src}
            onClick={() => setActiveIndex(index)}
          >
            <img src={image.src} alt={image.alt} />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true">
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={() => setActiveIndex(null)}
            aria-label="Close gallery image"
          >
            ×
          </button>
          <img src={images[activeIndex].src} alt={images[activeIndex].alt} />
        </div>
      )}
    </section>
  );
}

export default Gallery;