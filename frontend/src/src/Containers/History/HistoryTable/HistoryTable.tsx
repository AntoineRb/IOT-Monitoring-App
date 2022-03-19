import * as React from 'react';

import TableHead from './TableHead/TableHead';
import './ModulesTable.scss';

import { IDetail, IModule } from '../../../Types/interface';
import TableRow, { TypeTableRow } from './TableRow/TableRow';
import { cp } from 'fs/promises';


interface ITableProps {
    modulesList: IModule[],
    detailsList: IDetail[]
}

const ModulesTable: React.FunctionComponent<ITableProps> = (props) => {

    let modulesListMap = new Map();
    let detailsListMap = new Map();
    let tableRowArr = []

    const renderRow = () => {
        return tableRowArr.map( (elem) => elem );
    }

    return (
        <table className='modules-list-table'>
            <TableHead />
            <tbody>

            </tbody>
        </table>
    );
};

export default ModulesTable;
