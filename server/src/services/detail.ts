import { PrismaClient } from "@prisma/client";

import { IDetail } from "../types/interface";

const prisma = new PrismaClient();

export const create = async ( data:IDetail ) => {
    await prisma.detail.create({
        data
    })
}

export const findMany = async () => {
    return await prisma.detail.findMany();
}

export const findUnique = async ( id:number ) => {
    return await prisma.detail.findUnique({
        where: {
            id
        }
    });
}

export const update = async ( id:number, data:IDetail ) => {
    return await prisma.detail.update({
        where: {
            id
        },
        data
    })
}

export const deleteUnique = async ( id:number ) => {
    return await prisma.detail.delete({
        where: {
            id
        }
    })
}