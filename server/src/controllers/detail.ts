import { PrismaClient } from "@prisma/client";
import { IRouterContext } from "koa-router";

import { IDetail, ILogs } from "../types/interface";

import * as crud from "../services/detail";

const prisma = new PrismaClient();

export const createController = async ( ctx:IRouterContext ) => {
    let requestIsOk = false;
    const data: IDetail = ctx.request.body;
    await crud.create( data )
    .then( () => {
        requestIsOk = true;
    })
    .catch( ( e:Error ) => {
        throw e;  
    })
    .finally( () => {
        prisma.$disconnect;
    })
    if ( requestIsOk ) {
        return "Detail ajouté au module !"
    }
    return "Une erreur c'est produite !"
}

export const findManyController = async () => {
    return await crud.findMany()
    .catch( ( e:Error ) => {
        throw e;  
    })
    .finally( () => {
        prisma.$disconnect;
    });
}

export const findUniqueController = async ( id:number ) => {
    return await crud.findUnique( id )
    .catch( ( e:Error ) => {
        throw e;  
    })
    .finally( () => {
        prisma.$disconnect;
    });
}

export const updateController = async ( id:number, ctx:IRouterContext ) => {
    let requestIsOk = false;
    const data: IDetail = ctx.request.body;
    await crud.update( id, data )
    .then( () => {
        requestIsOk = true;
    })
    .catch( ( e:Error ) => {
        throw e;  
    })
    .finally( () => {
        prisma.$disconnect;
    })
    if ( requestIsOk ) {
        return "Detail du module mis à jours avec succès !"
    }
    return "Une erreur c'est produite !"
}

export const updateManyOperatingTimeController = async ( ctx:IRouterContext ) => {
    let requestIsOk = false;
    const data: ILogs = ctx.request.body;
    const moduleState: boolean = data.moduleState;
    const operatingTime: Date = data.operatingTime;
    await crud.updateManyOperatingTime( moduleState, operatingTime )
    .then( () => {
        requestIsOk = true;
    })
    .catch( ( e:Error ) => {
        throw e;  
    })
    .finally( () => {
        prisma.$disconnect;
    })
    if ( requestIsOk ) {
        const state = moduleState ? "en marche" : "à l'arrêt";
        return `Les durées de fonctionnement des modules ${state} ont été mises à jours.`
    }
    return "Une erreur c'est produite !"
}

export const deleteUniqueController = async ( id:number ) => {
    let requestIsOk = false;
    await crud.deleteUnique( id )
    .then( () => {
        requestIsOk = true;
    })
    .catch( ( e:Error ) => {
        throw e;  
    })
    .finally( () => {
        prisma.$disconnect;
    })
    if ( requestIsOk ) {
        return "Détails du module supprimé avec succès !"
    }
    return "Une erreur c'est produite !"
}