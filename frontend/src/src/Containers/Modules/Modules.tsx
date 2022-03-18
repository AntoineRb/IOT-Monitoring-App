import React, { useEffect, useState } from 'react';
import { IModule } from '../../Types/interface';


const Modules: React.FunctionComponent = () => {

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
    fetch('http://localhost:8080/module/all', { // Change Later For Base URL
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
  }, [])


  
  return (
    <main>
      <section>
        <h1>Modules page</h1>
      </section>
    </main>
  );
};

export default Modules;
