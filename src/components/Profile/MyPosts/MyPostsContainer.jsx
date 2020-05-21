import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


/* Provide presentational component with certain props */
let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}
/* Provide presentational component with dispatching methods */
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch( addPostActionCreator(newPostText) );
        }
    }
}

/* Create Container component for presentational component */
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;