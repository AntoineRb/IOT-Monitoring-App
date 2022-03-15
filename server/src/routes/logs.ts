import Router, { IRouterContext } from "koa-router";

import {createController} from "../controllers/logs";

const router = new Router();

router.post( '/logs/add', async ( ctx:IRouterContext ) => {
    ctx.body = await createController( ctx );
});

export default router;