import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const dialogsElements = props.state.dialogs.map( dialogue => <DialogItem name={dialogue.name} id={dialogue.id}/> )

    const messagesElements = props.state.messages.map( message => <Message message={message.message}/> )

    return (
        <section className={c.profile__dialogs}>
            <div className={c.container}>
                <div className={c.dialogs}>
                    <div className={c.users}>
                        {dialogsElements}
                    </div>
                    <div className={c.messages}>
                        {messagesElements}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dialogs;