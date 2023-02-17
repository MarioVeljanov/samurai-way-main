import React, { ChangeEvent } from 'react';
import { ActionsTypes, addMessagesTextActionCreater, updateMessagesTextActionCreater } from '../../../redux/state';
import s from "./MessageSender.module.css";

type MessageSenderType = {
    dispath: (action: ActionsTypes) => void;
    value:string
};

const MessageSender: React.FC<MessageSenderType> = (props) => {

    const newPostsElement = React.createRef<HTMLTextAreaElement>();


    const addPosts = () => {
        // const text = newPostsElement.current?.value;
        props.dispath(addMessagesTextActionCreater());
    };


     const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
         props.dispath(updateMessagesTextActionCreater(e.currentTarget.value));
     };
    return (
        <div id={"hw1-send-message-form"} className={s.sendForm}>
            <textarea
                value={props.value}
                id={"hw1-textarea"}
                className={s.textarea}
                // ref={newPostsElement}
                onChange={onChange}
            />

            <button id={"hw1-button"} className={s.button} onClick={addPosts}>
                Send
            </button>
        </div>
    );
};

export default MessageSender;