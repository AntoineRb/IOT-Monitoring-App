import React, { ReactElement, useEffect, useState } from 'react';

import { ILogs, IModule} from '../../../Types/interface';

import './HistoryTable.scss';
import TableHead from './TableHead/HistoryTableHead';
import TableRow from './TableRow/HistoryTableRow';


interface ITableProps {
    logs: ILogs[]
}

const HistoryTable: React.FunctionComponent<ITableProps> = (props) => {
    
    
    let logsMap = new Map();
    let tableRowArr = []

    // Return time in Hour between two dates
    // Expected date format in params : '2038-01-19 03:14:07' ( UTC timestamp )
    // get the expected format with : new Date().toJSON();
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

    if ( props.logs !== undefined  ) {
        for ( let log of props.logs ) {
            if ( log.moduleId === 0 ) {
                continue;
            }
            
            tableRowArr.push(
            <TableRow 
            key={+log.operatingTime} 
            log={log} 
            calculTime={getTimeBewtweenDate}
            />);

        }
        // console.log( tableRowArr );
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
