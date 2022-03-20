import { findMany as findAllModule, findUnique as findModule } from "../services/module";
import { findUnique as findDetail, update as updateDetail } from "../services/detail";
import { IDetail, IModule } from "../types/interface";
import { getRandomValue } from "./rendomValue";
import addDetailToLogs from "./addDetailToLogs";

async function toggleRandomModuleState ( allModules: IModule[] ) {
    const moduleID: number = getRandomValue( 1, allModules.length );
    const module: IModule | null = await findModule( moduleID );
    if ( module === null ) {
        return false;
    }
    const moduleStateIsToggle:boolean = await toggleModuleState( moduleID );
    if ( moduleStateIsToggle ) {
        return true;
    }
    return false;
}

export default toggleRandomModuleState;

async function toggleModuleState ( moduleID:number ) {
    const moduleDetail: IDetail | null = await findDetail( moduleID );
    const actualDate = new Date();
    if ( moduleDetail === null ) {
        return false;
    }
    await addDetailToLogs(moduleDetail);
    await updateDetail( moduleID, {
        value:          0,
        minValue:       moduleDetail.minValue,
        maxValue:       moduleDetail.maxValue,
        unit:           moduleDetail.unit,
        operatingTime:  actualDate,
        moduleState:    !moduleDetail.moduleState,
        dataCount:      moduleDetail.dataCount,
        moduleId:       moduleDetail.moduleId
    });
    return true;
}
