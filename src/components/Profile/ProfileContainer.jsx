import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;

        if ( !userId ) {
            userId = this.props.currUserId;
            if( !userId ) {
                this.props.history.push('/login');
            }
        }

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if( this.props.match.params.userId != prevProps.match.params.userId)
        this.refreshProfile();
    }

    render () {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     savePhoto={this.props.savePhoto}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    currUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose (
    connect(mapStateToProps , { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
    withRouter,
    // withAuthRedirect
) (ProfileContainer);