
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="brand">
        <img
          src="/images/branding/gear-shift-logo.jpeg"
          alt="Gear Shift logo"
          className="brand-logo"
        />
        <span>GEAR SHIFT</span>
      </NavLink>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/team">Team</NavLink>
        <NavLink to="/robot">Our Robot</NavLink>
        <NavLink to="/journey">Journey</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
      </div>

      <NavLink to="/gallery" className="nav-button">
        Explore Gallery
      </NavLink>
    </nav>
  );
}

export default Navbar;
