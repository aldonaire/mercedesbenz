function Performance({ id }) {
  const stats = [
    { value: '375', unit: 'hp', label: 'Horsepower' },
    { value: '369', unit: 'lb-ft', label: 'Torque' },
    { value: '4.9', unit: 'sec', label: '0–60 mph' },
    { value: '4MATIC®', unit: '', label: 'All-Wheel Drive' },
  ];

  return (
    <section id={id} className="performance">
      <h2 className="performance-heading">Performance</h2>

      <div className="performance-stats">
        {stats.map((stat) => (
          <div className="performance-stat" key={stat.label}>
            <p className="performance-stat-value">
              {stat.value}
              {stat.unit && <span className="performance-stat-unit">{stat.unit}</span>}
            </p>
            <p className="performance-stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Performance;