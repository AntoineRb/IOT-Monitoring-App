import React, {useState, useEffect} from 'react';

import getModulesLogs from '../../services/getModuleLogs';
import { LOGS_INITIAL_STATE, MODULE_INITIAL_STATE } from '../../Types/initialState';
import { IDetail, ILogs, IModule } from '../../Types/interface';

import HistoryTable from './HistoryTable/HistoryTable';

import './History.scss';
import Modules from '../Modules/Modules';
import getUniqueModule from '../../services/getUniqueModule';

interface IHistoryProps {
  detailsList: IDetail[]
}

const History: React.FunctionComponent<IHistoryProps> = (props) => {

  // Get param :id in Url as moduleId
  const fullUrl = window.location.href;
  const params: string | string[] = fullUrl.split('/')
  const moduleId: number = +params[params.length - 1];
  const [ logs, setLogsList ]  = useState<ILogs[]>([LOGS_INITIAL_STATE]);
  const setLogsListState = (logsList: ILogs[]) => {
    if ( logsList !== undefined ) {
      setLogsList( logsList );
      // console.log( logsList );
    } 
    else {
      const unexpectedType = typeof logsList;
      console.error(`History.tsx: The value type expected is ILogs but the actual type is ${unexpectedType}`);
    }
  }
  useEffect(() => {
    getModulesLogs( moduleId, setLogsListState ); 
    const refreshModulesList = setInterval( async () => {
      await getModulesLogs( moduleId, setLogsListState );
    }, 60000);
    return () => {
      window.clearInterval( refreshModulesList );
    }
  }, []);
  
  // Get Expected Module
  const [module, setModule] = useState<IModule | undefined>();
  useEffect(() => {
    const lastLog: ILogs = logs[logs.length - 1];
    if ( lastLog.moduleId > 0 ) {
      getUniqueModule( lastLog.moduleId, setModule );
    }
  },[logs]);

    return (
        <main>
          { module !== MODULE_INITIAL_STATE &&
            <div className='module-info'>
              <h3>Type : { module == undefined ? '...' : module.type }</h3>
              <h3>Nom : {  module == undefined ? '...' : module.name }</h3>
              <h3>Données Envoyées : {  logs[moduleId] == undefined ? '...' : props.detailsList[moduleId].dataCount }</h3>
            </div>
          }
          <section className='history-table-section'>
            <div className='table-container'>
              <HistoryTable 
              logs={logs}/>
            </div>
          </section>
        </main>
    );
};

export default History;
