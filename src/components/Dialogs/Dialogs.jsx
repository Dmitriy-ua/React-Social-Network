import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <li className={classes.dialogs__item}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </li>
    );
}

const Messages = (props) => {
    return (
        <li className={classes.messages__item}> {props.message} </li>
    );
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Lena'},
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 1, message: 'What\'s up'},
        {id: 1, message: 'Pretty good'},
        {id: 1, message: 'Great'},
    ];

    return (
        <main className={classes.dialogs}>
            <div className={classes.left_cell}>
                <ul className={classes.dialogs__list}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                </ul>
            </div>
            <div className={classes.right_cell}>
                <ul className={classes.messages__list}>
                    <Messages message={messagesData[0].messaged} />
                </ul>
                <iframe src="https://scratch.mit.edu/projects/149636497/embed" allowTransparency="true" width="485"
                        height="402" frameBorder="0" scrolling="no" allowFullScreen></iframe>
    </div>

        </main>
    );
}

export default Dialogs;