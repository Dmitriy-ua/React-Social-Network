import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";


const MyPosts = (props) => {


    let postsElements = props.state.posts.map( (post,index) => <Post key={index} message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch( addPostActionCreator() );
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch( updateNewPostTextActionCreator(text) );
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
                        value={props.state.newPostText}
                        name="message" id="message" rows="10" />
                </p>
                <p>
                    <button onClick={addPost}>Post</button>
                </p>

            </div>

            { postsElements }

        </div>
    );
}

export default MyPosts;