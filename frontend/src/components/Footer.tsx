import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>Riverside</h2>

        <p>
          Supporting our community through accessible facilities, support and
          opportunities.
        </p>
      </div>

      <div className="footer-section">
        <h3>Quick Links</h3>

        <nav className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/facilities">Facilities</Link>
          <Link to="/donate">Donate</Link>
        </nav>
      </div>

      <div className="footer-section">
        <h3>Contact</h3>

        <p>Email: info@riverside.org</p>
        <p>Phone: +27 00 000 0000</p>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Riverside. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;