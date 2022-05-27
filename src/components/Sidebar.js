// styles & images
import "./Sidebar.css";
import DashboardIcon from "../assets/dashboard_icon.svg";
import AddIcon from "../assets/add_icon.svg";
import { NavLink } from "react-router-dom";
import Avatar from "./Avatar";

// auth
import { useAuthContext } from "../hooks/useAuthContext";

export default function Sidebar() {
  const { user } = useAuthContext();
  return (
    <div className="sidebar">
      <div className='"sidebar-content'>
        <div className="user">
          <Avatar src={user.photoURL}></Avatar>
          <p>hey {user.displayName}</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink to="/">
                <div className="link">
                  <img src={DashboardIcon} alt="dashboard icon"></img>
                  <span>Dashboard</span>
                </div>
              </NavLink>
            </li>
            <li>
              <div className="link">
                <NavLink to="/create">
                  <img src={AddIcon} alt="dashboard icon"></img>
                  <span>Add project</span>
                </NavLink>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
