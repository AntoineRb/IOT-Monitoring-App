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