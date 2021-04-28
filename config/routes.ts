import { Router } from "express";
import {funcController} from "../controllers/funcController";

const router = Router();
const funcionario = new funcController();

router.post("/nossaequipe/cadastrar/funcionario",funcionario.cadastrarFuncionario);






export {router};