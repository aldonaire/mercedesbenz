import { useRef } from "react";

import dashboard from "../assets/technology/e450-dashboard.webp";
import tech01 from "../assets/technology/e450-technology-01.webp";
import tech02 from "../assets/technology/e450-technology-02.webp";
import tech03 from "../assets/technology/e450-technology-03.webp";

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

function Technology({ id }) {
  const revealRef = useRevealRef();

  const mbuxPoints = [
    "Digital displays",
    "Touch controls",
    "Natural-language voice interaction",
    "Personalization",
    "Intelligent assistance",
  ];

  const cockpitDisplays = [
    {
      value: "12.3",
      unit: '"',
      label: "Digital instrument cluster",
      description:
        "Customizable instrumentation and vehicle information, arranged directly ahead of the driver.",
    },
    {
      value: "14.4",
      unit: '"',
      label: "Central multimedia display",
      description:
        "Navigation, vehicle functions, climate control and multimedia from a single touchscreen.",
    },
  ];

  const interactionFeatures = [
    "Voice control with natural language understanding",
    "“Hey, Mercedes” keyword activation",
    "Zero-layer menu concept",
    "MBUX profiles, routines and templates",
    "Biometric authentication",
    "Driver camera",
    "Steering wheel touch control buttons",
  ];

  const navigationFeatures = [
    "MBUX Augmented Video for Navigation",
    "Live traffic information",
    "Online map updates",
  ];

  const connectivityFeatures = [
    "Wireless Apple CarPlay®",
    "Wireless Android Auto™",
    "Over-the-air software updates",
    "Hands-free Bluetooth® interface",
    "Front-cabin wireless charging with NFC pairing",
    "Three USB-C charging ports",
  ];

  const entertainmentSecondary = [
    "Bluetooth audio streaming",
    "HD Radio receiver",
    "SiriusXM with 360L",
  ];

  return (
    <section id={id} className="technology">
      {/* 1 — Introduction */}
      <div className="tech-intro">
        <div className="tech-intro-inner reveal" ref={revealRef}>
          <p className="tech-eyebrow">Technology</p>
          <h2 className="tech-intro-heading">
            Intelligence, intuitively integrated.
          </h2>
          <p className="tech-intro-copy">
            The E 450 brings intelligent interfaces, personalized controls,
            connected services, navigation and entertainment together around
            the driver — designed to stay quietly out of the way until it's
            needed.
          </p>
        </div>
      </div>

      {/* 2 — MBUX hero */}
      <div className="tech-mbux">
        <div className="tech-mbux-inner">
          <div className="tech-mbux-media reveal" ref={revealRef}>
            <img
              src={dashboard}
              alt="2027 Mercedes-Benz E 450 dashboard and MBUX display"
            />
          </div>
          <div
            className="tech-mbux-text reveal"
            ref={revealRef}
            style={{ "--stagger": 1 }}
          >
            <h3 className="tech-mbux-title">
              3rd Generation Mercedes-Benz User Experience
            </h3>
            <p className="tech-mbux-copy">
              MBUX brings digital displays, touch controls, natural-language
              voice interaction, personalization and intelligent assistance
              into one connected system built around how the driver actually
              moves through the cabin.
            </p>
            <ul className="tech-mbux-points">
              {mbuxPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 3 — Digital cockpit */}
      <div className="tech-cockpit">
        <div className="tech-cockpit-inner">
          <p className="tech-eyebrow reveal" ref={revealRef}>
          </p>
          <div className="tech-cockpit-visual">
            <div className="tech-cockpit-media reveal" ref={revealRef} style={{ "--stagger": 1 }}>
              <img src={tech01} alt="2027 Mercedes-Benz E 450 digital displays" />
            </div>
            <dl className="tech-cockpit-stats reveal" ref={revealRef} style={{ "--stagger": 2 }}>
              {cockpitDisplays.map((display) => (
                <div className="tech-cockpit-stat" key={display.label}>
                  <dt className="tech-cockpit-value">
                    {display.value}
                    <span className="tech-cockpit-unit">{display.unit}</span>
                  </dt>
                  <dd className="tech-cockpit-label">{display.label}</dd>
                  <dd className="tech-cockpit-description">{display.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* 4 — Intelligent interaction */}
      <div className="tech-interaction">
        <div className="tech-interaction-inner">
          <div className="tech-interaction-media reveal" ref={revealRef}>
            <img
              src={tech02}
              alt="Driver interacting with MBUX controls in the E 450"
            />
          </div>
          <div
            className="tech-interaction-text reveal"
            ref={revealRef}
            style={{ "--stagger": 1 }}
          >
            <h3 className="tech-interaction-title">
              Technology that learns your rhythm.
            </h3>
            <p className="tech-interaction-copy">
              The system is built to adapt to the driver, not the other way
              around — recognizing who's behind the wheel and adjusting how
              it responds.
            </p>
            <ul className="tech-interaction-list">
              {interactionFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 5 — Navigation */}
      <div className="tech-navigation">
        <div className="tech-navigation-inner">
          <div className="tech-navigation-media reveal" ref={revealRef}>
            <img
              src={tech03}
              alt="MBUX navigation display in the 2027 Mercedes-Benz E 450"
            />
          </div>
          <div
            className="tech-navigation-text reveal"
            ref={revealRef}
            style={{ "--stagger": 1 }}
          >
            <p className="tech-eyebrow">Navigation</p>
            <h3 className="tech-navigation-title">MBUX Navigation</h3>
            <ul className="tech-navigation-list">
              {navigationFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 6 — Connectivity */}
      <div className="tech-connectivity">
        <div className="tech-inner reveal" ref={revealRef}>
          <p className="tech-eyebrow">Connectivity</p>
          <ul className="tech-connectivity-grid">
            {connectivityFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 7 — Audio & entertainment */}
      <div className="tech-entertainment">
        <div className="tech-entertainment-inner">
          <div className="tech-entertainment-media reveal" ref={revealRef}>
            <img
              src={dashboard}
              alt="Cabin interior of the 2027 Mercedes-Benz E 450"
            />
          </div>
          <div
            className="tech-entertainment-text reveal"
            ref={revealRef}
            style={{ "--stagger": 1 }}
          >
            <h3 className="tech-entertainment-title">
              Your cabin. Your soundtrack.
            </h3>
            <p className="tech-entertainment-copy">
              FrontBass turns the front doors into part of the sound stage,
              and the available MBUX Entertainment Package Plus builds a
              fuller listening experience around it.
            </p>
            <ul className="tech-entertainment-list">
              {entertainmentSecondary.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technology;