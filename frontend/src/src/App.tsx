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
      console.error(`App.tsx: The value type expected is IModule but the actual type is ${unexpectedType}`);
    }
  }
  useEffect(() => {
    const refreshModulesList = setInterval( async () => {
      await getModulesList( setAllModules );   
    }, 10000);
    return () => {
      window.clearInterval( refreshModulesList );
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
      console.error(`App.tsx: The value type expected is IDetail but the actual type is ${unexpectedType}`);
    }
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

  const getFreshState = ( detailsList: IModule | IDetail | undefined ) => {
    return detailsList;
  }

  

  return (
    <div className="App">
      <NavBar/>
        <Router 
        modulesList={getFreshState(modulesList)}
        detailsList={getFreshState(detailsList)}/>
      <Footer />
    </div>
  );
}

export default App;
