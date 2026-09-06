import { useRef } from 'react';

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

function Performance({ id }) {
  const revealRef = useRevealRef();

  const stats = [
    { value: '375', unit: 'hp', label: 'Horsepower', numeric: true },
    { value: '369', unit: 'lb-ft', label: 'Torque', numeric: true },
    { value: '4.4', unit: 'sec', label: '0–60 mph', numeric: true },
    { value: '4MATIC®', unit: '', label: 'All-Wheel Drive', numeric: false },
  ];

  const specs = [
    { label: 'Engine', value: '3.0L Inline-6 Turbo' },
    { label: 'Drive system', value: 'Mild hybrid' },
    { label: 'Transmission', value: '9G-TRONIC 9-speed automatic' },
    { label: 'EPA est. mpg', value: '22 city / 31 highway' },
    { label: 'Power', value: '375 hp @ 5,800–6,100 rpm' },
    { label: 'Torque', value: '369 lb-ft @ 1,800–5,000 rpm' },
  ];

  return (
    <section id={id} className="performance">
      <div className="section-inner performance-inner">
        <div className="performance-intro reveal" ref={revealRef}>
          <p className="performance-kicker">Performance</p>
          <h2 className="performance-heading">Power, precisely delivered.</h2>
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
                {stat.value}
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