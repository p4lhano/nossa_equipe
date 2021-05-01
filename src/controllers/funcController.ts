import {Request, Response} from "express";
import funcSchema from "../models/funcSchema";

class funcController{
    async cadastrar(request: Request, response: Response) {
        try {
            //console.log(request.body);
            const novoFuncionario = await funcSchema.create(request.body);
            response.status(201).json({
                data: novoFuncionario,
                error: false,
                msg:"Exito ao cadastrar"
            });
        }
        catch (error) {
            response.status(400).json({
                data: error,
                error: true,
                msg: "Não foi possível completar"
            });
        }
    }
}



export {funcController};