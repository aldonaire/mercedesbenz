import heroImage from "../assets/hero/hero-e450.jpg";

function Hero({ id }) {
  return (
    <section id={id} className="hero" aria-labelledby="hero-title">
      <div className="hero-media">
        <img
          src={heroImage}
          alt="2027 Mercedes-Benz E 450 driving away on a road"
        />
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">2027 E 450</p>
        <h1 id="hero-title" className="hero-headline">Presence, Considered.</h1>
        <p className="hero-subline">4MATIC® all-wheel drive.</p>
        <a className="hero-cta" href="#design">
          Explore the model
        </a>
      </div>
    </section>
  );
}

export default Hero;