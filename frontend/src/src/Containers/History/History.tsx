import React, {useState, useEffect} from 'react';
import getModulesLogs from '../../services/getModuleLogs';
import { LOGS_INITIAL_STATE } from '../../Types/initialState';
import { ILogs } from '../../Types/interface';

interface IHistoryProps {
}

const History: React.FunctionComponent<IHistoryProps> = (props) => {

  const fullUrl = window.location.href;
  const params: string | string[] = fullUrl.split('/')
  const id: number = +params[params.length - 1]
  console.log(id);
  const [ logsList, setLogsList ]  = useState<ILogs[]>([LOGS_INITIAL_STATE]);
  const setLogsListState = (logsList: ILogs[]) => {
    if ( logsList !== undefined ) {
      setLogsList( logsList );
      console.log( logsList );
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
    }, 10000);
    return () => {
      window.clearInterval( refreshModulesList );
    }
  }, []);

    return (
        <main>
          <section>
            
          </section>
        </main>
    );
};

export default History;
