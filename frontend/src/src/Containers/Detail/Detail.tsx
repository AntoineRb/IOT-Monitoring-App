import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

import getUniqueDetail from '../../services/getUniqueDetail';
import getUniqueModule from '../../services/getUniqueModule';

import { DETAIL_INITIAL_STATE, MODULE_INITIAL_STATE } from '../../Types/initialState';
import { IDetail, IModule } from '../../Types/interface';

import {formatDate, getIdInParams, getTimeBewtweenDate} from '../../utils';

import './Detail.scss';

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

    const [lastUpdate, setLastUpdate] = useState<string>("XX:XX:XX");
    useEffect(() => {
      setInterval(() => {
        if ( detail.operatingTime !== undefined ) {     
            setLastUpdate( formatDate( new Date(detail.operatingTime) ) );
        }
      }, 1000);
    }, [detail]);

    return (
        <main>
          <section className='info-section'>
              <div className='actual-info'>
                  { module !== MODULE_INITIAL_STATE &&
                      <p className='type'>{module.type}</p>
                  }
                  { detail !== DETAIL_INITIAL_STATE &&
                      <>
                        <p className='p-value'> 
                          <span className='value'>{detail.value}</span> 
                          <span className='unit'>{detail.unit}</span>
                        </p>
                        <p className='last-info-time'>{lastUpdate}</p>
                        <NavLink className="btn-history" to={`/module/history/${detail.moduleId}`}>
                            Historique
                        </NavLink>
                      </>
                  }
              </div>
          </section>
        </main>
    );
};

export default Detail;
