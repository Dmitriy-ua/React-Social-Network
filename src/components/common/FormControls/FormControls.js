import React from "react";
import styles from "./FormControls.module.css";
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children }) => {
    let hasError = touched && error;
    return (
        <div className={ styles.formGroup + (hasError ? ' ' + styles.error: '') }>
            <div>
                {children}
            </div>
            { hasError && <span className="errorMessage"> {error} </span> }
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps } = props;
    return <FormControl {...props}> <textarea {...input } {...restProps }/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps } = props;
    return <FormControl {...props}> <input {...input } {...restProps }/></FormControl>
}

// export const Input = ({input, meta, ...props}) => {
//     let hasError = meta.touched && meta.error;
//     return (
//         <div className={ styles.formGroup + (hasError ? ' ' + styles.error: '') }>
//             <div>
//                 <input {...input} {...props} />
//             </div>
//             <div>
//                 { hasError && <span className="errorMessage"> {meta.error} </span> }
//             </div>
//         </div>
//     )
// }

export const CreateField = (placeholder, name, validators, component, props= {}, text = '' ) => (
    <div>
        <Field component={component} name={name} placeholder={placeholder}
               validate={validators} {...props} /> {text}
    </div>
)