import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    return (
        <li className={classes.dialogs__item}>
            <NavLink to={'/dialogs/' + props.id} key={props.id}>{props.name}</NavLink>
        </li>
    );
}

export default DialogItem;