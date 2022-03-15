import { PrismaClient } from "@prisma/client";

import { IDetail } from "../types/interface";

const prisma = new PrismaClient();

export const create = async ( data:IDetail ) => {
    await prisma.detail.create({
        data
    })
}