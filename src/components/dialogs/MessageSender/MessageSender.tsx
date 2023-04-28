import React, { ChangeEvent } from 'react';
import s from "./MessageSender.module.css";

type MessageSenderType = {
    value: string;
    onSendMessagesClick: () => void;
    onNewMessagesClick: (text: string) => void;
};

const MessageSender: React.FC<MessageSenderType> = (props) => {

    const newPostsElement = React.createRef<HTMLTextAreaElement>();


    const addMessages = () => {
        props.onSendMessagesClick()
    };


    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onNewMessagesClick(e.currentTarget.value)
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

            <button
                id={"hw1-button"}
                className={s.button}
                onClick={addMessages}
            >
                Send
            </button>
        </div>
    );
};

export default MessageSender;