import React, { useEffect, useState } from 'react';
import { IModule, IDetail } from './Types/interface';
import './App.scss';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Router from './Router/Router';

// Request
import getModulesList from './services/getModulesList';
import getDetailsList from './services/getDetailsList';

import { MODULE_INITIAL_STATE, DETAIL_INITIAL_STATE } from "./Types/initialState"

function App() {

  // To Get All Modules
  const [ modulesList, setModulesList ]  = useState<IModule[]>([MODULE_INITIAL_STATE]);
  const setModulesListState = (newModulesList: IModule[]) => {
    if ( newModulesList !== undefined ) {
      setModulesList( newModulesList );
    } 
    else {
      const unexpectedType = typeof newModulesList;
      console.error(`App.tsx: The value type expected is IModule but the actual type is ${unexpectedType}`);
    }
  }
  useEffect(() => {
    getModulesList( setModulesListState ); 
    const refreshModulesList = setInterval( async () => {
      await getModulesList( setModulesListState );   
    }, 10000);
    return () => {
      window.clearInterval( refreshModulesList );
    }
  }, []);

  // To Get All Modules Details
  const [ detailsList, setDetailsList ]  = useState<IDetail[]>([DETAIL_INITIAL_STATE]);
  const setDetailsListState = ( newDetailsList: IDetail[] ) => {
    if ( newDetailsList !== undefined ) {
      setDetailsList( newDetailsList );
    } 
    else {
      const unexpectedType = typeof newDetailsList;
      console.error(`App.tsx: The value type expected is IDetail[] but the actual type is ${unexpectedType}`);
    }
  }
  // Refresh Details List  
  useEffect(() => {
    getDetailsList( setDetailsListState );
    const refreshDetailsList = setInterval( async () => {
      await getDetailsList( setDetailsListState );   
    }, 10000);
    return () => {
      window.clearInterval( refreshDetailsList );
    }
  }, []);

  const getModulesListState = ( detailsList: IModule[]) => {
    return detailsList;
  }
  const getDetailsListState = ( detailsList: IDetail[] ) => {
    return detailsList;
  }

  

  return (
    <div className="App">
      <NavBar/>
        <Router 
        modulesList={getModulesListState(modulesList)}
        detailsList={getDetailsListState(detailsList)}/>
      <Footer />
    </div>
  );
}

export default App;
