import { useAuthContext } from "../hooks/useAuthContext";
import { useState, useEffect } from "react";
import { useCollection } from "../hooks/useCollection";
import Avatar from "./Avatar";

import "./OnlineUsers.css";

export default function OnlineUsers() {
  const { error, documents } = useCollection("users");
  const { user } = useAuthContext();
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 800;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", setWidth(window.innerWidth));
  }, []);
  return (
    <div className="user-list">
      <h2>all users</h2>
      {error && <div className="error">{error}</div>}
      {documents &&
        documents
          .filter((currentUser) => currentUser.id !== user.uid)
          .map((user) => (
            <div key={user.id} className="user-list-item">
              {user.online && <span className="online-user"></span>}
              {width > breakpoint && <span>{user.displayName}</span>}
              <Avatar src={user.photoURL} />
            </div>
          ))}
    </div>
  );
}
