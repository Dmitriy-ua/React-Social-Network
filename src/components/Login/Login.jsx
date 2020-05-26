import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Input} name={'email'} placeholder={'Email'}
                   validate={[required]} />
        </div>
        <div>
            <Field component={Input} name={'password'} placeholder={'Password'} type={'password'}
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

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

let mapStateToProps = (state) => ( {
    isAuth: state.auth.isAuth
});
export default connect (mapStateToProps, { login }) (Login);