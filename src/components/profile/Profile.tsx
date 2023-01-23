import React from "react";
import MyPost from "./MyPosts/MyPost";
import p from './Profile.module.css'

const Profile = () => {
    return (
      <div>
        <img
          src="https://img.freepik.com/free-photo/beautiful-scenery-road-forest-with-lot-colorful-autumn-trees_181624-30942.jpg?w=2000"
          alt=""
        />

        <div className={p.description}>
          ava + img
          <img className={p.decriptiom_image} src="" alt="" />
          <div className={p.decsription_text}>
            <div className={p.name}></div>
          </div>
        </div>
        <MyPost/>
      </div>
    );
}


export default Profile;