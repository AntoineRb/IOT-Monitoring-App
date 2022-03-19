import { PrismaClient } from "@prisma/client";
import { IRouterContext } from "koa-router";
import {create, findUnique, findMany, findModuleWithName ,update, deleteUnique} from "../services/module";
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
        return "Module Ajouté à l'interface de monitoring !"
    }
    return "Une erreur c'est produite !"
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

export const findModuleWithNameController = async ( name:string ) => {
    return await findModuleWithName( name )
    .catch( ( e:Error ) => {
        throw e;  
    })
    .finally( () => {
        prisma.$disconnect;
    });
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

export const updateController = async ( id:number, ctx:IRouterContext ) => {
    let requestIsOk = false;
    const data: IModule = ctx.request.body;
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
        return "Module mis à jours avec succès !"
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
        return "Module supprimé avec succès !"
    }
    return "Une erreur c'est produite !"
}