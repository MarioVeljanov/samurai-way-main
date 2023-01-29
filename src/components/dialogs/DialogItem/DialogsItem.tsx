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
    <div className={s.dialogs_item + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};



export default DialogItem;