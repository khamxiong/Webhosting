import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Images/logo.png";
import menuIcon from "../../Images/menu_icon.png";
import { BsFillHandbagFill } from "react-icons/bs";
import { AiFillCloseSquare } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  const Toggle = () => setMobile(!Mobile);
  const CloseToggle = () => setMobile(false);
  // how to active class
  let ActiveClass = "link-active";

  return (
    <header>
      <div className="h-left">
        <Link to="/" className="logo">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="h-right">
        <nav className={Mobile ? "nav active" : "nav"} onClick={CloseToggle}>
          <NavLink
            to="./"
            onClick={CloseToggle}
            className={({ isActive }) => (isActive ? ActiveClass : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={CloseToggle}
            className={({ isActive }) => (isActive ? ActiveClass : undefined)}
          >
            About
          </NavLink>
          <NavLink
            to="/hosting"
            onClick={CloseToggle}
            className={({ isActive }) => (isActive ? ActiveClass : undefined)}
          >
            Hosting
          </NavLink>
          <NavLink
            to="/domain"
            onClick={CloseToggle}
            className={({ isActive }) => (isActive ? ActiveClass : undefined)}
          >
            Domain
          </NavLink>
          <NavLink
            to="/contact"
            onClick={CloseToggle}
            className={({ isActive }) => (isActive ? ActiveClass : undefined)}
          >
            Contact Us
          </NavLink>
          <AiFillCloseSquare className="close" onClick={CloseToggle} />
        </nav>
        <div className="signup">
          <a href="#" id="cart">
            <BsFillHandbagFill />
            <span className="number">0</span>
          </a>
          <a href="#">Sign Up</a>
          <img src={menuIcon} alt="" className="menu-icon" onClick={Toggle} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
