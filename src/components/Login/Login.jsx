import React from "react";
import {Field, reduxForm} from "redux-form";
import {CreateField, Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import style from "./../common/FormControls/FormControls.module.css"

const LoginForm = ({handleSubmit,error}) => {
    return <form onSubmit={handleSubmit}>

        { CreateField('Email', 'email', [required], Input ) }

        { CreateField('Password', 'password', [required], Input, {type: 'password'} ) }

        { CreateField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'Remember me' ) }

        { error && <div className={style.formSummeryError}>{error}</div>}

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