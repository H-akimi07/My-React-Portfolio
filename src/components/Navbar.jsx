import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main Navigation">
      <h1 className="logo">SAMIRA HAKIMI</h1>

      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink to="/favorites">Favorites ⭐</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
