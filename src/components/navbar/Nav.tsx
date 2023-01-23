import React from "react";
import { NavLink } from "react-router-dom";
import s from './Nav.module.css'

const Nav = () => {
    return (
      <nav className={s.nav}>
        <div className={s.nav_element}>
          <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.nav_element}>
          <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.nav_element}>
          <NavLink to="/news" activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.nav_element}>
          <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.nav_element}>
          <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
        </div>
      </nav>
    );    
}

export default Nav;