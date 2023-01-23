import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'



const DialogItme = (props: any) => {
  return (
    <div className={s.dialogs_item + " " + s.active}>
      <NavLink to="/dialogs/1">{props.name}</NavLink>
    </div>
  );
};

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
            <DialogItme name="Vasya" id={1} />
            <div />
            <div className={s.dialogs_item}>
              <NavLink to="/dialogs/2">Stole</NavLink>
            </div>
            <div className={s.dialogs_item}>
              <NavLink to="/dialogs/3">Dimche</NavLink>
            </div>
            <div className={s.dialogs_item}>
              <NavLink to="/dialogs/4">Mile</NavLink>
            </div>
          </div>

          <div className={s.messages}>
            <div className={s.messages_item}>Hi!</div>
            <div className={s.messages_item}>How are you?</div>
            <div className={s.messages_item}>What's up bro?</div>
          </div>
        </div>
    );
}

export default Dialogs;