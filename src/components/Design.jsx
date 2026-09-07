import { useEffect, useRef, useState } from "react";
import exteriorFront from "../assets/exterior/e450-front.webp";
import exteriorSide from "../assets/exterior/e450-side.jpg";
import exterior01 from "../assets/exterior/e450-exterior-01.webp";
import exterior02 from "../assets/exterior/e450-exterior-02.webp";
import exterior03 from "../assets/exterior/e450-exterior-03.webp";
import design01 from "../assets/exterior/design-01.webp";

function useRevealOnScroll(count) {
  const refs = useRef([]);
  const [visible, setVisible] = useState(() => new Array(count).fill(false));

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setVisible(new Array(count).fill(true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.revealIndex);
            setVisible((prev) => {
              if (prev[index]) return prev;
              const next = [...prev];
              next[index] = true;
              return next;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [count]);

  return { refs, visible };
}

function Design({ id }) {
  const features = [
    {
      number: "01",
      title: "Chrome-Framed Grille",
      description:
        "A black grille surrounded by chrome creates a distinctive front-end signature, balancing bold contrast with refined detailing.",
      image: exteriorFront,
      alt: "2027 Mercedes-Benz E 450 front three-quarter view showing the chrome-framed grille",
    },
    {
      number: "02",
      title: "Chrome Bodyside Accents",
      description:
        "Chrome detailing along the bodyside and rocker panels adds subtle definition to the E 450's clean and sophisticated profile.",
      image: exteriorSide,
      alt: "2027 Mercedes-Benz E 450 side profile showing chrome bodyside accents",
    },
    {
      number: "03",
      title: "Contrasting Black Trim",
      description:
        "Black window and windshield trim creates a crisp contrast against the bodywork while emphasizing the vehicle's silhouette.",
      image: exterior01,
      alt: "2027 Mercedes-Benz E 450 silhouette at sunset showing black window trim",
    },
    {
      number: "04",
      title: "Intelligent Side Mirrors",
      description:
        "Heated, power-folding mirrors feature driver-side auto-dimming and integrated turn signals for added visibility and everyday convenience.",
      image: exteriorSide,
      alt: "2027 Mercedes-Benz E 450 side mirror detail",
    },
    {
      number: "05",
      title: "LED Lighting",
      description:
        "LED lighting creates a crisp, modern exterior signature while providing clear illumination and a distinctive presence on the road.",
      image: design01,
      alt: "2027 Mercedes-Benz E 450 emerging from a tunnel showing LED lighting signature",
    },
    {
      number: "06",
      title: "Approach Lighting",
      description:
        "Perimeter and approach lighting illuminates the vehicle surroundings as you approach, adding convenience and refinement after dark.",
      image: exterior01,
      alt: "2027 Mercedes-Benz E 450 parked at dusk with approach lighting",
    },
  ];

  const { refs, visible } = useRevealOnScroll(features.length);

  return (
    <section id={id} className="design-editorial">
      <div className="design-editorial-intro">
        <p className="design-editorial-eyebrow">01 — Design</p>
        <h2 className="design-editorial-heading">
          Exterior, considered from every angle.
        </h2>
        <p className="design-editorial-intro-text">
          The E 450 balances refined proportions with carefully considered
          details, creating an exterior that feels athletic, sophisticated,
          and unmistakably composed.
        </p>
      </div>

      <div className="design-editorial-cinematic">
        <img
          src={exterior02}
          alt="2027 Mercedes-Benz E 450 front fascia"
        />
      </div>

      <div className="design-editorial-features">
        {features.map((feature, index) => (
          <div
            key={feature.number}
            ref={(el) => (refs.current[index] = el)}
            data-reveal-index={index}
            className={`design-feature ${
              index % 2 === 1 ? "design-feature-reverse" : ""
            } ${visible[index] ? "is-visible" : ""}`}
          >
            <div className="design-feature-media">
              <img src={feature.image} alt={feature.alt} />
            </div>
            <div className="design-feature-text">
              <p className="design-feature-number">{feature.number}</p>
              <h3 className="design-feature-title">{feature.title}</h3>
              <p className="design-feature-description">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Design;