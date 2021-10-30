import React from 'react';
import c from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={c.menu}>
            <ul className={c.menu__list}>
                <li className={c.item}><a href="/dialogs" className={c.link}>Messages</a></li>
                <li className={c.item}><a href="/profile" className={c.link}>Profile</a></li>
                <li className={c.item}><a href="/" className={c.link}>Music</a></li>
                <li className={c.item}><a href="/" className={c.link}>Friends</a></li>
                <li className={c.item}><a href="/" className={c.link}>Settings</a></li>
            </ul>
        </nav>
    )
}

export default Nav;