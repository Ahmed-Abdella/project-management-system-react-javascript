import "./Navbar.css";
import Temple from "../assets/temple.svg";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <Link to="/">
            <div className="logo-flex">
              <img src={Temple} alt="logo" />
              <span>Manager</span>
            </div>
          </Link>
        </li>
        {!user && (
          <div className="auth-div">
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </div>
        )}

        {user && (
          <li>
            {!isPending && (
              <button className="btn" onClick={logout}>
                Logout
              </button>
            )}
            {isPending && (
              <button className="btn" disabled>
                logging out....
              </button>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
}
