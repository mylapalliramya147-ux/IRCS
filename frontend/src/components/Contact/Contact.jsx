import "./Contact.css";

function Contact() {
  return (
    <section className="contact">

      <h2>Contact Us</h2>

      <div className="contact-container">

        {/* Contact Information */}

        <div className="contact-info">

          <h3>Get In Touch</h3>

          <p><strong>📍 Address:</strong> Indian Red Cross Society, Andhra Pradesh</p>

          <p><strong>📞 Phone:</strong> +91 9876543210</p>

          <p><strong>📧 Email:</strong> info@ircs.org</p>

          <div className="map-placeholder">
            Google Map
          </div>

        </div>

        {/* Contact Form */}

        <div className="contact-form">

          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <textarea
            placeholder="Your Message"
            rows="6"
          ></textarea>

          <button>Send Message</button>

        </div>

      </div>

    </section>
  );
}

export default Contact;
