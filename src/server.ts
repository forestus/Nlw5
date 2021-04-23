import { httpServer } from "./http";
const PORT = process.env.PORT;
import "./websocket/client";

httpServer.listen(3333,()=>{
    console.log(`server on http://locahost:${PORT}`)
})