import React from "react";
import s from "./ProfileInfo.module.css";



const ProfileInfo = () => {
    return (
      <div>
        <div>
          <img
            src="https://img.freepik.com/free-photo/beautiful-scenery-road-forest-with-lot-colorful-autumn-trees_181624-30942.jpg?w=2000"
            alt=""
          />
        </div>

        <div className={s.description}>
          ava + img
          
          <img className={s.decriptiom_image} src="" alt="" />
          <div className={s.decsription_text}>
            <div className={s.name}></div>
          </div>
        </div>
      </div>
    );
}


export default ProfileInfo;