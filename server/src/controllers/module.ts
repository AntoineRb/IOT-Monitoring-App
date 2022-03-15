import { PrismaClient } from "@prisma/client";
import { IRouterContext } from "koa-router";
import {create} from "../services/module";
import { IModule } from "../types/interface";

const prisma = new PrismaClient();

export const createController = async ( ctx:IRouterContext ) => {
    let requestIsOk = false;
    const data: IModule = ctx.request.body;
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
        console.log(' here ');
        return "Module Ajouté à l'interface de monitoring !"
    }
    return "Une erreur c'est produite !"
}