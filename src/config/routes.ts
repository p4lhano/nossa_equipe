import { Router } from "express";
import {funcController} from "../controllers/funcController";

const router = Router();
const funcionario = new funcController();

router.post("/cadastrar/funcionario",funcionario.cadastrar);
router.post("/buscar/funcionario", funcionario.buscaId);
router.post("/buscar/funcionario/:nome", funcionario.buscaNome);
router.post("/funcionario/alterar",funcionario.alterar);






export {router};