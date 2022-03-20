import React, {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import { ILogs, IModule } from '../../../../Types/interface';
import{getTimeBewtweenDate} from '../../../../utils';

import './HistoryTableRow.scss';

interface ITableRowProps {
    log: ILogs
}

const TableRow: React.FunctionComponent<ITableRowProps> = (props) => {


    let log:ILogs = props.log;
    return (
        <tr id={uuidv4()} className={ log.moduleState ? "table-row" : "table-row error"}>

            <td className={ log.moduleState ? " col-dark state " : "state error"}>
                {log.moduleState === true ? "ON" : "OFF"}
            </td>

            <td className='col-light'>
                {log.moduleState === true ? log.value : "X"}
            </td>

            <td className='col-dark'>{log.unit}</td>

            {(log.operatingTime !== undefined) ?
                <td className='col-light'>
                    {getTimeBewtweenDate( log.operatingTime.toLocaleString(), new Date().toJSON() )}mn
                </td> :
                <td>?</td>
            }

            <td className='col-dark'>{log.operatingTime}</td>
        </tr>

    );
};

export type TypeTableRow = typeof TableRow;
export default TableRow;
