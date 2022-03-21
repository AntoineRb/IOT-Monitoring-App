import { PrismaClient } from "@prisma/client";
import dataGenerator from "../generator/dataGenerator";

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
    const logs = await prisma.logs.findMany({
        where: {
            moduleId
        }
    });
    const logsArr: [number[]] = [[0, 0]];
    let dataCount = 1;
    await logs.forEach( log => {
        logsArr.push([ ++dataCount, log.value ]);
    })
    return logsArr;
}

export const findFirst = async ( moduleId:number ) => {
    return await prisma.logs.findFirst({
        where: {
            moduleId
        }
    })
}
