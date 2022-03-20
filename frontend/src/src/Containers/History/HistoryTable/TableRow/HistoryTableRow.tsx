import React, {useState, useEffect} from 'react';
import { ILogs, IModule } from '../../../../Types/interface';
import Detail from '../../../Detail/Detail';

import './HistoryTableRow.scss';

interface ITableRowProps {
    log: ILogs,
    calculTime: (pastDate: string, actualDate: string) => string
}

const TableRow: React.FunctionComponent<ITableRowProps> = (props) => {


    let log:ILogs = props.log;
    return (
        <tr className={ log.moduleState ? "table-row" : "table-row error"}>

            <td className={ log.moduleState ? " col-dark state " : "state error"}>
                {log.moduleState === true ? "ON" : "OFF"}
            </td>

            <td className='col-light'>
                {log.moduleState === true ? log.value : "X"}
            </td>

            <td className='col-dark'>{log.unit}</td>

            {(log.operatingTime !== undefined) ?
                <td className='col-light'>
                    {props.calculTime( log.operatingTime.toLocaleString(), new Date().toJSON() )}mn
                </td> :
                <td>?</td>
            }

            <td className='col-dark'>{log.operatingTime}</td>
        </tr>

    );
};

export type TypeTableRow = typeof TableRow;
export default TableRow;
