// styles & images
import "./Sidebar.css";
import DashboardIcon from "../assets/dashboard_icon.svg";
import usersIcon from "../assets/users.svg";
import AddIcon from "../assets/add_icon.svg";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Avatar from "./Avatar";
// modal
import Modal from "../components/Modal";

// auth
import { useAuthContext } from "../hooks/useAuthContext";

export default function Sidebar() {
  const { user } = useAuthContext();
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 900;
  const mobileBreakpoint = 720;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return window.removeEventListener("resize", () =>
      setWidth(window.innerWidth)
    );
  }, []);

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
                  {width > breakpoint && <span>Dashboard</span>}
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <div className="link">
                  <img src={AddIcon} alt="dashboard icon"></img>
                  {width > breakpoint && <span>Add project</span>}
                </div>
              </NavLink>
            </li>
            <li>
              <div className="link">
                {width < mobileBreakpoint && (
                  <img
                    className="users-icon"
                    src={usersIcon}
                    alt="users icon"
                    onClick={() => {
                      setIsOpen(true);
                    }}
                  ></img>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>

      {isOpen && <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </div>
  );
}
