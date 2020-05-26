import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Input} name={'login'} placeholder={'Login'}
                   validate={[required]} />
        </div>
        <div>
            <Field component={Input} name={'password'} placeholder={'Password'}
                   validate={[required]} />
        </div>
        <div>
            <label htmlFor="rememberMe">
                <Field component={Input} name={'rememberMe'} type="checkbox" id="rememberMe" /> Remember me
            </label>
        </div>
        <p> <button>Login</button></p>
    </form>
}

const LoginReduxForm = reduxForm( { form: 'login' }) (LoginForm)

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
export default Login;