export interface IConfig {
    port: string
}

export interface IModule {
    id?: number,
    creationDate?: Date,
    type: string,
    name: string
}

export interface IDetail {
    value: number,
    minValue: number,
    maxValue: number,
    unit: string,
    operatingTime?: Date,
    moduleState?: boolean,
    dataCount?: number,
    moduleId: number
}

export interface ILogs {
    value: number,
    minValue: number,
    maxValue: number,
    unit: string,
    operatingTime: Date,
    moduleState: boolean,
    moduleId: number
}