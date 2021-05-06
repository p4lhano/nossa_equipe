import { Request, Response } from "express";
import AtividadeSchema from "../models/AtividadeSchema";

class AtividadeController{

    async cadastrar(request: Request, response: Response) {
        try {
            const { titulo } = request.body.nome;
            console.log(titulo);
            const novaAtividade = await AtividadeSchema.findOne({ titulo: titulo});
            if(novaAtividade == null){
                const novaPessoa = await AtividadeSchema.create(request.body);
                response.status(201).json({
                data: novaPessoa,
                error: false,
                msg: "Atividade cadastrado com sucesso!"
                });
            }else{
                response.status(400).json({
                    data: novaAtividade,
                    error: false,
                    msg: "Já exite uma atividade com esse nome!"
                });
            }
        } catch(error) {
            response.status(400).json({
                data: error,
                error: true,
                msg: "Não foi possível cadastrar a atividade"
            });
        }
    }

    async procurarAtividadePorTitulo(request: Request, response: Response) {
        try{
            const { titulo } = request.params;
            const atividade = await AtividadeSchema.findOne({ titulo: titulo});
            if(atividade != null){
                response.status(200).json({
                    data: atividade,
                    error: false,
                    msg: "Atividade encontrada!"
                });
            } else {
                response.status(404).json({
                    data: atividade,
                    error: false,
                    msg: "Atividade não encontrado!"
                });
            }
        } catch(error) {
            response.status(400).json({
                data: error,
                error: true,
                msg: "Nome invalido"
            });
        }
    }

    async procurarAtividadePorCriador(request: Request, response: Response) {
        try{
            const { Criador } = request.params;
            const atividade = await AtividadeSchema.findOne({ criador: Criador});
            if(atividade != null){
                response.status(200).json({
                    data: atividade,
                    error: false,
                    msg: "Atividade encontrada!"
                });
            } else {
                response.status(404).json({
                    data: atividade,
                    error: false,
                    msg: "Atividade não encontrado!"
                });
            }
        } catch(error) {
            response.status(400).json({
                data: error,
                error: true,
                msg: "Nome invalido"
            });
        }
    }

    async alterar(request: Request, response: Response) {
        try {
            const { titulo } = request.body.titulo;
            const atividade = await AtividadeSchema.findOneAndUpdate({ titulo: titulo}, request.body);
            if(atividade != null){
                response.status(200).json({
                data: atividade,
                error: false,
                msg: "Atividade alterada com sucesso!"
                });
            }else{
                response.status(404).json({
                    data: atividade,
                    error: false,
                    msg: "Atividade não cadastrado"
                });
            }
        } catch (error) {
          response.status(400).json({
            data: error,
            error: true,
            msg: "Não foi possível alterar a atividade"
          });
        }
    }

    async deletar(request: Request, response: Response) {
        try{
            const { titulo } = request.params;
            const atividade = await AtividadeSchema.findOneAndDelete({ titulo: titulo});
            if(atividade != null){
                response.status(200).json({
                    data: atividade,
                    error: false,
                    msg: "A atividade foi deletada com sucesso!"
                });
            } else {
                response.status(404).json({
                    data: atividade,
                    error: false,
                    msg: "Não há nenhuma ativiadae cadastrado com esse titulo!"
                });
            }
        } catch(error){
            response.status(400).json({
                data: error,
                error: true,
                msg: "Não foi possível deletar a atividade"
            });
        }
    }
    
}

export { AtividadeController };