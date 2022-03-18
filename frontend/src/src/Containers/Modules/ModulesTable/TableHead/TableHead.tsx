import * as React from 'react';
import './TableHead.scss'

const TableHead: React.FunctionComponent = (props) => {
    return (
        <thead className='table-head'>
            <tr>
                <th>Type</th>
                <th>Name</th>
                <th>State</th>
                <th>Launched / stop At</th>
                <th>Value</th>
                <th>Unit</th>
                <th className='show-details-head'>Show Details</th>
            </tr>
        </thead>
    );
};

export default TableHead;
