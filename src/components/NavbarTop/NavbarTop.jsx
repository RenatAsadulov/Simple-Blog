import React from "react";
import style from "./NavbarTop.module.css";
import { NavLink } from "react-router-dom";

const NavbarTop = () => {
  return (
    <ul className={style.navbarStyle}>
      <li className={style.link}>
        <NavLink to="/" className={style.linkStyle} >
          Posts
        </NavLink>
      </li>
    </ul>
  );
};

export default NavbarTop;
