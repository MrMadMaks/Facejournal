import React from 'react';
import logo from '../../icons/logo.svg';
import c from './Header.module.css';

const Header = () => {
    return (
        <header className={c.header}>
            <img src={logo} alt="Logo" className={c.header__logo} />
            <h1>Facejournal</h1>
        </header>
    )
}

export default Header;