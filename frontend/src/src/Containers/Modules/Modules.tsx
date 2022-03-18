import React, { useEffect, useState } from 'react';
import { IDetail, IModule } from '../../Types/interface';

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
      </section>
    </main>
  );
};

export default Modules;
