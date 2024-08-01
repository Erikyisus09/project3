import { modeloT } from "../models/tutores.model.js";

export const test4 = ()=>{
    console.log('si funciona la conexion al tutor')
}   

modeloT.create({
    name: "Paola",
    edad: 26,
    numero_celular: 4498856263
})
