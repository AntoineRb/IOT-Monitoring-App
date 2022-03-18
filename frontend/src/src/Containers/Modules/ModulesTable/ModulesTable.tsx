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

    let modulesListMap = new Map();
    let detailsListMap = new Map();

    if ( props.modulesList !== undefined && props.detailsList !== undefined ) {
        for ( let module of props.modulesList ) {
            modulesListMap.set( module.id, {
                module
            })
        }
        for ( let detail of props.detailsList ) {
            detailsListMap.set( detail.moduleId, {
                detail
            })
        }
    }

    return (
        <table className='modules-list-table'>
            <TableHead />
            <tbody>
                {
                    (modulesListMap.size > 1 && detailsListMap.size > 1) ?
                    <TableRow module={modulesListMap.get(1)} detail={detailsListMap.get(1)}/> :
                    <h2>Data Ko</h2>
                }
                {
                    (modulesListMap.size > 1 && detailsListMap.size > 1) ?
                    <TableRow module={modulesListMap.get(2)} detail={detailsListMap.get(2)}/> :
                    <h2>Data Ko</h2>
                }
                {
                    (modulesListMap.size > 1 && detailsListMap.size > 1) ?
                    <TableRow module={modulesListMap.get(3)} detail={detailsListMap.get(3)}/> :
                    <h2>Data Ko</h2>
                }
                {
                    (modulesListMap.size > 1 && detailsListMap.size > 1) ?
                    <TableRow module={modulesListMap.get(4)} detail={detailsListMap.get(4)}/> :
                    <h2>Data Ko</h2>
                }
                {
                    (modulesListMap.size > 1 && detailsListMap.size > 1) ?
                    <TableRow module={modulesListMap.get(5)} detail={detailsListMap.get(5)}/> :
                    <h2>Data Ko</h2>
                }
                {
                    (modulesListMap.size > 1 && detailsListMap.size > 1) ?
                    <TableRow module={modulesListMap.get(1)} detail={detailsListMap.get(1)}/> :
                    <h2>Data Ko</h2>
                }
                {
                    (modulesListMap.size > 1 && detailsListMap.size > 1) ?
                    <TableRow module={modulesListMap.get(2)} detail={detailsListMap.get(2)}/> :
                    <h2>Data Ko</h2>
                }
                {
                    (modulesListMap.size > 1 && detailsListMap.size > 1) ?
                    <TableRow module={modulesListMap.get(3)} detail={detailsListMap.get(3)}/> :
                    <h2>Data Ko</h2>
                }
                {
                    (modulesListMap.size > 1 && detailsListMap.size > 1) ?
                    <TableRow module={modulesListMap.get(4)} detail={detailsListMap.get(4)}/> :
                    <h2>Data Ko</h2>
                }
                {
                    (modulesListMap.size > 1 && detailsListMap.size > 1) ?
                    <TableRow module={modulesListMap.get(5)} detail={detailsListMap.get(5)}/> :
                    <h2>Data Ko</h2>
                }
                {
                    (modulesListMap.size > 1 && detailsListMap.size > 1) ?
                    <TableRow module={modulesListMap.get(4)} detail={detailsListMap.get(4)}/> :
                    <h2>Data Ko</h2>
                }
                {
                    (modulesListMap.size > 1 && detailsListMap.size > 1) ?
                    <TableRow module={modulesListMap.get(5)} detail={detailsListMap.get(5)}/> :
                    <h2>Data Ko</h2>
                }
                 {
                    (modulesListMap.size > 1 && detailsListMap.size > 1) ?
                    <TableRow module={modulesListMap.get(3)} detail={detailsListMap.get(3)}/> :
                    <h2>Data Ko</h2>
                }
                {
                    (modulesListMap.size > 1 && detailsListMap.size > 1) ?
                    <TableRow module={modulesListMap.get(4)} detail={detailsListMap.get(4)}/> :
                    <h2>Data Ko</h2>
                }
                {
                    (modulesListMap.size > 1 && detailsListMap.size > 1) ?
                    <TableRow module={modulesListMap.get(5)} detail={detailsListMap.get(5)}/> :
                    <h2>Data Ko</h2>
                }
                {
                    (modulesListMap.size > 1 && detailsListMap.size > 1) ?
                    <TableRow module={modulesListMap.get(4)} detail={detailsListMap.get(4)}/> :
                    <h2>Data Ko</h2>
                }
                {
                    (modulesListMap.size > 1 && detailsListMap.size > 1) ?
                    <TableRow module={modulesListMap.get(5)} detail={detailsListMap.get(5)}/> :
                    <h2>Data Ko</h2>
                }
            </tbody>
        </table>
    );
};

export default ModulesTable;
