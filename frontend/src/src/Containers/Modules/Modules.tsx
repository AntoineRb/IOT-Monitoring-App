import React, { useEffect, useState } from 'react';
import { IDetail, IModule } from '../../Types/interface';

import ModulesTable from "./ModulesTable/ModulesTable"

interface IModulesProps {
  modulesList: IModule | IDetail | undefined,
  detailsList: IModule | IDetail | undefined
}

const Modules: React.FunctionComponent<IModulesProps> = ( props ) => {
  console.log( 'In Modules Component :' )
  console.log( props.modulesList );
  console.log( props.detailsList )
  return (
    <main>
      <section>
        <h1>Modules page</h1>
        <ModulesTable />
      </section>
    </main>
  );
};

export default Modules;
