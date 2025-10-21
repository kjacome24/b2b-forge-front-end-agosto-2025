import { Router } from "express";
import controladorPersona from "../controllers/personas.controller.js";




const rotuteEPersona = Router();



rotuteEPersona.get('/',controladorPersona.obtenerTodos)


rotuteEPersona.post('/',controladorPersona.crearPersona )



rotuteEPersona.get('/:name',controladorPersona.buscarPerson)


export default rotuteEPersona;