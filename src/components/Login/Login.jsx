import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <p><Field component={'input'} name={'login'} placeholder={'Login'}/></p>
        <p><Field component={'input'} name={'password'} placeholder={'Password'}/></p>
        <p>
            <label htmlFor="">
                <Field component={'input'} name={'rememberMe'} type="checkbox" /> Remember me
            </label>
        </p>
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