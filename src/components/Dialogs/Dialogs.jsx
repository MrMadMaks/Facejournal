import React from "react";
import c from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem  = (props) => {
    return (
        <div className={c.user}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={c.active} className={c.link}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={c.message}>{props.message}</div>
    )
}

const dialogsData = [
    {id: 1, name: 'Anton'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Ivan'},
    {id: 4, name: 'Artem'},
    {id: 5, name: 'Maxim'},
]

const messagesData = [
    {id: 1, message: 'How are you?'},
    {id: 2, message: 'Hello World!'},
    {id: 3, message: 'I\'m fine.'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Does not matter'},
]

const Dialogs = () => {
    return (
        <section className={c.profile__dialogs}>
            <div className={c.container}>
                <div className={c.dialogs}>
                    <div className={c.users}>
                        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                    </div>
                    <div className={c.messages}>
                        <Message message={messagesData[0].message}/>
                        <Message message={messagesData[1].message}/>
                        <Message message={messagesData[2].message}/>
                        <Message message={messagesData[3].message}/>
                        <Message message={messagesData[4].message}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dialogs;