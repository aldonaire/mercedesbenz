import { useRef, useState } from "react";
import exteriorFront from "../assets/exterior/e450-front.webp";
import exteriorSide from "../assets/exterior/e450-side.jpg";
import exterior01 from "../assets/exterior/e450-exterior-01.webp";
import exterior02 from "../assets/exterior/e450-exterior-02.webp";
import exterior03 from "../assets/exterior/e450-exterior-03.webp";

function Design({ id }) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const details = [
    {
      image: exteriorSide,
      alt: "2027 Mercedes-Benz E 450 side profile",
      title: "One continuous line",
      description: "The silhouette is drawn without a single unnecessary break.",
    },
    {
      image: exterior01,
      alt: "2027 Mercedes-Benz E 450 exterior detail",
      title: "LED signature",
      description: "Light as a deliberate design element, not an afterthought.",
    },
    {
      image: exterior02,
      alt: "2027 Mercedes-Benz E 450 exterior detail",
      title: "Character line",
      description: "A crease that catches light differently at every angle.",
    },
    {
      image: exterior03,
      alt: "2027 Mercedes-Benz E 450 exterior detail",
      title: "Wheel design",
      description: "Precision-cut, purpose-built, and unmistakably E-Class.",
    },
  ];

  const scrollToIndex = (index) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index];
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    setActiveIndex(index);
  };

  const handlePrev = () => scrollToIndex(Math.max(activeIndex - 1, 0));
  const handleNext = () => scrollToIndex(Math.min(activeIndex + 1, details.length - 1));

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const scrollLeft = track.scrollLeft;
    let closestIndex = 0;
    let closestDistance = Infinity;
    Array.from(track.children).forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    setActiveIndex(closestIndex);
  };

  return (
    <section id={id} className="design">
      <p className="design-eyebrow">01</p>
      <h2 className="design-heading">Design</h2>

      <div className="design-pillar">
        <div className="design-pillar-media">
          <img src={exteriorFront} alt="2027 Mercedes-Benz E 450 front fascia" />
        </div>
        <p className="design-pillar-text">
          A face that leads with restraint — every surface considered, nothing added
          without reason.
        </p>
      </div>

      <div
        className="design-carousel-track"
        ref={trackRef}
        onScroll={handleScroll}
      >
        {details.map((detail) => (
          <div className="design-carousel-card" key={detail.title}>
            <div className="design-carousel-media">
              <img src={detail.image} alt={detail.alt} />
            </div>
            <h3 className="design-carousel-title">{detail.title}</h3>
            <p className="design-carousel-description">{detail.description}</p>
          </div>
        ))}
      </div>

      <div className="design-carousel-controls">
        <button
          type="button"
          onClick={handlePrev}
          disabled={activeIndex === 0}
          aria-label="Previous design detail"
        >
          ‹
        </button>
        <p className="design-carousel-counter">
          {String(activeIndex + 1).padStart(2, "0")} / {String(details.length).padStart(2, "0")}
        </p>
        <button
          type="button"
          onClick={handleNext}
          disabled={activeIndex === details.length - 1}
          aria-label="Next design detail"
        >
          ›
        </button>
      </div>
    </section>
  );
}

export default Design;