import React, {useState, useEffect} from 'react';

import getUniqueDetail from '../../services/getUniqueDetail';
import getUniqueModule from '../../services/getUniqueModule';

import { DETAIL_INITIAL_STATE, MODULE_INITIAL_STATE } from '../../Types/initialState';
import { IDetail, IModule } from '../../Types/interface';

import {getIdInParams} from '../../utils';

const Detail: React.FunctionComponent = () => {
    const [moduleId, setModuleId] = useState<number>(0);
    useEffect(() => {
      setModuleId( getIdInParams() );
    }, []);

    const [module, setModule] = useState<IModule>(MODULE_INITIAL_STATE);
    useEffect(() => {
      getUniqueModule( moduleId, setModule );
    }, [moduleId]);

    const [detail, setDetail] = useState<IDetail>(DETAIL_INITIAL_STATE);
    useEffect(() => {
      getUniqueDetail( moduleId, setDetail );
    }, [moduleId]);
    return (
        <main>
          <section className='info'>
              <div className='value-info'>
                <div>
                  { module !== MODULE_INITIAL_STATE &&
                      <p>{module.type}</p>
                  }
                  { detail !== DETAIL_INITIAL_STATE &&
                      <>
                        <p>{detail.value}</p>
                        <p>{detail.unit}</p>
                      </>
                  }
                </div>
              </div>
          </section>
        </main>
    );
};

export default Detail;
