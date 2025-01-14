import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo-container">
      </div>
      <nav className="nav-links">
        <Link to="/">HOME</Link>
      </nav>
    </aside>
  );
}

export default Sidebar; 
