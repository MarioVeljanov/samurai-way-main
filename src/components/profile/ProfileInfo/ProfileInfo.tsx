import React from "react";
import s from "./ProfileInfo.module.css";



const ProfileInfo = () => {
    return (
      <div>
        <div>
          <img
          className={s.profile_image}
            src="https://img.freepik.com/free-photo/beautiful-scenery-road-forest-with-lot-colorful-autumn-trees_181624-30942.jpg?w=2000"
            alt=""
          />
        </div>

        <div className={s.description}>

          <img className={s.decriptiom_image} src="https://sp.rmbl.ws/s8/1/Z/5/W/P/Z5WPg.qR4e-small-Purrple-Cat-Distant-Worlds-.jpg" alt="" />
          <div className={s.decsription_text}>
            <div className={s.name}>NAME</div>
            <div className={s.name}>Date of Birth</div>
            <div className={s.name}>e-mail</div>
          </div>
        </div>
      </div>
    );
}


export default ProfileInfo;