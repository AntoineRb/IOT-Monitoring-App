import { findUnique as findDetail, update as updateDetail } from "../services/detail";
import { create as createLog } from "../services/logs";
import { IDetail } from "../types/interface";

async function  addDetailToLogs ( moduleID:number ) {
    const detail:IDetail | null = await findDetail( moduleID );
    if ( detail?.operatingTime === undefined || detail.moduleState === undefined) {
        return false;
    }
    await createLog({
        value: detail.value,
        minValue: detail.minValue,
        maxValue: detail.maxValue,
        unit: detail.unit,
        operatingTime: detail.operatingTime,
        moduleState: detail.moduleState,
        moduleId: detail.moduleId
    });
    return true;
}
export default addDetailToLogs;