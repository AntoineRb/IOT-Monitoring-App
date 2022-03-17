export type TAllModuleResponse = IModuleResponse[];
export type TAllDetailResponse = IDetailResponse[];
export type TAllLogsResponse = ILogsResponse[];

export interface IModuleResponse {
    id: number,
    creationDate: string,
    type: string,
    name: string
}

export interface IDetailResponse {
    id: number,
    value: number,
    minValue: number,
    maxValue: number,
    unit: string,
    operatingTime: string,
    moduleState: boolean,
    dataCount: number,
    moduleId:number  
}

export interface ILogsResponse {
    id: number,
    date: string,
    value: number,
    minValue: number,
    maxValue: number,
    unit: number,
    operatingTime: string,
    moduleState: boolean,
    moduleId: number
}
