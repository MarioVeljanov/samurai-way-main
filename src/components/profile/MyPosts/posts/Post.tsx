import React from "react";
import p from './Post.module.css'

type ProposType = {
  name: string
  like: number
}
const Post: React.FC<ProposType> = (props) => {
    return (
      <div>
        <h2 className={p.post_title}>{props.name}</h2>
        <div className={p.post_item}>
          <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" />
          post 1
          <div><span>{props.like} like</span></div>
        </div>
      </div>
    );
}


export default Post;