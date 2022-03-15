import { PrismaClient } from "@prisma/client";
import { IRouterContext } from "koa-router";

import { IDetail } from "../types/interface";

import { create, findMany } from "../services/detail";

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