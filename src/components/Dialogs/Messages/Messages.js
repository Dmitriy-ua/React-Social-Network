import classes from "../Dialogs.module.css";
import React from "react";

const Messages = (props) => {

    return (
        <li className={classes.messages__item} key={props.id}> {props.message} </li>
    );
}

export default Messages;