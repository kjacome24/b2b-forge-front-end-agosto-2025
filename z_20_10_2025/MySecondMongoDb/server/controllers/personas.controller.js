import Personas from "../models/personas.model.js"




const controladorPersona = {
    obtenerTodos : async (req,res)=>{
        try{
            const listaPersonas = await Personas.find()
            res.status(201).json(listaPersonas)
        }catch(e){
            res.status(501).json(e)
        }

}, crearPersona: async (req,res)=>{

    const {name, edad} = req.body;
    if(!name || !edad){
        return res.status(405).json({message: "falta una de las entradas"})
    }
    const newPersona = {name, edad}
    try{
        const personaAgregada = await Personas.create(newPersona)
        res.status(201).json(personaAgregada)
    }catch(e){
        console.log(`there was an issue ${e}`)
    }


}, buscarPerson : async (req, res)=>{
    const name = req.params.name;

    try{
        const unaPersona = await Personas.findOne({name})
        if(!unaPersona){
            return res.status(404).json({message: 'No hay persona con ese nombre'})
        }
        res.status(201).json(unaPersona)
    }catch(e){
        return res.status(400).json(e)
    }

}
}

export default controladorPersona;