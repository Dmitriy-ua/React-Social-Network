import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogs.map( (dialog, index) =>
        <DialogItem name={dialog.name} id={dialog.id} key={index}/>);

    let messageElements = state.messages.map( (message, index) =>
        <Messages message={message.message} id={message.id} key={index}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
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
               <AddMessageForm onSubmit={addNewMessage}/>
            </div>

        </main>
    );
}
export default Dialogs;