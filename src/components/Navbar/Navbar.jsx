import React, { useState } from "react";
//react router dom
import { Link, NavLink } from "react-router-dom";

//styled components
import { Nav, AccountIcon } from "./Navbar.styled";
import Button from "../../shared/button";
//import logo
import logo from "../../assets/img/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Nav>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div
        class={`toggle__menu ${isMenuOpen ? "toggle__close" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></div>
      <ul id="mobile-menu" class={`${isMenuOpen ? "show" : ""}`}>
        <li>
          <NavLink
            to="/"
            activeStyle={{
              color: "#0062ff",
            }}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/training">TRAINING</NavLink>
        </li>
        <li>
          <NavLink to="/lessons">VIDEO LESSONS</NavLink>
        </li>
        <li>
          <NavLink to="/earn">EARN WITH UPSKILL</NavLink>
        </li>
        <li class="sign-in">
          <AccountIcon></AccountIcon>
          <NavLink to="/signin">SIGN IN</NavLink>
        </li>
        <li>
          <NavLink to="/signup">
            <Button type="signup" size="small">
              SIGN UP
            </Button>
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
