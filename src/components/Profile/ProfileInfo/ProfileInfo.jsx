import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user-icon.png';
import Preloader from "../../common/Preloader/Preloader";
import styles from './ProfileInfo.module.css'

const ProfileInfo = ({isOwner, profile, updateStatus, status, savePhoto }) => {

    if(!profile ) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            savePhoto( e.target.files[0] );
        }
    }

    return (
        <div className='app-content'>
            <div>
                <img src={profile.photos.large || userPhoto } alt="" className={styles.mainPhoto}/>
                { isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <hr/>
            </div>

            <h3> {profile.fullName } </h3>
            <p>{profile.aboutMe}</p>
        </div>
    );
}

export default ProfileInfo;