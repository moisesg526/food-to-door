import "../css/footer.css";
import FTD from ".././images/FTD-logo.jpg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-section">
        <img src={FTD} alt="FTD logo" height="100" />
        <div className="footer-links">
          <p>Services</p>
          <p>Promo</p>
          <p>Contact</p>
        </div>
      </div>
      <hr />
      <div className="footer-section">
        <p>Copyright © 2024 All rights reserved</p>
        <div className="footer-links">
          <p>Security</p>
          <p>|</p>
          <p>Privacy</p>
          <p>|</p>
          <p>Terms</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
