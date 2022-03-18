import React from 'react';
import './App.scss';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Router from './Router/Router';

function App() {
  return (
    <div className="App">
      <NavBar/>
        <Router />
      <Footer />
    </div>
  );
}

export default App;
