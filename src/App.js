import React from 'react';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Main from './components/Main.jsx';
import './App.css';



const App = () => (
    <div className="wrapper">
        <Header/>
        <Nav/>
        <Main/>
    </div>
);

export default App;
