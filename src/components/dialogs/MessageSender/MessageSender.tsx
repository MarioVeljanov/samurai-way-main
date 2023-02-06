import React from 'react';
import s from "./MessageSender.module.css";

const MessageSender = () => {

    const newPostsElement = React.createRef<HTMLTextAreaElement>();


    const addPosts = () => {
        const text = newPostsElement.current?.value;
        alert(text);
    };
    return (
        <div id={"hw1-send-message-form"} className={s.sendForm}>
            <textarea
                id={"hw1-textarea"}
                className={s.textarea}
                ref={newPostsElement}
                
            />
            
            <button id={"hw1-button"} className={s.button} onClick={addPosts}>
              
                Send
               
            </button>
        </div>
    );
};

export default MessageSender;