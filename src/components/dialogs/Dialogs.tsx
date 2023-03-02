import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Messages/Messages";
import MessageSender from "./MessageSender/MessageSender";
import { MessagesDateType } from "../../redux/dialogs-reducer";


type DialogsDataProps = {
    dialogsPage: MessagesDateType;
    onSendMessagesClick: () => void;
    onNewMessagesClick: (text: string) => void
};

const Dialogs: React.FC<DialogsDataProps> = (props) => {
 
  const dialogsElement = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)
  const messagesElement = props.dialogsPage.messagesData.map(m => <Message messages={m.messages} id={m.id} />)

    return (
        <div className={s.dialog_container}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>{dialogsElement}</div>

                <div className={s.messages}>
                    {messagesElement}

                    <div className={s.message_sender}>
                        <MessageSender
                            value={props.dialogsPage.newDialogsText}
                            onSendMessagesClick={props.onSendMessagesClick}
                            onNewMessagesClick={props.onNewMessagesClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;