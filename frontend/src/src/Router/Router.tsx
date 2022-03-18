import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Modules from '../Containers/Modules/Modules';

const Router: React.FunctionComponent = () => {
    return (
        <Routes>
          <Route path='/' element={<Modules />}/>
          <Route path='/add' element={<Modules />}/>
        </Routes>
    );
};

export default Router;
