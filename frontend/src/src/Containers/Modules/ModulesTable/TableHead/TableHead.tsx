import * as React from 'react';

interface ITableHeadProps {
}

const TableHead: React.FunctionComponent<ITableHeadProps> = (props) => {
    return (
        <thead className='table-head'>
            <tr>
                <th>Type</th>
                <th>Name</th>
                <th>State</th>
                <th>Launched / stop At</th>
                <th>Orerating Time</th>
                <th>Value</th>
                <th>Unit</th>
                <th className='show-details-head'>Show Details</th>
            </tr>
        </thead>
    );
};

export default TableHead;
