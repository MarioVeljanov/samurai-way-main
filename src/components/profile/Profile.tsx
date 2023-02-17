import React from "react";
import {  ActionsTypes, ProfileType } from "../../redux/state";
import MyPost from "./MyPosts/MyPost";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


type PostPropstype = {
    posts: ProfileType;
    dispath: (action: ActionsTypes) => void;
};

const Profile: React.FC<PostPropstype> = (props) => {
  return (
      <div>
          <ProfileInfo />

          <MyPost
              posts={props.posts}
              dispath={props.dispath}
          />
      </div>
  );
};


export default Profile;