function Introduction({ id }) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} className="introduction" aria-labelledby={headingId}>
      <div className="introduction-content">
        <p className="introduction-eyebrow">A new expression of motion</p>

        <h2 id={headingId} className="introduction-heading">
          Every detail deliberate.
        </h2>

        <div className="introduction-copy">
          <p>
            The E 450 is engineered for those who notice the difference
            between the expected and the exceptional.
          </p>

          <p>
            From the way light traces its character line to the quiet
            confidence of 4MATIC® all-wheel drive, every element has a purpose.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
