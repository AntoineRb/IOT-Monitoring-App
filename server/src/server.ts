import Koa from "koa";
import { type Server } from "http";

import config from "./config";

import bodyParser from "koa-bodyparser";

import moduleRoutes from "./routes/module";
import detailRoutes from "./routes/detail";
import logsRoutes from "./routes/logs";

const app = new Koa();
const PORT: string = config.port;

app.use( bodyParser() );
app.use( moduleRoutes.routes() );
app.use( logsRoutes.routes() );

const server: Server = app.listen( PORT, async () => {
    console.log(`Server listening on PORT : ${PORT}`);
})
.on( "error", ( e:Error ) => {
    console.error( e );
});