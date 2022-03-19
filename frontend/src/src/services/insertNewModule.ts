import { IDetail, IModule } from "../Types/interface";

interface IData {
    module: IModule
    detail: IDetail
}

interface IModuleToCreate {
    type: string,
    name: string
}


const insertNewModule =  async ( data: IData ) => {
    let moduleIsCreate: boolean = false;
    let moduleId: number;
    let detailIsCreate: boolean = false;
    // Create New Module
    const module: IModuleToCreate = {
        type: data.module.type,
        name: data.module.name
    }
    // Request Api to create a new Module
    await fetch('http://localhost:8080/module/add', { // Change Later For Base URL
        method: "POST",
        headers: {
            "Content-Type":  "application/json; charset=UTF-8"
        },
        body: JSON.stringify(module)
    })
    .then( () => {
        moduleIsCreate = true;
    })
    .catch(( err:Error ) => {
        throw err;
    });
    // Get Id Of module set by the server
    await fetch(`http://localhost:8080/module/name/${module.name}`, { // Change Later For Base URL
        method: "GET",
        headers: {
            "Content-Type":  "application/json; charset=UTF-8"
        }
    })
    .then( response  => response.json() )
    .then( ( response:IModule ) => {
        moduleId = response.id; 
    })
    .catch(( err:Error ) => {
        throw err;
    });
    // Create detail
    const detail: IDetail = {
        value: 0,
        minValue: data.detail.minValue,
        maxValue: data.detail.maxValue,
        unit: data.detail.unit,
        moduleId: moduleId
    }
    // Request Api to Add New Module Detail
    await fetch('http://localhost:8080/detail/add', { // Change Later For Base URL
        method: "POST",
        headers: {
            "Content-Type":  "application/json; charset=UTF-8"
        },
        body: JSON.stringify(detail)
    })
    .then( () => {
        detailIsCreate = true;
    })
    .catch(( err:Error ) => {
        throw err;
    });

    if ( moduleIsCreate && detailIsCreate ) {
        return true;
    }
    return false;
}
export default insertNewModule;