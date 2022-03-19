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
    let tableRowArr = []

    if ( props.modulesList !== undefined && props.detailsList !== undefined ) {
        for ( let module of props.modulesList ) {
            if ( module.id === 0 ) {
                continue;
            }
            modulesListMap.set( module.id, {
                module
            })
        }
        for ( let detail of props.detailsList ) {
            if ( detail.moduleId === 0 ) {
                continue;
            }
            console.log( detail )
            if ( detail.moduleId !== 0) {
                let moduleID:number = detail.moduleId;
                let module:IModule = modulesListMap.get( moduleID );
                tableRowArr.push(<TableRow key={moduleID} module={module} detail={detail}/>);
            }
        }
        // console.log( tableRowArr );
    }

    const renderRow = () => {
        return tableRowArr.map( (elem) => elem );
    }

    return (
        <table className='modules-list-table'>
            <TableHead />
            <tbody>

                {(tableRowArr.length > 0) &&
                    renderRow()
                }
            </tbody>
        </table>
    );
};

export default ModulesTable;
