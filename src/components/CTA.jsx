function CTA({ id }) {
  return (
    <section id={id} className="cta">
      <div className="cta-content">
        <h2 className="cta-heading">Reserve your 2027 E 450.</h2>
        <p className="cta-subtext">
          Visit Helms Bros. in Bayside or schedule a private viewing.
        </p>

        <div className="cta-actions">
          <a
            href="https://www.helmsbros.com/inventory/new-2027-mercedes-benz-e-class-e-450-awd-4matic®-sedan-w1klf6bb4va321513/"
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