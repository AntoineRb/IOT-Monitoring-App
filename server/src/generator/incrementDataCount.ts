import { findUnique as findDetail, update as updateDetail } from "../services/detail";
import { IDetail } from "../types/interface";

async function incrementDataCount ( moduleDetail:IDetail ) {
    const moduleID:number = moduleDetail.moduleId;
    const detail:IDetail | null = await findDetail( moduleID );
    if ( detail === undefined || detail === null) {
        return false;
    } else if ( detail.dataCount === undefined ) {
        return false;
    }
    await updateDetail( moduleID, {
        value: detail.value,
        minValue: detail.minValue,
        maxValue: detail.maxValue,
        unit: detail.unit,
        dataCount: detail.dataCount + 1,
        moduleId: detail.moduleId
    })
    return true;
}
export default incrementDataCount;