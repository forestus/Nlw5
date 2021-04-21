import {createConnection} from "typeorm";

createConnection().then(async connection => {

    console.log("DB connection started");

}).catch(error => console.log(error));
