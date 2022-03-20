import {v4 as uuidv4} from 'uuid';
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

    if ( props.logs !== undefined  ) {
        for ( let log of props.logs ) {
            if ( log.moduleId === 0 ) {
                continue;
            }         
            tableRowArr.unshift(
            <TableRow 
            key={uuidv4()} 
            log={log}
            />);

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
