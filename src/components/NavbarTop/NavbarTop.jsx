import React from "react";
import "./NavbarTop.css";
import { NavLink } from "react-router-dom";

const NavbarTop = () => {
  return (
    <ul>
      <li className="link">
        <NavLink to="/posts" className="link-style" exact>
          some
        </NavLink>
      </li>
      <li className="link">
        <NavLink to="/something" className="link-style" exact>
          something
        </NavLink>
      </li>
      <li className="link">
        <NavLink to="/somethingnew" className="link-style" exact>
          somethingnew
        </NavLink>
      </li>
    </ul>
  );
};

export default NavbarTop;
