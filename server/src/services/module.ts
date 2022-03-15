import { PrismaClient } from "@prisma/client";

import { IModule } from "../types/interface";

const prisma = new PrismaClient();

export const create = async ( data: IModule ) => {
    await prisma.module.create({
        data
    })
}

export const findMany = async () => {
    return await prisma.module.findMany();
}

export const findUnique = async ( id:number ) => {
    return await prisma.module.findUnique({
        where: {
            id
        }
    })
}
