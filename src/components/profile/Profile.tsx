import React from "react";
import {  ProfileType } from "../../redux/state";
import MyPost from "./MyPosts/MyPost";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


type PostPropstype = {
  posts: ProfileType;
};

const Profile: React.FC<PostPropstype> = (props) => {
  return (
    <div>
      <ProfileInfo />

      <MyPost postsData={props.posts.postsData}/>
    </div>
  );
};


export default Profile;