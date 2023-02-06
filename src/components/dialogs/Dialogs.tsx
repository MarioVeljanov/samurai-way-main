import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Messages/Messages";
import { MessagesDateType } from "../../redux/state";
import MessageSender from "./MessageSender/MessageSender";


type DialogsDataProps = {
  state: MessagesDateType;
};

const Dialogs: React.FC<DialogsDataProps> = (props) => {
 
  const dialogsElement = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)
  const messagesElement = props.state.messagesData.map(m => <Message messages={m.messages} id={m.id} />)

    return (
        <div className={s.dialog_container}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>{dialogsElement}</div>

                <div className={s.messages}>{messagesElement}</div>
            </div>
            <div className={s.message_sender}>
                <MessageSender />
            </div>
        </div>
    );
}

export default Dialogs;