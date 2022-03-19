import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import { IDetail, IModule } from '../Types/interface';

import Modules from '../Containers/Modules/Modules';
import AddModule from '../Containers/AddModule/AddModule';
import Detail from '../Containers/Detail/Detail';
import History from '../Containers/History/History';


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
          <Route path='/add' element={<AddModule />}/>
          <Route path='/module/detail/:id' element={<Detail />}/>
          <Route path='/module/logs/:id' element={<History />}/>
        </Routes>
    );
};

export default Router;
