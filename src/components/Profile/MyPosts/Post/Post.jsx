import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post_item}>
            <div className='r' >
                <img src={"https://loremflickr.com/70/70/girl"+props.likesCount} />
                &nbsp;{props.message}
                <br/> You have {props.likesCount} likes!
            </div>
            <br/>
        </div>
    );
}

export default Post;