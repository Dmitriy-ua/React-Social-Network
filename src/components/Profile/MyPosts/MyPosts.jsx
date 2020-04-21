import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";


const MyPosts = (props) => {


    let postsElements = props.posts.map( (post,index) => <Post key={index} message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.my_posts__wrapper}>
            <h2 className={classes.my_posts__title}>
                View My Posts
            </h2>
            <div className={classes.posts_form}>
                <p>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}
                        name="message" id="message" rows="10" />
                </p>
                <p>
                    <button onClick={onAddPost}>Post</button>
                </p>

            </div>

            { postsElements }

        </div>
    );
}

export default MyPosts;