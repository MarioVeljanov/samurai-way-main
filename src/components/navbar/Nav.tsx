import React from "react";
import { NavLink } from "react-router-dom";
import { SideType } from "../../redux/state";
import Friends from "./friends/Friends";
import s from './Nav.module.css'

type NavTypeProps = {
    friends: SideType[]
};

const Nav: React.FC<NavTypeProps> = (props) => {
    return (
      <div className={s.nav_container}>
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

          <div className={s.nav_element + ' ' + s.nav_friends}>
           <Friends friends={props.friends}/>
          </div>

          
        </nav>
      </div>
    );    
}

export default Nav;