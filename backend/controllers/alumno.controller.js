import { modelo } from "../models/alumno.model.js";

export const test = ()=>{
    console.log('si funciona la conexion al alumno')
}   

modelo.create({
    name: "Erik",
    edad: 20,
    matricula: "UTM22030679"
})
