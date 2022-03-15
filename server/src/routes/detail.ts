import Router, { IRouterContext } from "koa-router";
import * as crud from "../controllers/detail"

const router = new Router();

router.post( '/detail/add', async ( ctx:IRouterContext ) => {
    ctx.body = await crud.createController( ctx );
})

export default router;