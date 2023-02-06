import React from "react";
import {  ProfileType } from "../../redux/state";
import MyPost from "./MyPosts/MyPost";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


type PostPropstype = {
    posts: ProfileType;
    addPost: () => void;
    updateNewPostDate: (newText: string) => void;
};

const Profile: React.FC<PostPropstype> = (props) => {
  return (
    <div>
      <ProfileInfo />

      <MyPost posts={props.posts} addPost={props.addPost} updateNewPostDate={props.updateNewPostDate}/>

      
    </div>
  );
};


export default Profile;