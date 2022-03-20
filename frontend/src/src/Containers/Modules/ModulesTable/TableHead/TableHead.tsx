import * as React from 'react';
import './TableHead.scss'

const TableHead: React.FunctionComponent = (props) => {
    return (
        <thead className='table-head'>
            <tr>
                <th>Type</th>
                <th>Nom</th>
                <th>État </th>
                <th>Actif / Inactif depuis</th>
                <th>Mesure</th>
                <th>Unité</th>
                <th className='show-details-head'>Show Details</th>
            </tr>
        </thead>
    );
};

export default TableHead;
