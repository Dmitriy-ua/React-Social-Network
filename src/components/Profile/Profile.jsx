import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {
    if( !props.profile ) {
        return <Preloader />
    }

    return (
        <div className={classes.content_wrapper}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;