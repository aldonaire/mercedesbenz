import heroImage from "../assets/hero/hero-e450.jpg";

function Hero({ id }) {
  return (
    <section id={id} className="hero">
      <div className="hero-media">
        <img
          src={heroImage}
          alt="2027 Mercedes-Benz E 450"
        />
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">2027 E 450</p>
        <h1 className="hero-headline">Presence, Considered.</h1>
        <p className="hero-subline">4MATIC® all-wheel drive.</p>
      </div>
    </section>
  );
}

export default Hero;