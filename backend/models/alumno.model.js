import { Schema, model } from "mongoose";

export const esquema = new Schema({
    name: {
        type: String
    },
    edad: {
        type: Number
    },
    matricula: {
        type: String
    }
})

export const modelo = new model ('alumnos', esquema)