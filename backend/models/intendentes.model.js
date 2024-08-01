import { Schema, model } from "mongoose";

export const esquemaI = new Schema({
    name: {
        type: String
    },
    edad: {
        type: Number
    },
    numero_celular: {
        type: Number
    }
})

export const modeloI = new model ('intendentes', esquemaI)