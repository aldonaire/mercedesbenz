import { useRef, useEffect, useState } from 'react';
import StaggeredText from "./StaggeredText";

function useRevealRef() {
  const observerRef = useRef(null);
  const getObserver = () => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observerRef.current.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
    }
    return observerRef.current;
  };
  return (node) => {
    if (node) getObserver().observe(node);
  };
}

function CountUpValue({ end, decimals = 0, duration = 1400 }) {
  const [display, setDisplay] = useState(decimals > 0 ? (0).toFixed(decimals) : '0');
  const nodeRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            if (prefersReducedMotion) {
              setDisplay(decimals > 0 ? end.toFixed(decimals) : String(end));
              observer.unobserve(node);
              return;
            }

            const start = performance.now();

            const tick = (now) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
              const current = end * eased;

              setDisplay(
                decimals > 0
                  ? current.toFixed(decimals)
                  : String(Math.round(current))
              );

              if (progress < 1) {
                requestAnimationFrame(tick);
              } else {
                setDisplay(decimals > 0 ? end.toFixed(decimals) : String(end));
              }
            };

            requestAnimationFrame(tick);
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, decimals, duration]);

  return <span ref={nodeRef}>{display}</span>;
}

function Performance({ id }) {
  const revealRef = useRevealRef();

  const stats = [
    { value: '375', unit: 'hp', label: 'Horsepower', numeric: true, end: 375, decimals: 0 },
    { value: '369', unit: 'lb-ft', label: 'Torque', numeric: true, end: 369, decimals: 0 },
    { value: '4.4', unit: 'sec', label: '0–60 mph', numeric: true, end: 4.4, decimals: 1 },
    { value: '4MATIC®', unit: '', label: 'All-Wheel Drive', numeric: false },
  ];

  const specs = [
    { label: 'Engine', value: '3.0L Inline-6 Turbo' },
    { label: 'Drive system', value: 'Mild hybrid' },
    { label: 'Transmission', value: '9G-TRONIC 9-speed automatic' },
    { label: 'EPA-estimated fuel economy', value: '22 city / 31 highway mpg' },
    { label: 'Power', value: '375 hp @ 5,800–6,100 rpm' },
    { label: 'Torque', value: '369 lb-ft @ 1,800–5,000 rpm' },
  ];

  return (
    <section id={id} className="performance">
      <div className="section-inner performance-inner">
        <div className="performance-intro reveal" ref={revealRef}>
          <p className="performance-kicker">Performance</p>
          <StaggeredText as="h2" className="performance-heading" text="Power, precisely delivered." />
          <p className="performance-copy">
            The E 450 pairs a turbocharged inline-six with mild-hybrid
            assistance, routed through a 9G-TRONIC nine-speed automatic and
            4MATIC® all-wheel drive.
          </p>
        </div>

        <div className="performance-stats">
          {stats.map((stat, i) => (
            <div
              className="performance-stat reveal"
              key={stat.label}
              ref={revealRef}
              style={{ '--stagger': i + 1 }}
            >
              <p
                className={
                  'performance-stat-value' +
                  (stat.numeric ? '' : ' performance-stat-value--mark')
                }
              >
                {stat.numeric ? (
                  <CountUpValue end={stat.end} decimals={stat.decimals} />
                ) : (
                  stat.value
                )}
                {stat.unit && (
                  <span className="performance-stat-unit">{stat.unit}</span>
                )}
              </p>
              <p className="performance-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        <dl
          className="performance-specs reveal"
          ref={revealRef}
          style={{ '--stagger': stats.length + 1 }}
        >
          {specs.map((spec) => (
            <div className="performance-spec" key={spec.label}>
              <dt className="performance-spec-label">{spec.label}</dt>
              <dd className="performance-spec-value">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Performance;