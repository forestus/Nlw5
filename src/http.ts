import express from "express";
import { createServer } from "http";
import {Server,Socket  } from "socket.io";
import { renderFile } from "ejs";
import {routes} from "./routes";
import path from "path";
import "./database";
import "reflect-metadata";
 
const app = express();
const httpServer = createServer(app); //http
const io = new Server(httpServer);//websocket

app.use(express.json());
app.use(routes);
app.use(express.static(path.join(__dirname, "..",'public')));
app.set('views', path.join(__dirname, "..",'public'));
app.engine('html', renderFile);
app.set('view engine', 'html');


app.get("/pages/client",(request,response)=>{
    return response.render("html/client.html")
})

io.on("connection", (socket: Socket) => {
   console.log("se conectou", socket.id)
});

export {httpServer, io}