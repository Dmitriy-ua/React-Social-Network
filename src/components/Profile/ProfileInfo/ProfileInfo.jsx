import React from "react";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    return (
        <div className='app-content'>
            <div>
                <img src={props.profile.photos.large } alt=""/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <hr/>
            </div>

            <h3> {props.profile.fullName } </h3>

            <p>{props.profile.aboutMe}</p>

        </div>
    );
}

export default ProfileInfo;