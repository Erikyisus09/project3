import { Schema, model } from "mongoose";

export const esquemaP = new Schema({
    name: {
        type: String
    },
    edad: {
        type: Number
    },
    materia: {
        type: String
    }
})

export const modeloP = new model ('profesores', esquemaP)