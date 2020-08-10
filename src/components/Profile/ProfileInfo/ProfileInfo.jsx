import React, {useState} from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user-icon.png';
import Preloader from "../../common/Preloader/Preloader";
import styles from './ProfileInfo.module.css'
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({isOwner, profile, updateStatus, status, savePhoto, saveProfile }) => {

    let [editMode, setEditMode] = useState(false);

    if(!profile ) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            savePhoto( e.target.files[0] );
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData);
        setEditMode(false);
    }

    return (
        <div className='app-content'>
            <p>
                <img src={profile.photos.large || userPhoto } alt="" className={styles.mainPhoto}/>
            </p>

            <p>
                { isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            </p>

            { editMode
                ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {setEditMode(true)} }/> }

            <div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>

            <hr/>

        </div>
    );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        { isOwner && <p><button onClick={goToEditMode}>Edit Profile Data</button></p> }
        <p>
            <strong>Full Name:</strong> { profile.fullName }
        </p>
        <p>
            <strong>Looking for a job:</strong> { profile.lookingForAJob ? "Yes" : 'No' }
        </p>
        { profile.lookingForAJob &&
        <p>
            <strong>My skills:</strong> { profile.lookingForAJobDescription  }
        </p>
        }
        <p>
            <strong>About me:</strong> {profile.aboutMe }
        </p>
        <div>
            <p>Contacts:</p>
            <ul className={styles.contactsList}>
                { Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={ profile.contacts[key] } />
                }) }
            </ul>
        </div>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <li><strong>{contactTitle}:</strong> {contactValue} </li>
}
export default ProfileInfo;