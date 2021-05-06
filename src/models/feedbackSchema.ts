import { model, Schema } from "mongoose";

const feedbackSchema = new Schema(
    {
        funcionario_id: {
            type: String,
            require: true
        }, msg: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true
    }
);

export default model("feedback", feedbackSchema);