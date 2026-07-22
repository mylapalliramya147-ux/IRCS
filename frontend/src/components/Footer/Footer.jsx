import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h3>Indian Red Cross Society</h3>
          <p>Serving Humanity Since 1920</p>
          <p>
            We are committed to helping people during disasters,
            promoting health, and supporting communities.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>📍 Andhra Pradesh</p>
          <p>📞 +91 9876543210</p>
          <p>📧 info@ircs.org</p>
        </div>

      </div>

      <hr />

      <div className="copyright">
        © 2026 Indian Red Cross Society | All Rights Reserved
      </div>

    </footer>
  );
}

export default Footer;