import React from 'react';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Friends from "./components/Friends/Friends";
import News from "./components/News/News";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Nav/>
                <main className="main">
                    <Route path='/profile' render={ () => <Profile state={props.state.profilePage}
                                                                   dispatch={props.dispatch}/>}/>
                    <Route path='/dialogs' render= { () => <Dialogs store={props.store} state={props.state.messagesPage}/>}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/friends' component={Friends}/>
                    <Route path='/news' component={News}/>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App;
