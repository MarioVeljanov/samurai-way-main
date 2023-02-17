import React, { ChangeEvent} from "react";
import { ActionsTypes, addPostActionCreater, ProfileType, updateNewPostTextActionCreater } from "../../../redux/state";
import s from './MyPost.module.css'
import Post from "./posts/Post";

type PostPropstype = {
    posts: ProfileType;
    dispath: (action: ActionsTypes) => void;
};


const MyPost: React.FC<PostPropstype> = (props) => {


  // const newPostsElement = React.createRef<HTMLTextAreaElement>();

  const postElement = props.posts.postsData.map((p) => (
    <Post messages={p.messages} likesCount={p.likesCount} id={p.id} />
  ));

  const addPosts = () => {
    props.dispath(addPostActionCreater());
  }

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispath(updateNewPostTextActionCreater(e.currentTarget.value));
    
   
  };

  return (
    <div className={s.post}>
      <div className={s.add_posts}>
        <h2>My posts</h2>
        <div className={s.add_post_wrapper}>
          <textarea 
            value={props.posts.newPostText} 
            placeholder="yor news..." 
            className={s.textarea} 
            onChange={onChange}
          >

          </textarea>
          <button onClick={addPosts}>Add post </button>
        </div>
      </div>


      <div>{postElement}</div>
    </div>
  );
};


export default MyPost;