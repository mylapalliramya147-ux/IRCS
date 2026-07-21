import "./About.css";

function About() {
  return (
    <section className="about">

      <div className="about-image">
        <div className="image-placeholder">
          About Image
        </div>
      </div>

      <div className="about-content">
        <h2>About Indian Red Cross Society</h2>

        <p>
          The Indian Red Cross Society (IRCS) is a voluntary humanitarian
          organization dedicated to protecting human life and health.
          It provides relief during disasters, promotes health care,
          blood donation, first aid training, and supports vulnerable
          communities across India.
        </p>

        <button>Read More</button>
      </div>

    </section>
  );
}

export default About;