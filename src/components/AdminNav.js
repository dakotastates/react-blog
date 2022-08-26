import { auth } from '../config/firebase'
import { Link, NavLink, useNavigate } from "react-router-dom";

function AdminNav() {

  const navigation = useNavigate();

  const signOut = () =>{
    auth.signOut();
    navigation('admin');
  }

  return(
    <nav className="navbar shadow navbar-expand-lg py-3 navbar-dark bg-dark">
      <Link to="/" className="navbar-brand ml-5">
        Admin
      </Link>
      <ul className="navbar-nav ml-auto mr-5">
        <li className="nav-item">
          <NavLink to="/admin/dashboard" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <button onClick={signOut} >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default AdminNav;
