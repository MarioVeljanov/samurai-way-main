import React, { FC } from "react";
import  { SuperPostConatainer } from "./MyPosts/MyPostCntainer";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfileTypeProps } from "../../redux/profile-reducer";

type profileType = {
    profile: ProfileTypeProps | null;
};

const Profile: FC<profileType> = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>

            <SuperPostConatainer />
        </div>
    );
};

export default Profile;