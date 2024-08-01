import { modeloTA } from "../models/talleres.model.js";

export const test5 = ()=>{
    console.log('si funciona la conexion a los talleres')
}   

modeloTA.create({
    name: "Ajedres",
    horario: "Lunes y Martes de 4:00pm a 6:00pm",
})
