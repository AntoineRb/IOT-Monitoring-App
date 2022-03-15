import { PrismaClient } from "@prisma/client";

import { IModule } from "../types/interface";

const prisma = new PrismaClient();

export const create = async ( data: IModule ) => {
    await prisma.module.create({
        data
    })
}