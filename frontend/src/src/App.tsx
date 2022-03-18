import React, { useEffect, useState } from 'react';
import { IModule } from './Types/interface';
import './App.scss';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Router from './Router/Router';

function App() {
  const [ modulesList, setAllModules ]  = useState<IModule>();
  const setModulesListState = ( newModulesList: IModule | undefined ) => {
    if ( newModulesList !== undefined ) {
      setAllModules( newModulesList );
    } 
    else {
      const unexpectedType = typeof newModulesList;
      console.error(`Modules.tsx: The value type expected is IModule but the actual type is ${unexpectedType}`);
    }
  }

  useEffect(() => {
    const getModulesList =  async() => {
      await fetch('http://localhost:8080/module/all', { // Change Later For Base URL
        method: "GET",
        headers: {
            "Content-Type":  "application/json; charset=UTF-8"
        }
      })
      .then( response => response.json() )
      .then(( response ) => {
          setModulesListState( response );
          console.log( response );
      })
      .catch(( err:Error ) => {
          throw err;
      });
    }
    window.addEventListener('load', async () => await getModulesList() );     
    return () => window.removeEventListener('load', getModulesList );
  }, []);

  return (
    <div className="App">
      <NavBar/>
        <Router />
      <Footer />
    </div>
  );
}

export default App;
