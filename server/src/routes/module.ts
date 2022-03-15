import Router, { IRouterContext } from "koa-router";
import * as crud from "../controllers/module";

const router = new Router();

router.post( '/module/add', async ( ctx:IRouterContext ) => {
    ctx.body = await crud.createController( ctx );
})

export default router;