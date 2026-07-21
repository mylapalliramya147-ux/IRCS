import "./Navbar.css";
import logo from "../../assets/images/ircs-logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo-section">
        <img src={logo} alt="IRCS Logo" className="logo" />

        <div className="title">
          <h2>Indian Red Cross Society</h2>
          <p>Serving Humanity Since 1920</p>
        </div>
      </div>

      {/* Menu */}
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Blood Donation</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      {/* Donate Button */}
      <button className="donate-btn">Donate Now</button>
    </nav>
  );
}

export default Navbar;