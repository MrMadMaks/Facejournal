import React from "react";
import c from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <section className={c.profile__dialogs}>
            <div className={c.container}>
                <div className={c.dialogs}>
                    <div className={c.users}>
                        <div className={c.user}>Anton</div>
                        <div className={c.user}>Ivan</div>
                        <div className={c.user}>Yra</div>
                        <div className={c.user}>Alex</div>
                        <div className={c.user}>Pavel</div>
                    </div>
                    <div className={c.messages}>
                        <div className={c.message}>How are you?</div>
                        <div className={c.message}>I'm fine.</div>
                        <div className={c.message}>Yo</div>
                        <div className={c.message}>Hi!</div>
                        <div className={c.message}>Hello World!</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dialogs;