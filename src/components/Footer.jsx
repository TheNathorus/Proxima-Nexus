import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <BrandLogo footer className="footer-brand-lockup" />
            <p className="footer-blurb">
              AI implementation consultancy. We design, deploy, and operationalize AI systems for ambitious companies.
            </p>
          </div>
          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-list">
              <li>
                <Link to="/services#scan" className="footer-link">
                  Proxima Scan
                </Link>
              </li>
              <li>
                <Link to="/services#pilot" className="footer-link">
                  Proxima Pilot
                </Link>
              </li>
              <li>
                <Link to="/services#command" className="footer-link">
                  Proxima Command
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="footer-link">
                  ISO/IEC 42001 Compliance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-list">
              <li>
                <Link to="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/technology" className="footer-link">
                  Proxima OS
                </Link>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Legal Mentions
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} Proxima Nexus. All rights reserved.</p>
          <div className="footer-badge">France Num Certified Advisor</div>
        </div>
      </div>
    </footer>
  );
}
