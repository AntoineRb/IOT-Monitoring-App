import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Modules from '../Containers/Modules/Modules';
import { IDetail, IModule } from '../Types/interface';

interface IRouterProps {
  modulesList: IModule[],
  detailsList: IDetail[]
}

const Router: React.FunctionComponent<IRouterProps> = ( props ) => {
    return (
        <Routes>
          <Route path='/' element={<Modules 
          modulesList={props.modulesList}
          detailsList={props.detailsList}/>}/>
          {/* <Route path='/add' element={<Modules />}/> */}
        </Routes>
    );
};

export default Router;
