import { request, Router } from "express";
import { feedbackController } from "../controllers/feedbackController";
import {funcController} from "../controllers/funcController";

const router = Router();
const funcionario = new funcController();
const feedback = new feedbackController();

router.post("/cadastrar/funcionario",funcionario.cadastrar);
router.post("/buscar/funcionario", funcionario.buscaId);
router.post("/buscar/funcionario/:nome", funcionario.buscaNome);
router.post("/funcionario/alterar",funcionario.alterar);
router.post("/funcionario/remover",funcionario.remover);
router.get("/feedback/add", feedback.cadastrar);





export {router};