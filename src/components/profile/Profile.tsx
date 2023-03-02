import React from "react";
import {  ActionsTypes, ProfileType } from "../../redux/state";
import  { SuperPostConatainer } from "./MyPosts/MyPostCntainer";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


// type PostPropstype = {
//     posts: ProfileType;
//     dispath: (action: ActionsTypes) => void;
// };

// const Profile: React.FC<PostPropstype> = (props) => {
//   return (
//       <div>
//           <ProfileInfo />

//           <MyPostContainer posts={props.posts} dispath={props.dispath} />
//       </div>
//   );
// };


// export default Profile;




const Profile = () => {
    return (
        <div>
            <ProfileInfo />

            <SuperPostConatainer />
        </div>
    );
};

export default Profile;