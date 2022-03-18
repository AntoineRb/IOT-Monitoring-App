import * as React from 'react';

import TableHead from './TableHead/TableHead';
import './ModulesTable.scss';

import { IDetail, IModule } from '../../../Types/interface';
import TableRow from './TableRow/TableRow';


interface ITableProps {
    modulesList: IModule[],
    detailsList: IDetail[]
}

const ModulesTable: React.FunctionComponent<ITableProps> = (props) => {
    return (
        <table className='modules-list-table'>
            <TableHead />
            <TableRow
            modulesList={props.modulesList}
            detailsList={props.detailsList} 
            />
        </table>
    );
};

export default ModulesTable;
