import { model, Schema } from "mongoose";

const FuncSchema = new Schema(
    {
        status: {
            type: String,
            require: [true, "O campo STATUS é obrigatório!"],
            enum: ["ativo", "inativo"],
            lowercase: true
        },
        nome: {
            type: String,
            require: [true, "O campo nome é obrigatório!"]
        },
        cpf: {
            type: String,
            require: [true, "O campo CPF é obrigatório!"]
        },
        cargo: {
            type: String,
            enum: ["ASSISTENTE", "ANALISTA", "SUPERVISOR","GERENTE","DIRETOR","PRESIDENTE"],
            uppercase: true
        },
        salario: {
            type: Number
        },
        setor: {
            type: String
        },
        cnh: {
            type: String
        },
        dataNascimento:{
            type: Date
        }

    },
    {
        timestamps: true
    }
);

export default model("funcionarios", FuncSchema);

//Falta add os cargos, salarios, setor, vericar se será necessário criar mais schemas, acho que sim
/*
{
        "status": "ativo",
        "nome": "Vitor",
        "cpf": "999999.9",
        "cargo": "ASSISTENTE",
        "salario": 256,
        "setor": "Banco",
        "cnh": "51651",
        "dataNascimento": "2002-04-03"
}

*/