import "../css/navbar.css";
import FTD from ".././images/FTD-logo.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={FTD} alt="FTD logo" height="150" />
      </div>
      <ul>
        <li>Services</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      <div className="right-nav">
        <ul>
          <li>Search</li>
          <li>Cart</li>
          <li>
            <button className="login-btn">Log In</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
