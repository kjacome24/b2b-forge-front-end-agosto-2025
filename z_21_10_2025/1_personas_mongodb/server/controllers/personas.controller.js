import Personas from "../models/personas.model.js"




const controladorPersona = {
    obtenerTodos : async (req,res)=>{
        try{
            const listaPersonas = await Personas.find(

                // {name: {$ne: "Kevin"}}
                // $gt
                // $gte
                // $lt
                // $lte
                // $eq igual a
                // {$and: [{name: {$ne: 'Kevin'}}, {edad: {$gt: 20}}]}
                {$or: [{name: {$eq: 'Kevin'}}, {edad: {$gt: 20}}]}
            )
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
        if (e.code==11000){
            return res.status(400).json({message: "The user name already exist"})
        }
        // if(e.errors.name.message){
        //     return res.status(400).json({message: e.errors.name.message})
        // }
        return res.status(400).json(e)
    }


}, buscarPerson : async (req, res)=>{
    const name = req.params.name;

    try{
        // const unaPersona = await Personas.findOne({name})
        const unaPersona = await Personas.findById(name)
        if(!unaPersona){
            return res.status(404).json({message: 'No hay persona con ese nombre'})
        }
        res.status(201).json(unaPersona)
    }catch(e){
        return res.status(400).json(e)
    }

}, borrarPersona : async (req,res)=> {
    const name = req.params.name;
    try{
        // const personaEliminada  = await Personas.findOneAndDelete({name})
        const personaEliminada  = await Personas.findByIdAndDelete(name)
        if(!personaEliminada){
            return res.status(404).json({message: "The user does not exist"})
        }
        return res.status(201).json({message: "The user was deleted succesfully "})
    }catch(e){
        return res.status(400).json(e)
    }
}, updatePersona : async (req,res)=> {
    const name1 = req.params.name;
    const {name, edad} = req.body;
    const newData = {}
    if(name){
        newData.name = name;
    }
    if(edad){
        newData.edad = edad;
    }
    console.log(newData)
    try{
        const personaActualizada = await Personas.findOneAndUpdate({name: name1},newData, {new:true, runValidators: true})
        if(!personaActualizada){
            return res.status(404).json('The name u indicated is not in the BD')
        }
        res.status(201).json(personaActualizada)
    }catch(e){
        return res.status(400).json(e)
    }
}

}

export default controladorPersona;