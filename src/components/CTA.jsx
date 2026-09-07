function CTA({ id }) {
  return (
    <section id={id} className="cta">
      <div className="cta-content">
        <h2 className="cta-heading">The 2027 E 450, in full.</h2>
        <p className="cta-subtext">
           Explore the E 450 further at Helms Bros. in Bayside, NY.
        </p>

        <div className="cta-actions">
          <a
            href="https://www.helmsbros.com/new-vehicles/e-class/"
            className="cta-button cta-button-secondary"
          >
            View Helms Bros.
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;