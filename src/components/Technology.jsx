import { useRef } from "react";
import dashboard from "../assets/technology/e450-dashboard.webp";
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

  const interfacePoints = [
    "Digital displays",
    "Touch controls",
    "Natural-language voice interaction",
    "Personalization",
    "Intelligent assistance",
  ];

  const interfaceStats = [
    { value: "12.3", unit: '"', label: "Digital instrument cluster" },
    { value: "14.4", unit: '"', label: "Central multimedia display" },
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

  const audioFeatures = [
    "Bluetooth audio streaming",
    "HD Radio receiver",
    "SiriusXM with 360L",
  ];

  return (
    <section id={id} className="technology">
      {/* Intro */}
      <div className="tech-intro">
        <div className="tech-intro-inner reveal" ref={revealRef}>
          <p className="tech-eyebrow">Technology</p>
          <h2 className="tech-intro-heading">
            Intelligence, intuitively integrated.
          </h2>
          <p className="tech-intro-copy">
            The E 450 brings intelligent interfaces, personalized controls,
            connected services, navigation and entertainment together around
            the driver - designed to stay quietly out of the way until it's
            needed.
          </p>
        </div>
      </div>

      {/* Interface — MBUX + digital cockpit, merged */}
      <div className="tech-panel tech-panel--light">
        <div className="tech-panel-inner">
          <div className="tech-panel-media reveal" ref={revealRef}>
            <img
              src={dashboard}
              alt="2027 Mercedes-Benz E 450 dashboard and MBUX display"
            />
          </div>
          <div className="tech-panel-text reveal" ref={revealRef} style={{ "--stagger": 1 }}>
            <h3 className="tech-panel-title">
              3rd Generation Mercedes-Benz User Experience
            </h3>
            <p className="tech-panel-copy">
              MBUX brings digital displays, touch controls, natural-language
              voice interaction, personalization and intelligent assistance
              into one connected system built around how the driver actually
              moves through the cabin.
            </p>
            <ul className="tech-panel-list">
              {interfacePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <dl className="tech-interface-stats">
              {interfaceStats.map((stat) => (
                <div className="tech-interface-stat" key={stat.label}>
                  <dt className="tech-interface-stat-value">
                    {stat.value}
                    <span className="tech-interface-stat-unit">{stat.unit}</span>
                  </dt>
                  <dd className="tech-interface-stat-label">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Interaction — intelligent controls + navigation, merged */}
      <div className="tech-panel tech-panel--dark">
        <div className="tech-panel-inner tech-panel--reverse">
          <div className="tech-panel-media reveal" ref={revealRef}>
            <img
              src={tech02}
              alt="Driver interacting with MBUX controls in the E 450"
            />
          </div>
          <div className="tech-panel-text reveal" ref={revealRef} style={{ "--stagger": 1 }}>
            <h3 className="tech-panel-title">
              Technology that learns your rhythm.
            </h3>
            <p className="tech-panel-copy">
              The system is built to adapt to the driver, not the other way
              around - recognizing who's behind the wheel and adjusting how
              it responds, on the road and to where you're headed.
            </p>

            <div className="tech-panel-group">
              <p className="tech-panel-group-label">Interaction</p>
              <ul className="tech-panel-list">
                {interactionFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="tech-panel-group">
              <p className="tech-panel-group-label">Navigation</p>
              <ul className="tech-panel-list">
                {navigationFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Connectivity — connectivity + audio, merged */}
      <div className="tech-panel tech-panel--light">
        <div className="tech-panel-inner">
          <div className="tech-panel-media reveal" ref={revealRef}>
            <img
              src={tech03}
              alt="2027 Mercedes-Benz E 450 center display"
            />
          </div>
          <div className="tech-panel-text reveal" ref={revealRef} style={{ "--stagger": 1 }}>
            <h3 className="tech-panel-title">Always connected, effortlessly.</h3>
            <p className="tech-panel-copy">
              From wireless CarPlay and Android Auto to FrontBass-enhanced
              sound, the E 450 keeps you connected without asking you to
              think about it.
            </p>
            <div className="tech-panel-group">
  <p className="tech-panel-group-label">Connectivity</p>
  <ul className="tech-panel-list">
    {connectivityFeatures.map((feature) => (
      <li key={feature}>{feature}</li>
    ))}
  </ul>
</div>

<div className="tech-panel-group">
  <p className="tech-panel-group-label">Audio</p>
  <ul className="tech-panel-list">
    {audioFeatures.map((feature) => (
      <li key={feature}>{feature}</li>
    ))}
  </ul>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technology;