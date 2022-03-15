export interface IConfig {
    port: string
}

export interface IModule {
    type: string,
    name: string
}

export interface IDetail {
    value: number,
    unit: string,
    operatingTime?: Date,
    moduleState?: boolean,
    dataCount?: number,
    moduleId: number
}