import * as React from 'react';
import './HistoryTableHead.scss';

const TableHead: React.FunctionComponent = (props) => {
    return (
        <thead className='table-head'>
            <tr>
                <th>État de Fonctionnement</th>
                <th>Mesure</th>
                <th>Unité</th>
                <th>Actif / Inactif depuis </th>
                <th className='capture-date'>Date de Capture:</th>
            </tr>
        </thead>
    );
};

export default TableHead;
