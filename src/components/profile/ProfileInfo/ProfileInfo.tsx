import React, { FC } from "react";
import s from "./ProfileInfo.module.css";
import { ProfileTypeProps } from "../../../redux/profile-reducer";
import { Loader } from "../../preloader/Loader";


type profileInfoType = {
    profile: ProfileTypeProps | null;
};

const ProfileInfo: FC<profileInfoType> = (props) => {
    if(!props.profile) {
      return <Loader/>
    }
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
                <img
                    className={s.decriptiom_image}
                    src={
                        props.profile.photos.large === null
                            ? "https://sp.rmbl.ws/s8/1/Z/5/W/P/Z5WPg.qR4e-small-Purrple-Cat-Distant-Worlds-.jpg"
                            : props.profile.photos.large
                    }
                    alt=""
                />
                <div className={s.decsription_text}>
                    <div className={s.name}>{props.profile.fullName}</div>
                    <div className={s.name}></div>
                    <div className={s.name}>e-mail</div>
                </div>
            </div>
        </div>
    );
}


export default ProfileInfo;