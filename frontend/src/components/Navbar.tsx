import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/">Riverside</NavLink>
      </div>

      <div className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/facilities"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Facilities
        </NavLink>

        <NavLink
          to="/donate"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Donate
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;