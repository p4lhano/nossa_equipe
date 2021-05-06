import { Router } from "express";
import {funcController} from "../controllers/funcController";
import { AtividadeController } from "../controllers/AtividadeController";

const router = Router();
const funcionario = new funcController();
const atividade = new AtividadeController();

router.post("/cadastrar/funcionario",funcionario.cadastrar);
router.post("/buscar/funcionario", funcionario.buscaId);
router.post("/buscar/funcionario/:nome", funcionario.buscaNome);
router.post("/funcionario/alterar",funcionario.alterar);
router.post("/funcionario/remover",funcionario.remover);

router.post("/ativiade/cadastrar", atividade.cadastrar);
router.get("/atividade/procurarPorTitulo/:titulo", atividade.procurarAtividadePorTitulo);
router.get("/atividade/procurarPorCriador/:criador", atividade.procurarAtividadePorCriador);
router.put("/atividade/alterar", atividade.alterar);
router.delete("/atividade/deletar/:titulo", atividade.deletar);
router.put("/atividade/cadastrarFuncionario", atividade.cadastrarFuncionario);

export {router};