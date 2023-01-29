import React from "react";
import { PostData } from "../../../redux/state";
import p from './MyPost.module.css'
import Post from "./posts/Post";

type PostPropstype = {
  postsData: Array<PostData>;
};

const MyPost: React.FC<PostPropstype> = (props) => {


  const postElement = props.postsData.map((p) => (
    <Post messages={p.messages} likesCount={p.likesCount} id={p.id} />
  ));

  return (
    <div className={p.post}>
      <div className={p.add_posts}>
        <h2>My posts</h2>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post </button>
        </div>
      </div>
      <div>{postElement}</div>
    </div>
  );
};


export default MyPost;