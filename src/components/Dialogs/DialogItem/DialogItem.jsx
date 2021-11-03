import React from "react";
import c from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem  = (props) => {
    return (
        <div className={c.user}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={c.active} className={c.link}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;