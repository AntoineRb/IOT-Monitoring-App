import * as React from 'react';
import {v4 as uuidv4} from 'uuid';

import { NavLink } from 'react-router-dom';
import { IDetail, IModule } from '../../../../Types/interface';

import './TableRow.scss';

interface ITableRowProps {
    module: IModule,
    detail: IDetail
}

const TableRow: React.FunctionComponent<ITableRowProps> = (props) => {
    
    let module: IModule = props.module["module"];
    let detail: IDetail = props.detail;

    return (
        <>
            <tr id={uuidv4()} className={`table-row ${props.detail.moduleState ? '' : 'error'}`}>
                <td className='col-dark module-type'>
                    {module.type}
                </td>
                <td className='col-light'>
                    {module.name}
                </td>
                <td className='col-dark state'>
                    {props.detail.moduleState ? "ON" : "OFF"}
                </td>
                <td className='col-light'>
                    {props.detail.operatingTime}
                </td>
                <td className='col-dark'>
                    {props.detail.value}
                </td>
                <td className='col-light'>
                    {props.detail.unit}
                </td>
                <td className='btn-container col-dark'>
                    <NavLink to={`/module/detail/${module.id}`} >
                        Show Details
                    </NavLink>
                </td>
            </tr>
        </>
    );
};

export type TypeTableRow = typeof TableRow;
export default TableRow;
