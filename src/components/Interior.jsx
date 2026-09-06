import { useRef } from "react";

import interior01 from "../assets/interior/e450-interior-01.jpg";
import interior02 from "../assets/interior/e450-interior-02.webp";
import interior03 from "../assets/interior/e450-interior-03.webp";

function useRevealRef() {
  const observerRef = useRef(null);

  const getObserver = () => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              observerRef.current.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
    }
    return observerRef.current;
  };

  return (node) => {
    if (node) getObserver().observe(node);
  };
}

function Interior({ id }) {
  const revealRef = useRevealRef();

  const groups = [
    {
      number: "01",
      eyebrow: "Comfort",
      title: "Designed around you.",
      image: interior02,
      imageAlt: "Front seating and steering wheel in the 2027 Mercedes-Benz E 450",
      items: [
        "10-way driver seat",
        "10-way passenger seat",
        "Power tilt/telescoping steering column",
        "Leather steering wheel with auto tilt-away",
        "Power anti-whiplash tilt front head restraints",
        "Power adjustable rear head restraints",
      ],
      variant: "with-image alt-bg",
    },
    {
      number: "02",
      eyebrow: "Climate & convenience",
      title: "Comfort that works quietly.",
      items: [
        "Voice-activated dual-zone automatic climate control",
        "HVAC with underseat ducts",
        "Residual heat recirculation",
        "Console ducts",
        "Air filtration",
        "Cruise control with steering wheel controls",
        "HomeLink garage door transmitter",
        "Front and rear cupholders",
        "Power fuel flap locking",
        "Valet function",
      ],
      variant: "compact",
    },
    {
      number: "03",
      eyebrow: "Cabin details",
      title: "The details of daily comfort.",
      image: interior03,
      imageAlt: "Interior cabin detail of the 2027 Mercedes-Benz E 450",
      items: [
        "Illuminated locking glove box",
        "Full cloth headliner",
        "Leatherette door trim insert",
        "Front and rear map lights",
        "Full carpet floor covering with front and rear floor mats",
        "Rear carpet floor trim",
        "Driver and passenger visor vanity mirrors",
        "Driver foot rest",
      ],
      variant: "with-image reverse",
    },
    {
      number: "04",
      eyebrow: "Storage",
      title: "Everything has its place.",
      items: [
        "Full floor console with covered storage",
        "Mini overhead console with storage",
        "Instrument panel covered bin",
        "Driver, passenger and rear door bins",
        "Two seatback storage pockets",
        "Cargo area concealed storage",
        "Cargo space lights",
      ],
      variant: "compact",
    },
    {
      number: "05",
      eyebrow: "Information & security",
      title: "Connected to the essentials.",
      items: [
        "Driver information center",
        "Redundant digital speedometer",
        "Outside temperature gauge",
        "Digital/analog appearance",
        "Day-night auto-dimming rearview mirror",
        "Tracker system",
        "Security system with video/image recording",
        "Immobilizer",
        "Delayed accessory power",
        "Two 12V DC power outlets",
      ],
      variant: "compact quiet",
    },
  ];

  return (
    <section id={id} className="interior">
      <div className="interior-intro">
        <div className="interior-intro-inner reveal" ref={revealRef}>
          <p className="interior-eyebrow">Interior</p>
          <h2 className="interior-intro-heading">Comfort, considered.</h2>
          <p className="interior-intro-copy">
            The cabin is built around driver and passenger comfort, control
            and everyday usability — every surface, seat and switch placed
            with daily use in mind.
          </p>
        </div>
      </div>

      <div className="interior-hero">
        <div
          className="interior-hero-media reveal"
          ref={revealRef}
        >
          <img
            src={interior01}
            alt="Interior cabin of the 2027 Mercedes-Benz E 450"
          />
        </div>
      </div>

      {groups.map((group) => {
        const hasImage = group.variant.includes("with-image");
        const isReverse = group.variant.includes("reverse");
        const isAltBg = group.variant.includes("alt-bg");
        const isQuiet = group.variant.includes("quiet");

        const groupClassName = [
          "interior-group",
          hasImage ? "interior-group--with-image" : "interior-group--compact",
          isReverse ? "interior-group--reverse" : "",
          isAltBg ? "interior-group--alt-bg" : "",
          isQuiet ? "interior-group--quiet" : "",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <div className={groupClassName} key={group.number}>
            <div className="interior-group-inner">
              <div className="interior-group-header reveal" ref={revealRef}>
                <p className="interior-group-label">
                  {group.number} / {group.eyebrow}
                </p>
                <h3 className="interior-group-title">{group.title}</h3>
              </div>

              <div className="interior-group-body">
                {hasImage && (
                  <div
                    className="interior-group-media reveal"
                    ref={revealRef}
                    style={{ "--stagger": 1 }}
                  >
                    <img src={group.image} alt={group.imageAlt} />
                  </div>
                )}

                <ul
                  className="interior-group-list reveal"
                  ref={revealRef}
                  style={{ "--stagger": hasImage ? 2 : 1 }}
                >
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Interior;