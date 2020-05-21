import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import {Field, reduxForm} from "redux-form";

let AddNewPostForm = (props) => {
    return (
        <form className={classes.posts_form} onSubmit={props.handleSubmit}>
            <p>
                <Field component={'textarea'} name="newPostText"/>
            </p>
            <p>
                <button>Post</button>
            </p>

        </form>
    )
}
AddNewPostForm = reduxForm ( { form: "ProfileAddNewPostForm"} ) (AddNewPostForm);

const MyPosts = (props) => {


    let postsElements = props.posts.map( (post,index) => <Post key={index} message={post.message} likesCount={post.likesCount}/>);

    // let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={classes.my_posts__wrapper}>
            <h2 className={classes.my_posts__title}>
                View My Posts
            </h2>

            <AddNewPostForm onSubmit={onAddPost}/>

            { postsElements }

        </div>
    );
}

export default MyPosts;