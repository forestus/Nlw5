import express from "express";
import "./database";
import "reflect-metadata";
import {routes} from "./routes";

const app = express();
app.use(routes)

app.listen(3333,()=>{
    console.log("server on PORT 3333")
})