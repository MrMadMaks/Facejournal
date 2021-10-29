import React from 'react';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Main from './components/Main.jsx';
import './App.css';



function App() {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <Main/>
    </div>
  );
}

export default App;
