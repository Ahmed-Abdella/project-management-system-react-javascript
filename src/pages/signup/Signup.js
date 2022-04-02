import { useState } from "react";
import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayname, setDisplayname] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  return (
    <form className="auth-form">
      <h2>Signup</h2>
      <label>
        <span>email:</span>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </label>
      <label>
        <span>password:</span>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </label>
      <label>
        <span>display name:</span>
        <input
          required
          type="text"
          value={displayname}
          onChange={(e) => setDisplayname(e.target.value)}
        ></input>
      </label>
      <label>
        <span>profile thumbnail</span>
        <input required type="file"></input>
      </label>
      <button className="btn">Sign up</button>
    </form>
  );
}
