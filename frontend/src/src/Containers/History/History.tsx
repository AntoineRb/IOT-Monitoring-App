import React, {useState, useEffect} from 'react';

import getModulesLogs from '../../services/getModuleLogs';
import { LOGS_INITIAL_STATE } from '../../Types/initialState';
import { IDetail, ILogs, IModule } from '../../Types/interface';

import HistoryTable from './HistoryTable/HistoryTable';

import './History.scss';
import Modules from '../Modules/Modules';

interface IHistoryProps {
  modulesList: IModule[],
  detailsList: IDetail[]
}

const History: React.FunctionComponent<IHistoryProps> = (props) => {

  // Get param :id in Url as moduleId
  const fullUrl = window.location.href;
  const params: string | string[] = fullUrl.split('/')
  // moduleId
  const id: number = +params[params.length - 1];
  const [module, setModule] = useState<IModule | undefined>();
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

  // Get Expected Module
  useEffect(() => {
    const logsLength: number = logs.length - 1;
    const lastLog: ILogs = logs[logsLength];
    if ( lastLog.moduleId > 0 ) {
      if (props.modulesList !== undefined ) {
          for ( let module of props.modulesList ) {
            if ( module.id === lastLog.moduleId ) {
              setModule(module)
              break;
            }
          }
      }
    }
  },[props.modulesList])

  useEffect(() => {
    getModulesLogs( id, setLogsListState ); 
    const refreshModulesList = setInterval( async () => {
      await getModulesLogs( id, setLogsListState );
    }, 60000);
    return () => {
      window.clearInterval( refreshModulesList );
    }
  }, []);


    return (
        <main>
            { props.modulesList !== undefined &&
              <div className='module-info'>
                <h3>Type : { module == undefined ? '...' : module.type }</h3>
                <h3>Nom : {  module == undefined ? '...' : module.name }</h3>
                <h3>Données Envoyées : {  props.detailsList[id] == undefined ? '...' : props.detailsList[id].dataCount }</h3>
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
