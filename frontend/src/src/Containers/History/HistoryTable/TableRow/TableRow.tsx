import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { LOGS_INITIAL_STATE } from '../../../../Types/initialState';
import { ILogs } from '../../../../Types/interface';

import './TableRow.scss';

interface ITableRowProps {
    log: ILogs,
    calculTime: (pastDate: string, actualDate: string) => string
}

const TableRow: React.FunctionComponent<ITableRowProps> = (props) => {


    let log:ILogs = props.log;
    console.log(props.log);
    return (
        <tr>
            <td>{log.moduleState === true ? "ON" : "OFF"}</td>
            <td>{log.moduleState === true ? log.value : "X"}</td>
            <td>{log.unit}</td>
            { (log.operatingTime !== undefined) &&
                <td>{props.calculTime( log.operatingTime.toLocaleString(), new Date().toJSON() )}mn</td>
            }
        </tr>
    );
};

export type TypeTableRow = typeof TableRow;
export default TableRow;
