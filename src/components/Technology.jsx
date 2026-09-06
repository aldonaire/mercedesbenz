import { useRef, useState } from "react";
import dashboard from "../assets/technology/e450-dashboard.webp";
import tech01 from "../assets/technology/e450-technology-01.webp";
import tech02 from "../assets/technology/e450-technology-02.webp";
import tech03 from "../assets/technology/e450-technology-03.webp";

function Technology({ id }) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      image: tech01,
      title: "MBUX Superscreen",
      description: "A single pane of glass spanning the dash.",
    },
    {
      image: tech02,
      title: "Adaptive Ambient Lighting",
      description: "The cabin responds to time of day and mood.",
    },
    {
      image: tech03,
      title: "Voice-Activated Controls",
      description: "Just ask — the car listens.",
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
  const handleNext = () => scrollToIndex(Math.min(activeIndex + 1, features.length - 1));

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
    <section id={id} className="technology">
      <p className="technology-eyebrow">02</p>
      <h2 className="technology-heading">Technology</h2>

      <div className="technology-pillar">
        <div className="technology-pillar-media">
          <img src={dashboard} alt="2027 Mercedes-Benz E 450 dashboard and MBUX display" />
        </div>
        <p className="technology-pillar-text">
          The cabin thinks ahead — anticipating, adjusting, and staying quietly
          out of the way until you need it.
        </p>
      </div>

      <div
        className="technology-carousel-track"
        ref={trackRef}
        onScroll={handleScroll}
      >
        {features.map((feature) => (
          <div className="technology-carousel-card" key={feature.title}>
            <div className="technology-carousel-media">
              <img src={feature.image} alt={feature.title} />
            </div>
            <h3 className="technology-carousel-title">{feature.title}</h3>
            <p className="technology-carousel-description">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="technology-carousel-controls">
        <button
          type="button"
          onClick={handlePrev}
          disabled={activeIndex === 0}
          aria-label="Previous technology feature"
        >
          ‹
        </button>
        <p className="technology-carousel-counter">
          {String(activeIndex + 1).padStart(2, "0")} / {String(features.length).padStart(2, "0")}
        </p>
        <button
          type="button"
          onClick={handleNext}
          disabled={activeIndex === features.length - 1}
          aria-label="Next technology feature"
        >
          ›
        </button>
      </div>
    </section>
  );
}

export default Technology;