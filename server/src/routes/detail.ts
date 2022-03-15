import Router, { IRouterContext } from "koa-router";
import * as crud from "../controllers/detail"

const router = new Router();

router.post( '/detail/add', async ( ctx:IRouterContext ) => {
    ctx.body = await crud.createController( ctx );
})

router.get('/detail/all', async ( ctx:IRouterContext ) => {
    ctx.body = await crud.findManyController();
})

export default router;