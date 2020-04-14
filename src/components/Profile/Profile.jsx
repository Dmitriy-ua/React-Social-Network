import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from './Profile.module.css'

const Profile = (props) => {
    return (
        <div className={classes.content_wrapper}>
            <ProfileInfo />
            <MyPosts state={props.state} dispatch={props.dispatch} />
        </div>
    );
}

export default Profile;