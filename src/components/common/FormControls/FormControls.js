import React from "react";
import styles from "./FormControls.module.css";

const FormControl = ({input, meta, child, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <div className={ styles.formGroup + (hasError ? ' ' + styles.error: '') }>
            <div>
                {props.children}
            </div>
            { hasError && <span className="errorMessage"> {meta.error} </span> }
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