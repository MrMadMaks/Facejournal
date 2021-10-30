import React from 'react';
import '../App.css';
import Profile from './Profile/Profile.jsx';
import Dialogs from "./Profile/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const Main = () => {
    return (
        <BrowserRouter>
            <main className="main">
                <Route path='/profile' component= {Profile}/>
                <Route path='/dialogs' component= {Dialogs}/>
            </main>
        </BrowserRouter>
    )
}

export default Main;