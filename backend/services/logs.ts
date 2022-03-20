import { PrismaClient } from "@prisma/client";

import { ILogs } from "../types/interface";

const prisma = new PrismaClient();

export const create = async ( data:ILogs ) => {
    await prisma.logs.create({
        data
    });
}

export const findMany = async ( moduleId:number ) => {
    return await prisma.logs.findMany({
        where: {
            moduleId
        }
    })
}

export const findAllValues = async ( moduleId:number ) => {
    const data = await prisma.logs.findMany({
        where: {
            moduleId
        }
    });
    return data.map( log => log.value );
}

export const findFirst = async ( moduleId:number ) => {
    return await prisma.logs.findFirst({
        where: {
            moduleId
        }
    })
}
