import React from 'react';
import c from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
            <nav className={c.menu}>
                <ul className={c.menu__list}>
                    <li className={c.item}>
                        <NavLink to="/profile" activeClassName={c.active} className={c.link}>Profile</NavLink>
                    </li>
                    <li className={c.item}>
                        <NavLink to="/dialogs" activeClassName={c.active} className={c.link}>Messages</NavLink>
                    </li>
                    <li className={c.item}>
                        <NavLink to="/music" activeClassName={c.active} className={c.link}>Music</NavLink>
                    </li>
                    <li className={c.item}>
                        <NavLink to="/friends" activeClassName={c.active} className={c.link}>Friends</NavLink>
                    </li>
                    <li className={c.item}>
                        <NavLink to="/news" activeClassName={c.active} className={c.link}>News</NavLink>
                    </li>
                </ul>
            </nav>
    )
}

export default Nav;