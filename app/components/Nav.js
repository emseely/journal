import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav>
      <div>
        <Link to={"/"}>Home</Link>
      </div>
      <div>
        <div className="navDropdown">
          <div className="navDropButton">Web Dev</div>
          <div className="navDropContent">
            <Link to="/team">Team</Link>
            <Link to="/solo">Solo</Link>
            <Link to="/design">UI Design</Link>
          </div>
        </div>
        <Link to={"/art"}>Offline</Link>
        <Link to={"/about"}>About</Link>
      </div>
    </nav>
  );
}
