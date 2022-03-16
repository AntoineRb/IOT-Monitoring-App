import Router, { IRouterContext } from "koa-router";
import * as crud from "../controllers/detail"

const router = new Router();

router.post( '/detail/add', async ( ctx:IRouterContext ) => {
    ctx.body = await crud.createController( ctx );
})

router.get('/detail/all', async ( ctx:IRouterContext ) => {
    ctx.body = await crud.findManyController();
})

router.get('/detail/:id', async ( ctx:IRouterContext ) => {
    const id: number = +ctx.params.id;
    ctx.body = await crud.findUniqueController( id );
})

router.patch('/detail/update/many', async ( ctx:IRouterContext ) => {
    ctx.body = await crud.updateManyOperatingTimeController( ctx );
});

router.patch('/detail/update/:id', async ( ctx:IRouterContext ) => {
    const id: number = +ctx.params.id;
    ctx.body = await crud.updateController( id, ctx );
});


router.delete('/detail/delete/:id', async ( ctx:IRouterContext ) => {
    const id: number = +ctx.params.id;
    ctx.body = await crud.deleteUniqueController( id );
});

export default router;