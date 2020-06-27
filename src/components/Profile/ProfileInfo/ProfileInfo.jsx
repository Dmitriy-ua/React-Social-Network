import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = ({profile, updateStatus, status }) => {

    if(!profile ) {
        return <Preloader/>
    }

    return (
        <div className='app-content'>
            <div>
                <img src={profile.photos.large } alt=""/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <hr/>
            </div>

            <h3> {profile.fullName } </h3>
            <p>{profile.aboutMe}</p>
        </div>
    );
}

export default ProfileInfo;