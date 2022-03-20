import React, { useEffect, useState } from 'react';
import { IDetail, IModule } from '../../Types/interface';

import ModulesTable from "./ModulesTable/ModulesTable"

import "./Modules.scss";

interface IModulesProps {
  modulesList: IModule[],
  detailsList: IDetail[]
}

const Modules: React.FunctionComponent<IModulesProps> = ( props ) => {
  return (
    <main className='modules-page'>
      <h1>Modules :</h1>
      <section className='modules-table-section'>
        <div className='table-container'>
          <ModulesTable 
          modulesList={props.modulesList}
          detailsList={props.detailsList}/>
        </div>
      </section>
    </main>
  );
};

export default Modules;
