import React, {useState, useEffect} from 'react';

import getModulesLogs from '../../services/getModuleLogs';
import { LOGS_INITIAL_STATE } from '../../Types/initialState';
import { IDetail, ILogs, IModule } from '../../Types/interface';

import HistoryTable from './HistoryTable/HistoryTable';

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
          <section>
            { props.modulesList !== undefined &&
              <div className='module-info'>
                <h3>Type : { props.modulesList[id] == undefined ? 'X' : props.modulesList[id].id }</h3>
                <h3>Nom : {  props.modulesList[id] == undefined ? 'X' : props.modulesList[id].name }</h3>
                <h3>Données Envoyées : {  props.detailsList[id] == undefined ? 'X' : props.detailsList[id].dataCount }</h3>
              </div>
            }
            <HistoryTable 
            logs={logs}/>
          </section>
        </main>
    );
};

export default History;
