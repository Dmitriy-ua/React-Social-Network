import React from "react";

const Header = () => {
    return (
        <header className='app-header'>
            <div className="app-header__row">
                <p className='app-header__logo' >
                    <img src="https://loremflickr.com/150/150/rio" />
                </p>
                <h1 className='app-header__title'>
                    Socials Network
                </h1>
            </div>

        </header>
    );
}

export default Header;