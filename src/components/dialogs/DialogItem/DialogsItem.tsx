import React from "react";
import { NavLink } from "react-router-dom";
import s from './../Dialogs.module.css'


type DialogItemProps = {
  name: string
  id: number
}



const DialogItem: React.FC<DialogItemProps> = (props) => {
  let path = "/dialogs/" + props.id;
  return (
      <div className={s.dialogs_item}>
          <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" />
          <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
      </div>
  );
};



export default DialogItem;