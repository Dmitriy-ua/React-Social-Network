import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogs.map( (dialog, index) =>
        <DialogItem name={dialog.name} id={dialog.id} key={index}/>);

    let messageElements = state.messages.map( (message, index) =>
        <Messages message={message.message} id={message.id} key={index}/>);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if( !props.isAuth ) return <Redirect to='/login'/>;

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