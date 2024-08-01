import { Schema, model } from "mongoose";
import { esquemaI } from "./intendentes.model.js";


export const modeloT = new model ('Tutores', esquemaI)