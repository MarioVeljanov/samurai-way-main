import React, { FC } from "react";
import s from './Header.module.css'
import { NavLink } from "react-router-dom";

type HeaderType = {
    isAuth: boolean;
    login: string | null;
};

const Header: FC<HeaderType> = (props) => {
    return (
      <header className={s.header}>
        <img
          src={
            "https://camo.githubusercontent.com/bf47be85ae361ed72b63c8d2dc415df4bffb3d8a3dd2ba381da01302784bedaf/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f62756e6e792d6e65742d69636f6e2e737667"
          }
        />
        <div className={s.loginBlock}>
          {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
          </div>
      </header>
    );
}


export default Header;