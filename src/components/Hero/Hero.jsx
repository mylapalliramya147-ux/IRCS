import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Indian Red Cross Society</h1>

        <p>
          Serving Humanity with Compassion, Care, and Commitment.
        </p>

        <div className="hero-buttons">
          <button className="volunteer-btn">
            Become a Volunteer
          </button>

          <button className="donate-btn">
            Donate Blood
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;