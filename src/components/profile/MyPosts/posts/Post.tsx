import React from "react";
import { PostData } from "../../../../redux/state";
import p from './Post.module.css'



const Post: React.FC<PostData> = (props) => {
  return (
    <div>
      <div className={p.post_item}>
        <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" />
        <span className={p.post_title}>{props.messages}</span>

        <div>
          <span>{props.likesCount} like</span>
        </div>
      </div>
    </div>
  );
};


export default Post;