import * as React from 'react';
import './TableHead.scss'

const TableHead: React.FunctionComponent = (props) => {
    return (
        <thead className='table-head'>
            <tr>
                <td>État de Fonctionnement</td>
                <td>Valeur Capturé</td>
                <td>Unité</td>
                <td>Actif depuis </td>
                <td>Date de Capture:</td>
            </tr>
        </thead>
    );
};

export default TableHead;
