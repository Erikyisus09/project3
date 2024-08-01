import { modeloI } from "../models/intendentes.model.js";

export const test3 = ()=>{
    console.log('si funciona la conexion a los intendentes')
}   

modeloI.create({
    name: "Juan",
    edad: 46,
    numero_celular: 4492256562
})
