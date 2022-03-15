import Router, { IRouterContext } from "koa-router";
import * as crud from "../controllers/module";

const router = new Router();

router.post( '/module/add', async ( ctx:IRouterContext ) => {
    ctx.body = await crud.createController( ctx );
})

router.get( '/module/:id', async ( ctx:IRouterContext ) => {
    const id: number = +ctx.params.id;
    ctx.body = await crud.findUniqueController( id );
})

export default router;