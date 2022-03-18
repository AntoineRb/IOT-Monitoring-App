import * as React from 'react';

import TableHead from './TableHead/TableHead';
import './ModulesTable.scss';

interface ITableProps {
}

const ModulesTable: React.FunctionComponent<ITableProps> = (props) => {
    return (
        <table className='modules-list-table'>
            <TableHead />
        </table>
    );
};

export default ModulesTable;
