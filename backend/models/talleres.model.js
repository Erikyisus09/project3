import { Schema, model } from "mongoose";

export const esquemaTA = new Schema({
    name: {
        type: String
    },
    horario: {
        type: String
    },
})

export const modeloTA = new model ('Talleres', esquemaTA)