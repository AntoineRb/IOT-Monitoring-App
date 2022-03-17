import { PrismaClient } from "@prisma/client";
import { IRouterContext } from "koa-router";

import { ILogs } from "../types/interface";
import { create, findMany, findFirst } from "../services/logs";

const prisma = new PrismaClient();

export const createController = async ( ctx:IRouterContext ) => {
    let requestIsOk = false;
    const data: ILogs = ctx.request.body;
    await create( data )
    .then( () => {
        requestIsOk = true;
    })
    .catch( ( e:Error ) => {
        throw e;  
    })
    .finally( () => {
        prisma.$disconnect;
    });
    if ( requestIsOk ) {
        return "Detail Du module ajouté au logs"
    }
    return "Une erreur c'est produite !"
}

export const findManyController = async ( moduleId:number ) => {
    return await findMany( moduleId )
    .catch( ( e:Error ) => {
        throw e;  
    })
    .finally( () => {
        prisma.$disconnect;
    });
}

export const findFirstController = async ( moduleId:number ) => {
    return await findFirst( moduleId )
    .catch( ( e:Error ) => {
        throw e;  
    })
    .finally( () => {
        prisma.$disconnect;
    });
}

