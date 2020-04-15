import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

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

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messageElements = state.messages.map(message => <Messages message={message.message} id={message.id}/>);

    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <main className={classes.dialogs}>
            <div className={classes.left_cell}>
                <ul className={classes.dialogs__list}>
                    {dialogElements}
                </ul>
            </div>
            <div className={classes.right_cell}>
                <ul className={classes.messages__list}>
                    {messageElements}
                </ul>
                <div>
                    <p>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              pleceholder="Enter your message"/>
                    </p>
                    <p>
                        <button onClick={onSendMessageClick}>Send</button>
                    </p>
                </div>
            </div>

        </main>
    );
}

export default Dialogs;