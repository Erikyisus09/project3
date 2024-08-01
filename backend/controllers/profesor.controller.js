import { modeloP } from "../models/profesor.model.js";

export const test2 = ()=>{
    console.log('si funciona la conexion a los profesores')
}   

modeloP.create({
    name: "Jessica",
    edad: 24,
    materia: "Mineria de texto"
})

