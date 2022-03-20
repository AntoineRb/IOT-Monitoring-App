import { findMany as findAllModule, update } from "../services/module";
import { findUnique as findDetail, update as updateDetail } from "../services/detail";
import addDetailToLogs from "./addDetailToLogs";
import { getRandomValue } from "./rendomValue";
import toggleRandomModuleState from "./toggleModuleState";

import { IDetail, IModule } from "../types/interface";

async function dataGenerator () {
    const allModules: IModule[] = await findAllModule();
    toggleRandomModuleState( allModules );
    for ( let module of allModules ) {
        const moduleID: number | undefined = module.id;
        if ( moduleID === undefined ) {
            continue;
        }
        const moduleDetail: IDetail | null = await findDetail( moduleID );
        if ( moduleDetail === null ) {
            continue;
        } else if ( !moduleDetail.moduleState ) { // If Module is KO
            continue;
        }
        // Update Module
        const min = moduleDetail.minValue;
        const max = moduleDetail.maxValue;
        const newValue:number = getRandomValue( min, max );
        console.log( newValue );
        console.log( module );
        await updateDetail( moduleID, {
            value:    newValue,
            minValue: moduleDetail.minValue,
            maxValue: moduleDetail.maxValue,
            unit:     moduleDetail.unit,
            moduleId: moduleDetail.moduleId
        });
        // Add old Module Detail to Logs
        await addDetailToLogs( moduleDetail )
    }
}
export default dataGenerator;