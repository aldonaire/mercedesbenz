import { useEffect, useRef, useState } from "react";
import exteriorFront from "../assets/exterior/e450-front.webp";
import exteriorSide from "../assets/exterior/e450-side.jpg";
import exterior01 from "../assets/exterior/e450-exterior-01.webp";
import exterior02 from "../assets/exterior/e450-exterior-02.webp";
import exterior03 from "../assets/exterior/e450-exterior-03.webp";
import design01 from "../assets/exterior/design-01.webp";
import design02 from "../assets/exterior/design-02.webp";
import gallery02 from "../assets/gallery/gallery-02.webp";
import StaggeredText from "./StaggeredText";

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
  const revealRef = useRef(null);


  const features = [
    {
      number: "01",
      title: "Chrome-Framed Grille",
      description:
        "A black grille framed in chrome creates a defined front-end signature with bold contrast.",
      image: design02,
      alt: "2027 Mercedes-Benz E 450 front three-quarter view showing the chrome-framed grille",
    },

    {
      number: "02",
      title: "Chrome Bodyside Accents",
      description:
        "Chrome detailing along the bodyside and rocker panels adds subtle definition to the E 450's profile.",
      image: gallery02,
      alt: "2027 Mercedes-Benz E 450 side profile showing chrome bodyside accents",
    },

    {
      number: "03",
      title: "Contrasting Black Trim",
      description:
        "Black window and windshield trim creates crisp contrast against the bodywork, emphasizing the vehicle's silhouette.",
      image: exterior01,
      alt: "2027 Mercedes-Benz E 450 silhouette at sunset showing black window trim",
    },

    {
      number: "04",
      title: "LED Lighting",
      description:
        "LED lighting creates a crisp, modern signature while providing clear illumination on the road.",
      image: design01,
      alt: "2027 Mercedes-Benz E 450 emerging from a tunnel showing LED lighting signature",
    },
  ];



  const { refs, visible } = useRevealOnScroll(features.length);

  return (
    <section id={id} className="design-editorial">
      <div
        className="design-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(8,10,12,0.72) 0%, rgba(8,10,12,0.48) 38%, rgba(8,10,12,0.18) 100%), url(${exteriorFront})`,
        }}
      >
        <div className="design-hero-copy">
          <p className="tech-eyebrow">Design</p>
          <StaggeredText as="h2" className="tech-intro-heading" text="Exterior, considered from every angle." />
          <p className="tech-intro-copy">
            The E 450 balances refined proportions with carefully considered
            details, creating an exterior that feels athletic, sophisticated,
            and unmistakably composed.
          </p>
        </div>
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