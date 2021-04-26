import express from "express";
import {mongoose} from "../config/database";

const app = express();
const database = mongoose;
console.clear();
app.listen(3000, () => {
    console.log("O servidor está rodando...") ;
 });