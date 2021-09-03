import React from "react";
import classes from "./Profile.module.css"

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileServerType} from "../../redux/profile-reducer";


export type ProfilePropsType = {
    profile: null | ProfileServerType
    status:string
    updateStatus:(status:string) => void
}

const Profile: React.FC<ProfilePropsType> =( { profile, status, updateStatus})=> {
    return (
        <div className={classes.profile}>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
            <MyPostsContainer  />
        </div>
    )
}
export default Profile