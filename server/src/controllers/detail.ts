import { PrismaClient } from "@prisma/client";
import { IRouterContext } from "koa-router";

import { IDetail } from "../types/interface";

import { create, findMany, findUnique, update, deleteUnique } from "../services/detail";

const prisma = new PrismaClient();

export const createController = async ( ctx:IRouterContext ) => {
    let requestIsOk = false;
    const data: IDetail = ctx.request.body;
    await create( data )
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
    return await findMany()
    .catch( ( e:Error ) => {
        throw e;  
    })
    .finally( () => {
        prisma.$disconnect;
    });
}

export const findUniqueController = async ( id:number ) => {
    return await findUnique( id )
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
    await update( id, data )
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

export const deleteUniqueController = async ( id:number ) => {
    let requestIsOk = false;
    await deleteUnique( id )
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