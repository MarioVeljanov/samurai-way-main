import React from "react";
import s from './../Dialogs.module.css'




type MessagesItemProps = {
  id: number
  messages: string
}



const Message: React.FC<MessagesItemProps> = (props) => {
  return (
      <>
          <div className={s.messages_item}>{props.messages}</div>
      </>
  );
};



export default Message;