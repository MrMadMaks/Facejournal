import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redax/state";

const Dialogs = (props) => {
    const dialogsElements = props.state.dialogs.map( dialogue => <DialogItem name={dialogue.name} id={dialogue.id}/> )

    const messagesElements = props.state.messages.map( message => <Message message={message.message}/> )

    let newMessageBody = props.state.newMessageBody;

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <section className={c.profile__dialogs}>
            <div className={c.container}>
                <div className={c.dialogs}>
                    <div className={c.users}>
                        {dialogsElements}
                    </div>
                    <div className={c.messages}>
                        <div>{messagesElements}</div>
                        <div>
                            <div><textarea onChange={onNewMessageChange} value= {newMessageBody} placeholder="Введите сообщение"></textarea></div>
                            <div><button onClick={ onSendMessageClick } >Send</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dialogs;