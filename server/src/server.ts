import Koa from "koa";
import { type Server } from "http";

import config from "./config";


const app = new Koa();
const PORT: string = config.port;

const server: Server = app.listen( PORT, async () => {
    console.log(`Server listening on PORT : ${PORT}`);
})
.on( "error", ( e:Error ) => {
    console.error( e );
});