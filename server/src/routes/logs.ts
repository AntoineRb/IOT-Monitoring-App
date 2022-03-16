import Router, { IRouterContext } from "koa-router";

import { createController, findManyController, findFirstController } from "../controllers/logs";

const router = new Router();

router.post( '/logs/add', async ( ctx:IRouterContext ) => {
    ctx.body = await createController( ctx );
});

router.get( '/logs/all/:moduleId', async ( ctx:IRouterContext ) => {
    const moduleId: number = +ctx.params.moduleId
    ctx.body = await findManyController( moduleId );
});

router.get( '/logs/last/:moduleId', async ( ctx:IRouterContext ) => {
    const moduleId: number = +ctx.params.moduleId
    ctx.body = await findFirstController( moduleId );
});

export default router;