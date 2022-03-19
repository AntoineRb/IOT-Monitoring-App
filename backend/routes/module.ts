import Router, { IRouterContext } from "koa-router";
import * as crud from "../controllers/module";

const router = new Router();

router.post( '/module/add', async ( ctx:IRouterContext ) => {
    ctx.body = await crud.createController( ctx );
})

router.get( '/module/all', async ( ctx:IRouterContext ) => {
    ctx.body = await crud.findManyController();
})

router.get( '/module/name/:name', async ( ctx:IRouterContext ) => {
    const name: string = ctx.params.name;
    ctx.body = await crud.findModuleWithNameController( name );
})

router.get( '/module/:id', async ( ctx:IRouterContext ) => {
    const id: number = +ctx.params.id;
    ctx.body = await crud.findUniqueController( id );
})


router.patch( '/module/update/:id', async ( ctx:IRouterContext ) => {
    const id:number = +ctx.params.id;
    ctx.body = await crud.updateController( id, ctx );
})

router.delete( '/module/delete/:id', async ( ctx:IRouterContext ) => {
    const id:number = +ctx.params.id;
    ctx.body = await crud.deleteUniqueController( id );
})

export default router;