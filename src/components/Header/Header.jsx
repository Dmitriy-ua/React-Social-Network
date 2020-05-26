import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.header__row}>
                <p className={classes.header__logo} >
                    <img src="https://loremflickr.com/150/150/rio" />
                </p>
                <h1 className={classes.header__title}>
                    Socials Network
                </h1>
                <div className={classes.loginBlock}>
                    { props.isAuth
                        ? <div>props.login - <button onClick={props.logout}>Log out</button> </div>
                        : <NavLink to={'/login'}>Login</NavLink> }

                </div>
            </div>
        </header>
    );
}

export default Header;