import React from "react";

const ProfileInfo = (props) => {
    return (
        <div className='app-content'>
            <div className='app-banner' >
                <img src="https://loremflickr.com/1024/300/rio" />
            </div>
            <p>
                <img src={props.profile.photos.large } alt=""/>
            </p>

            <h3> {props.profile.fullName } </h3>

            <p>{props.profile.aboutMe}</p>

        </div>
    );
}

export default ProfileInfo;