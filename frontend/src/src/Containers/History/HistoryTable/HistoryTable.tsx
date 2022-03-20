import React, { useEffect, useState } from 'react';
import {v4 as uuidv4} from 'uuid';

import { ILogs} from '../../../Types/interface';
import { LOGS_INITIAL_STATE } from '../../../Types/initialState';

import './HistoryTable.scss';
import TableHead from './HistoryTableHead/HistoryTableHead';
import TableRow from './HistoryTableRow/HistoryTableRow';


interface ITableProps {
    logs: ILogs[]
}

const HistoryTable: React.FunctionComponent<ITableProps> = (props) => {
    
    const[logs, setLogs] = useState<ILogs[]>([LOGS_INITIAL_STATE]);

    useEffect(() => {
        setLogs( props.logs )
    }, [props.logs]);
    
    let tableRowArr = []

    if ( logs !==  [LOGS_INITIAL_STATE] ) {
        for ( let log of logs ) {      
            tableRowArr.unshift(
            <TableRow key={uuidv4()} log={log}/>);
        }
    }

    const renderRow = () => {
        return tableRowArr.map( (elem) => elem );
    }

    return (
        <table className='modules-list-table'>
            <TableHead />
            <tbody className='history-table-body'>
                {(tableRowArr.length > 0) &&
                    renderRow()
                }
            </tbody>
        </table>
    )
};

export default HistoryTable;
