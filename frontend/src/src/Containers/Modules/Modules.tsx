import React, { useEffect, useState } from 'react';
import { IDetail, IModule } from '../../Types/interface';

import ModulesTable from "./ModulesTable/ModulesTable"

interface IModulesProps {
  modulesList: IModule[],
  detailsList: IDetail[]
}

const Modules: React.FunctionComponent<IModulesProps> = ( props ) => {
  return (
    <main>
      <section>
        <h1>Modules page</h1>
        <ModulesTable 
        modulesList={props.modulesList}
        detailsList={props.detailsList}/>
      </section>
    </main>
  );
};

export default Modules;
