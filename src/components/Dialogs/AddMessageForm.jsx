import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

let maxlength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxlength50]}
                       name="newMessageBody" pleceholder="Enter your message" />
            </div>
            <p> <button>Send</button></p>
        </form>
    )
}

export default reduxForm( {form: "dialogAddMessageForm"}) (AddMessageForm);

