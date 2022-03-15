import Koa from "koa";
import { type Server } from "http";

import config from "./config";

import moduleRoutes from "./routes/module";
import bodyParser from "koa-bodyparser";


const app = new Koa();
const PORT: string = config.port;

app.use( bodyParser() )
app.use( moduleRoutes.routes() );

const server: Server = app.listen( PORT, async () => {
    console.log(`Server listening on PORT : ${PORT}`);
})
.on( "error", ( e:Error ) => {
    console.error( e );
});