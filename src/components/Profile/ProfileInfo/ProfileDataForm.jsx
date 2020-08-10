import React from "react";
import styles from "./ProfileInfo.module.css";
import {reduxForm} from "redux-form";
import {CreateField, Input, Textarea} from "../../common/FormControls/FormControls";
import style from "../../common/FormControls/FormControls.module.css";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <p><button>Save Profile Data</button></p>
        { error && <div className={style.formSummeryError}>{error}</div>}
        <div>
            <strong>Full Name:</strong>
            { CreateField( "Full Name", "fullName", [], Input ) }
        </div>
        <div>
            <strong>Looking for a job:</strong>
            { CreateField( "", "lookingForAJob", [], Input, {type: 'checkbox'} ) }
        </div>

        <div>
            <strong>My skills:</strong>
            { CreateField( "My skills", "lookingForAJobDescription", [], Textarea ) }
        </div>

        <div>
            <strong>About me:</strong>
            { CreateField( "About me", "aboutMe", [], Textarea ) }
        </div>
        <div>
            <p>Contacts:</p>
            <ul className={styles.contactsList}>
                { Object.keys(profile.contacts).map(key => {
                    return <li key={key}>
                        <strong>{key}:</strong> { CreateField( key, "contacts."+key, [], Input ) }
                    </li>
                }) }
            </ul>
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm( {form: 'edit-profile'} )(ProfileDataForm);
export default ProfileDataFormReduxForm;