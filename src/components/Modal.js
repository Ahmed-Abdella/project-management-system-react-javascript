import ReactDOM from "react-dom";
import "./Modal.css";

import { useCollection } from "../hooks/useCollection";
import { useAuthContext } from "../hooks/useAuthContext";
import Avatar from "./Avatar";

export default function Modal({ onClose }) {
  const { error, documents } = useCollection("users");
  const { user } = useAuthContext();
  return ReactDOM.createPortal(
    <>
      <div className="users-modal-overlay" onClick={onClose}>
        <button onClick={onClose}>X</button>
      </div>
      <div className="modal-container">
        <div className="users-modal">
          <h2>all users</h2>
          {error && <div className="error">{error}</div>}
          {documents &&
            documents
              .filter((currentUser) => currentUser.id !== user.uid)
              .map((user) => (
                <div key={user.id} className="user-in-modal">
                  {user.online && <span className="online-user"></span>}
                  <span>{user.displayName}</span>
                  <Avatar src={user.photoURL} />
                </div>
              ))}
        </div>
      </div>
    </>,
    document.getElementById("users-portal")
  );
}
