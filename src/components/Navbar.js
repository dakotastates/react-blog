
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return(
    <nav className="navbar shadow navbar-expand-lg py-3 navbar-dark bg-dark">
      <Link to="/" className="navbar-brand ml-5">
        Blog
      </Link>
      <ul className="navbar-nav ml-auto mr-5">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
