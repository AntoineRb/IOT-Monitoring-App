import React from 'react';
import './App.scss';
import NavBar from './Components/NavBar/NavBar';
import Router from './Router/Router';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router />
    </div>
  );
}

export default App;
