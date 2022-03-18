import React, { useEffect, useState } from 'react';
import { IModule, IDetail } from './Types/interface';
import './App.scss';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Router from './Router/Router';

// Request
import getModulesList from './services/getModulesList';
import getDetailsList from './services/getDetailsList';

function App() {

  // To Get All Modules
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
    window.addEventListener('load', async () => await getModulesList( setModulesListState ) );     
    return () => {
      window.removeEventListener('load', async () => await getModulesList );
    }
  }, []);

  // To Get All Modules Details
  const [ detailsList, setDetailsList ]  = useState<IDetail>();
  const setDetailsListState = ( newDetailsList: IDetail | undefined ) => {
    if ( newDetailsList !== undefined ) {
      setDetailsList( newDetailsList );
    } 
    else {
      const unexpectedType = typeof newDetailsList;
      console.error(`Details.tsx: The value type expected is IDetail but the actual type is ${unexpectedType}`);
    }
  }
  const clg = ( data:IDetail | undefined ) => {
    console.log(data);
  }

  // Refresh Details List  
  useEffect(() => {
    const refreshDetailsList = setInterval( async () => {
      await getDetailsList( setDetailsListState );   
    }, 10000);
    return () => {
      window.clearInterval( refreshDetailsList );
    }
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
