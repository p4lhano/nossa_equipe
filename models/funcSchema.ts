import { model, Schema } from "mongoose";

const FuncSchema = new Schema(
    {
        nome: {
            type: String,
            require: [true, "O campo nome é obrigatório!"]
        },
        cpf: {
            type: String,
            require: [true, "O campo CPF é obrigatório!"]
        },

    },
    {
        timestamps: true
    }
);

export default model("func", FuncSchema);

//Falta add os cargos, salarios, setor, vericar se será necessário criar mais schemas, acho que sim