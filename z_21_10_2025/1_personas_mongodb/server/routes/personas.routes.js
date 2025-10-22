import { Router } from "express";
import controladorPersona from "../controllers/personas.controller.js";




const rotuteEPersona = Router();



rotuteEPersona.get('/',controladorPersona.obtenerTodos)


rotuteEPersona.post('/',controladorPersona.crearPersona )



rotuteEPersona.get('/:name',controladorPersona.buscarPerson)

rotuteEPersona.delete('/:name', controladorPersona.borrarPersona)

rotuteEPersona.put('/:name', controladorPersona.updatePersona)

export default rotuteEPersona;