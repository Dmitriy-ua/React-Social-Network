import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

const maxLength30 = maxLengthCreator(30);

let AddNewPostForm = (props) => {

    return (
        <form className={classes.posts_form} onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostText" placeholder={'Type your post'}
                       validate={[required, maxLength30]} />
            </div>
            <div>
                <button>Post</button>
            </div>
            <br/>

        </form>
    )
}
AddNewPostForm = reduxForm( { form: "ProfileAddNewPostForm"} ) (AddNewPostForm);

const MyPosts = React.memo(props => {
    // shouldComponentUpdate(nextProps, nextState, nextContext) { //for object component only
    //     return nextProps != this.props || nextState != this.state;
    // }
    let postsElements = props.posts.map((post, index) =>
        <Post key={index} message={post.message} likesCount={post.likesCount}/>);

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

            {postsElements}

        </div>
    );
});

export default MyPosts;