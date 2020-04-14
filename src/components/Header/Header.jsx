import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.header__row}>
                <p className={classes.header__logo} >
                    <img src="https://loremflickr.com/150/150/rio" />
                </p>
                <h1 className={classes.header__title}>
                    Socials Network
                </h1>
            </div>

        </header>
    );
}

export default Header;