import { model, Schema } from "mongoose";
import { FuncSchema } from "./funcSchema";

const AtividadeSchema = new Schema(
  {
    titulo: {
      type: String,
      required: [true, "O campo titulo é obrigatorio"]
    },
    tempoProducao: {
        type: Number,
        min: [1, "Tempo minimo 1 dia"],
        required: [true, "O campo tempo de produção é obrigatorio"]
    },
    criador: {
      type: String,
      required: [true, "O campo criador é obrigatorio"]
    },
    
    funcionario: [FuncSchema],

    inciadaEm: {
        type: Date
    },
    descricao:{
        type: String
    }
  },
  {
    timestamps: true
  }

)

export default model("atividades", AtividadeSchema);