import React, { ReactElement, useEffect, useState } from 'react';

import TableHead from './TableHead/TableHead';
import './HistoryTable.scss';

import { ILogs} from '../../../Types/interface';
import TableRow from './TableRow/TableRow';
import { LOGS_INITIAL_STATE } from '../../../Types/initialState';



interface ITableProps {
    logs: ILogs[]
}
// Return time in Hour between two dates
// Expected date format in params : '2038-01-19 03:14:07' ( UTC timestamp )
// get the expected format with : new Date().toJSON();

const HistoryTable: React.FunctionComponent<ITableProps> = (props) => {
    
    const getTimeBewtweenDate = ( pastDate:string , actualDate:string ) => {
        const past:any = new Date( pastDate );
        const actual:any = new Date( actualDate );
        const timeInHour = ((( (actual - past) / 1000) / 60) / 60) / 60; // Hour
        const timeStr = timeInHour
        .toFixed(2)
        .toLocaleString()
        .replace('.', 'H');
        return timeStr;
    }

    let logsMap = new Map();
    let tableRowArr = []

    if ( props.logs !== undefined  ) {
        for ( let log of props.logs ) {
            if ( log.moduleId === 0 ) {
                continue;
            }
            console.log( log )
            tableRowArr.push(<TableRow key={log.moduleId} log={log} calculTime={getTimeBewtweenDate}/>);

        }
        // console.log( tableRowArr );
    }

    const renderRow = () => {
        return tableRowArr.map( (elem) => elem );
    }

    return (
        <table className='modules-list-table'>
            <TableHead />
            <tbody>

                {(tableRowArr.length > 0) &&
                    renderRow()
                }
            </tbody>
        </table>
    )
};

export default HistoryTable;
