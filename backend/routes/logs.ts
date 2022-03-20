import Router, { IRouterContext } from "koa-router";

import * as crud from "../controllers/logs";

const router = new Router();

router.post( '/logs/add', async ( ctx:IRouterContext ) => {
    ctx.body = await crud.createController( ctx );
});

router.get( '/logs/all/values/:moduleId', async ( ctx:IRouterContext ) => {
    const moduleId: number = +ctx.params.moduleId
    ctx.body = await crud.findAllValuesController( moduleId );
});

router.get( '/logs/all/:moduleId', async ( ctx:IRouterContext ) => {
    const moduleId: number = +ctx.params.moduleId
    ctx.body = await crud.findManyController( moduleId );
});



router.get( '/logs/last/:moduleId', async ( ctx:IRouterContext ) => {
    const moduleId: number = +ctx.params.moduleId
    ctx.body = await crud.findFirstController( moduleId );
});

export default router;