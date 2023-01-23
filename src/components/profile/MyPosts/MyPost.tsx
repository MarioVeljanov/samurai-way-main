import React from "react";
import p from './MyPost.module.css'
import Post from "./posts/Post";

const MyPost = () => {
    return (
     
        <div className={p.post}>
          <textarea></textarea>
          <button>Add post </button>
          <Post name="Hi, how are you?" like={7}/>
          <Post name="It's my first post" like={15}/>
        </div>
      
    );
}


export default MyPost;