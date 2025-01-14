import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";
import logo from "../assets/ruparupalogo.png";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo RupaRupa" className="logo" />
      </div>
      <nav className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/quality-check">QUALITY CHECK</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
